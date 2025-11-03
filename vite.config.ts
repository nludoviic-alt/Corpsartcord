import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Définir l'ordre de chargement des chunks
        chunkFileNames: (chunkInfo) => {
          // Garantir que vendor-react est toujours chargé en premier
          if (chunkInfo.name === 'vendor-react') {
            return 'assets/vendor-react-[hash].js';
          }
          return 'assets/[name]-[hash].js';
        },
        manualChunks: (id) => {
          // Vendor chunks optimisés - React doit être chargé en premier
          if (id.includes('node_modules')) {
            // PRIORITÉ 1: React core - doit être en premier
            if (id.includes('react/') || 
                id.includes('react-dom/') || 
                id.includes('react/jsx-runtime') ||
                id.includes('scheduler')) {
              return 'vendor-react';
            }
            // PRIORITÉ 2: Packages React connus
            if (id.includes('react-router') ||
                id.includes('react-hook-form') ||
                id.includes('react')) {
              return 'vendor-react';
            }
            // Tous les packages qui utilisent React doivent être avec React
            // Packages UI qui dépendent de React
            if (id.includes('@radix-ui')) {
              return 'vendor-ui';
            }
            if (id.includes('embla')) {
              return 'vendor-carousel';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            if (id.includes('@tanstack')) {
              return 'vendor-query';
            }
            if (id.includes('sonner')) {
              return 'vendor-toast';
            }
            // Packages React/UI - tous dans vendor-react pour garantir l'ordre
            if (id.includes('class-variance-authority') || 
                id.includes('clsx') || 
                id.includes('tailwind-merge') ||
                id.includes('next-themes') ||
                id.includes('cmdk') ||
                id.includes('vaul') ||
                id.includes('recharts') ||
                id.includes('input-otp') ||
                id.includes('embla-carousel-autoplay') ||
                id.includes('react-resizable-panels') ||
                id.includes('@hookform')) {
              return 'vendor-react';
            }
            // Packages utilitaires pure JS UNIQUEMENT (sans aucune dépendance React)
            // Seulement date-fns et zod qui sont garantis de ne PAS utiliser React
            if (id.includes('date-fns') && !id.includes('react')) {
              return 'vendor-other';
            }
            if (id.includes('zod') && !id.includes('react')) {
              return 'vendor-other';
            }
            // TOUT LE RESTE va dans vendor-react pour éviter les problèmes d'ordre de chargement
            // Même si ce n'est pas React, si c'est dans node_modules, on le met avec React
            // pour garantir que React est toujours disponible quand nécessaire
            return 'vendor-react';
          }
          // Code splitting par route
          if (id.includes('/pages/')) {
            const pageName = id.split('/pages/')[1].split('.')[0];
            return `page-${pageName}`;
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: mode === 'development' ? 'inline' : false,
    reportCompressedSize: true,
    target: 'esnext',
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'lucide-react',
      '@radix-ui/react-dialog',
      '@radix-ui/react-toast',
    ],
    exclude: ['@tanstack/react-query'],
  },
  assetsInclude: ['**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.png'],
  // Configuration pour le développement
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version || '0.0.0'),
    __DEV__: mode === 'development',
  },
}));
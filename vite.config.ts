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
            // React et tout ce qui en dépend directement doit être ensemble
            if (id.includes('react') || 
                id.includes('react-dom') || 
                id.includes('react/jsx-runtime') ||
                id.includes('react-router') ||
                id.includes('react-hook-form') ||
                id.includes('scheduler')) {
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
            // Packages utilitaires sans React (date-fns, zod sont pure JS, peuvent rester séparés)
            if (id.includes('date-fns') || id.includes('zod')) {
              return 'vendor-other';
            }
            // Si le chemin contient des mots-clés suggérant React, mettre dans vendor-react
            // Liste conservative de packages connus qui utilisent React
            if (id.includes('react') || 
                id.includes('context') || 
                id.includes('hook') ||
                id.includes('component')) {
              return 'vendor-react';
            }
            // Autres dépendances (sans React) - packages pure JS uniquement
            return 'vendor-other';
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
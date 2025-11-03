import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Ajout d'un gestionnaire d'erreurs global pour aider au débogage
if (import.meta.env.DEV) {
  window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
  });
  
  window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
  });
}

const rootElement = document.getElementById("root");

if (rootElement) {
  try {
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error('Failed to render app:', error);
    rootElement.innerHTML = `
      <div style="padding: 2rem; text-align: center; font-family: sans-serif;">
        <h2 style="color: #333;">Erreur de chargement</h2>
        <p style="color: #666;">Une erreur s'est produite lors du chargement de l'application.</p>
        <p style="color: #999; font-size: 0.9rem;">Veuillez vérifier la console pour plus de détails.</p>
      </div>
    `;
  }
} else {
  console.error('Root element not found');
}
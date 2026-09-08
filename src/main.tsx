import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure Noble Visa Centre Favicon is dynamically applied across all browsers
function setupNobleFavicon() {
  const NOBLE_LOGO = "https://res.cloudinary.com/fivl3klo/image/upload/f_auto,q_auto/noble_visa_logo-01_1";
  
  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = NOBLE_LOGO;
  
  img.onload = () => {
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      
      // Draw smooth rounded background container
      ctx.fillStyle = "#071330";
      ctx.beginPath();
      ctx.roundRect(0, 0, 64, 64, 14);
      ctx.fill();
      
      // Calculate aspect ratio and center logo image
      const pad = 6;
      const targetW = 64 - pad * 2;
      const targetH = 64 - pad * 2;
      const ratio = Math.min(targetW / img.width, targetH / img.height);
      const drawW = img.width * ratio;
      const drawH = img.height * ratio;
      const drawX = (64 - drawW) / 2;
      const drawY = (64 - drawH) / 2;
      
      ctx.drawImage(img, drawX, drawY, drawW, drawH);
      
      const pngDataUrl = canvas.toDataURL("image/png");
      
      // Update all icon links
      const linkSelectors = ["link[rel*='icon']", "link[rel='shortcut icon']", "link[rel='apple-touch-icon']"];
      linkSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => el.remove());
      });
      
      const newIcon = document.createElement("link");
      newIcon.rel = "icon";
      newIcon.type = "image/png";
      newIcon.href = pngDataUrl;
      document.head.appendChild(newIcon);
      
      const newShortcut = document.createElement("link");
      newShortcut.rel = "shortcut icon";
      newShortcut.type = "image/png";
      newShortcut.href = pngDataUrl;
      document.head.appendChild(newShortcut);
      
      const newApple = document.createElement("link");
      newApple.rel = "apple-touch-icon";
      newApple.href = pngDataUrl;
      document.head.appendChild(newApple);
    } catch {
      // Fallback already present in index.html
    }
  };
}

setupNobleFavicon();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

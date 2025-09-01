import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router";
import App from './App.tsx'
import { ThemeProvider } from './components/theme-provider.tsx';
import { Toaster } from './components/ui/sonner.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
        <Toaster position={"bottom-right"} />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)

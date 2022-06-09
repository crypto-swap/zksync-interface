import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { PopupProvider } from '../contexts/PopupProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <PopupProvider>
        <Component {...pageProps} />
      </PopupProvider>
    </ThemeProvider>
  );
}

export default MyApp;

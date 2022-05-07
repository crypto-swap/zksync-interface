import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { WalletPopupProvider } from '../context/WalletPopupProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <WalletPopupProvider>
        <Component {...pageProps} />
      </WalletPopupProvider>
    </ThemeProvider>
  );
}

export default MyApp;

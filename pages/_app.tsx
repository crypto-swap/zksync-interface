import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React, { useState, createContext } from 'react';

interface WalletContextType {
  wallet: boolean;
  setWallet: React.Dispatch<React.SetStateAction<boolean>>;
  walletPopupOpen: boolean;
  setWalletPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WalletContext = createContext<WalletContextType>({
  wallet: false,
  setWallet: () => {},
  walletPopupOpen: false,
  setWalletPopupOpen: () => {},
});

function MyApp({ Component, pageProps }: AppProps) {
  const [wallet, setWallet] = useState(false);
  const [walletPopupOpen, setWalletPopupOpen] = useState(false);

  return (
    <ThemeProvider attribute="class">
      <WalletContext.Provider
        value={{ wallet, setWallet, walletPopupOpen, setWalletPopupOpen }}
      >
        <Component {...pageProps} />
      </WalletContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;

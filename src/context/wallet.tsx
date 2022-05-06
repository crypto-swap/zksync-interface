import { useState, createContext } from "react"

interface WalletContextType {
    walletConnected: boolean;
    setWalletConnected: React.Dispatch<React.SetStateAction<boolean>>;
    walletPopupOpen: boolean;
    setWalletPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WalletContext = createContext<WalletContextType>({
    walletConnected: false,
    setWalletConnected: () => { },
    walletPopupOpen: false,
    setWalletPopupOpen: () => { },
});

// connectWallet 
// currentAccount (entails network)

interface WalletContextProviderProps {
    children: React.ReactNode;
}

export function WalletProvider({ children }: WalletContextProviderProps) {
    const [walletConnected, setWalletConnected] = useState(false);
    const [walletPopupOpen, setWalletPopupOpen] = useState(false);

    return (
        <WalletContext.Provider value={{ walletConnected, setWalletConnected, walletPopupOpen, setWalletPopupOpen }}>
            {children}
        </WalletContext.Provider>
    )
}

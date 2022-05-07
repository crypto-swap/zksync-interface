import { useState, createContext } from "react";

interface WalletPopupContextType {
    walletPopupOpen: boolean;
    setWalletPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WalletPopupContext = createContext<WalletPopupContextType>({
    walletPopupOpen: false,
    setWalletPopupOpen: () => { },
});

interface WalletPopupProviderProps {
    children: React.ReactNode;
}

export function WalletPopupProvider({ children }: WalletPopupProviderProps) {
    const [walletPopupOpen, setWalletPopupOpen] = useState(false);

    return (
        <WalletPopupContext.Provider value={{ walletPopupOpen, setWalletPopupOpen }}>
            {children}
        </WalletPopupContext.Provider>
    )
}

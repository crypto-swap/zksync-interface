import { useState, createContext } from "react";

interface WalletPopupContextType {
  walletPopupOpen: boolean;
  setWalletPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NetworksPopupContextType {
  networksPopupOpen: boolean;
  setNetworksPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type PopupContextType = WalletPopupContextType & NetworksPopupContextType;

export const PopupContext = createContext<PopupContextType>({ walletPopupOpen: false, setWalletPopupOpen: () => { }, networksPopupOpen: false, setNetworksPopupOpen: () => { } });

interface PopupProviderProps {
  children: React.ReactNode;
}

export function PopupProvider({ children }: PopupProviderProps) {
  const [walletPopupOpen, setWalletPopupOpen] = useState(false);
  const [networksPopupOpen, setNetworksPopupOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ walletPopupOpen, setWalletPopupOpen, networksPopupOpen, setNetworksPopupOpen }}>
      {children}
    </PopupContext.Provider>
  )
}

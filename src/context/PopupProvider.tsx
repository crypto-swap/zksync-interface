import { useState, createContext } from "react";

interface WalletPopupContextType {
  walletPopupOpen: boolean;
  setWalletPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NetworksPopupContextType {
  networksPopupOpen: boolean;
  setNetworksPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface SlippagePopupContextType {
  slippagePopupOpen: boolean;
  setSlippagePopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type PopupContextType = WalletPopupContextType & NetworksPopupContextType & SlippagePopupContextType;

export const PopupContext = createContext<PopupContextType>({ walletPopupOpen: false, setWalletPopupOpen: () => { }, 
                                                              networksPopupOpen: false, setNetworksPopupOpen: () => { }, 
                                                              slippagePopupOpen: false, setSlippagePopupOpen: () => { } });

interface PopupProviderProps {
  children: React.ReactNode;
}

export function PopupProvider({ children }: PopupProviderProps) {
  const [walletPopupOpen, setWalletPopupOpen] = useState(false);
  const [networksPopupOpen, setNetworksPopupOpen] = useState(false);
  const [slippagePopupOpen, setSlippagePopupOpen] = useState(false);
  return (
    <PopupContext.Provider value={{ walletPopupOpen, setWalletPopupOpen, 
                                    networksPopupOpen, setNetworksPopupOpen,
                                    slippagePopupOpen, setSlippagePopupOpen }}>
      {children}
    </PopupContext.Provider>
  )
}

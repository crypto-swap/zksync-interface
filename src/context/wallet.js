import {useState, useEffect, useContext, createContext} from "react"

const InitialWallet = null;

export const WalletContext = createContext(InitialWallet);

// connectWallet 
// currentAccount (entails network)

export function WalletProvider({ children }) {
    const [walletConnected, setWalletConnected] = useState(false);

    function connectToWallet() {
        setWalletConnected(true);
    }

    return (
        <WalletContext.Provider value={{walletConnected, connectToWallet}}>
            {children}
        </WalletContext.Provider>
    )

}

import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { WalletContext } from '../../context/wallet';
import Popup from './Popup';

function isMetaMaskInstalled() {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
}

interface WalletPopupProps {
  setNetwork: React.Dispatch<React.SetStateAction<number | null>>;
}

const INSTALL_TEXT = 'Install MetaMask';
const CONNECT_TEXT = 'MetaMask';
const CONNECTING_TEXT = 'MetaMask (Connecting...)';
const CONNECTED_TEXT = 'MetaMask Connected';

const WalletPopup = ({ setNetwork }: WalletPopupProps) => {
  const {
    walletConnected,
    setWalletConnected,
    walletPopupOpen: open,
    setWalletPopupOpen: setOpen,
  } = useContext(WalletContext);

  const [buttonText, setButtonText] = useState(INSTALL_TEXT);
  const [accounts, setAccounts] = useState<any>([]);

  useEffect(() => {
    if (isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setWalletConnected(true);
        setNetwork(0);
        closeModal();
        setButtonText(CONNECTED_TEXT);
      } else {
        setWalletConnected(false);
        setButtonText(CONNECT_TEXT);
      }
    } else {
      setButtonText(INSTALL_TEXT)
    }
  }, [accounts]);

  function handleNewAccounts(newAccounts: any) {
    setAccounts(newAccounts);
  }

  useEffect(() => {
    if (isMetaMaskInstalled()) {
      window.ethereum.on('accountsChanged', handleNewAccounts);
      return () => {
        window.ethereum.removeListener('accountsChanged', handleNewAccounts);
      };
    }
  }, []);

  function closeModal() {
    setOpen(false);
  }

  return (
    <Popup title="Add Wallet" {...{ open, closeModal }}>
      <div className="mt-2.5">
        <button
          disabled={walletConnected}
          onClick={() => {
            if (isMetaMaskInstalled()) {
              setButtonText(CONNECTING_TEXT);
              window.ethereum
                .request({ method: 'eth_requestAccounts' })
                .then(handleNewAccounts);
            } else {
              window.open("https://metamask.io", '_blank');
            }
          }}

          className={`mt-5 flex w-full items-center gap-3 rounded-lg bg-slate-500 bg-opacity-0 p-3 text-lg font-bold shadow-card ${walletConnected ? '' : "hover:shadow-button-hover dark:hover:shadow-button-hover-dark"} dark:border-bg-light dark:shadow-card-dark `}
        >
          <Image src={'/icons/metamask.svg'} width={30} height={30} />
          {buttonText}
        </button>
      </div>
    </Popup >
  );
};

export default WalletPopup;

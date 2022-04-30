import { useContext } from 'react';
import Image from 'next/image';
import { WalletContext } from '../../pages/_app';
import Popup from './Popup';

interface WalletPopupProps {
  setNetwork: React.Dispatch<React.SetStateAction<number | null>>;
}

const WalletPopup = ({ setNetwork }: WalletPopupProps) => {
  const {
    setWallet,
    walletPopupOpen: open,
    setWalletPopupOpen: setOpen,
  } = useContext(WalletContext);

  function closeModal() {
    setOpen(false);
  }

  return (
    <Popup title="Add Wallet" {...{ open, closeModal }}>
      <div className="mt-2.5">
        {['MetaMask'].map((name) => (
          <button
            onClick={() => {
              setWallet(true);
              setNetwork(0);
              closeModal();
            }}
            className="mt-5 flex w-full gap-3 rounded-lg bg-slate-500 bg-opacity-0 p-3 text-lg font-bold shadow-card hover:shadow-button-hover dark:border-bg-light dark:shadow-card-dark dark:hover:shadow-button-hover-dark"
          >
            <Image src={'/icons/metamask.svg'} width={30} height={30} />
            {name}
          </button>
        ))}
      </div>
    </Popup>
  );
};

export default WalletPopup;

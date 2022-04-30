import { useContext } from 'react';
import Image from 'next/image';
import { WalletContext } from '../../pages/_app';
import Popup from './Popup';

const WalletPopup = () => {
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
        {['MetaMask', 'WalletConnect', 'Metaverse', 'Metawax'].map((name) => (
          <button
            onClick={() => {
              setWallet(true);
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

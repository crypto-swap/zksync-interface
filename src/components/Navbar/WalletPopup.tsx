import { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { WalletPopupContext } from '../../context/WalletPopupProvider';
import { hooks, metaMask } from '../../connectors/metaMask';
import Popup from './Popup';

const { useIsActive, useError } = hooks;

interface WalletPopupProps {
  setNetwork: React.Dispatch<React.SetStateAction<number | null>>;
}

const CONNECT_TEXT = 'MetaMask';
const CONNECTING_TEXT = 'MetaMask (Connecting...)';
const CONNECTED_TEXT = 'MetaMask Connected';

const WalletPopup = ({ setNetwork }: WalletPopupProps) => {
  const {
    walletPopupOpen: open,
    setWalletPopupOpen: setOpen,
  } = useContext(WalletPopupContext);

  function closeModal() {
    setOpen(false);
  }

  const active = useIsActive();
  const [activating, setActivating] = useState(false);
  const error = useError();

  useEffect(() => {
    setActivating(false);
    if (active) {
      setNetwork(0);
      closeModal();
    }
  }, [active, error]);

  useEffect(() => {
    metaMask.connectEagerly()
  }, [])


  const disabled = active || activating;

  return (
    <Popup title="Add Wallet" {...{ open, closeModal }}>
      <div className="mt-2.5">
        <button
          {...{ disabled }}
          onClick={
            activating ? undefined : () => {
              setActivating(true);
              metaMask.activate();
            }
          }
          className={`mt-5 flex w-full items-center gap-3 rounded-lg bg-slate-500 bg-opacity-0 p-3 text-lg font-bold shadow-card ${disabled ? '' : "hover:shadow-button-hover dark:hover:shadow-button-hover-dark"} dark:border-bg-light dark:shadow-card-dark `}
        >
          <Image src={'/icons/metamask.svg'} width={30} height={30} />
          {active ?
            CONNECTED_TEXT
            : (activating ?
              CONNECTING_TEXT
              : CONNECT_TEXT)}
        </button>
      </div>
    </Popup >
  );
};

export default WalletPopup;

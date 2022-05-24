import React from 'react';
import Popup from '../Navbar/Popup';
import { connect } from '../Navbar/WalletPopup';
import { ChevronRightIcon } from '@heroicons/react/solid';

interface AlertPopupProps {
  alertPopupOpen: boolean;
  setAlertPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertPopup = ({
  alertPopupOpen: open,
  setAlertPopupOpen: setOpen,
}: AlertPopupProps) => {

  function closeModal() {
    setOpen(false);
  }

  return (
    <Popup title="Unsupported Network" {...{ open, closeModal }}>
      <p className="text-sm mt-4">
        Wrong Network, please switch to zkSync Alpha Testnet.
      </p>
      <button
        onClick={connect}
        className="mt-4 w-full place-content-center flex rounded-lg p-3 text-lg shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:border-bg-light dark:shadow-card-dark">
        Switch Network
        <ChevronRightIcon className='inline w-[30px] h-[30px]' />
      </button>
    </Popup>
  );
};

export default AlertPopup;

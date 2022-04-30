import { useContext } from 'react';
import { WalletContext } from '../../pages/_app';

const SwapButton = () => {
  const { wallet, setWalletPopupOpen } = useContext(WalletContext);

  function openWalletPopup() {
    setWalletPopupOpen(true);
  }

  return (
    <button
      type="button"
      onClick={openWalletPopup}
      className="mt-8 w-full rounded-md bg-button-blue py-1.5 text-lg font-semibold text-text-dark shadow-button hover:bg-font-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:shadow-button-dark"
    >
      {wallet ? 'Swap' : 'Add Wallet'}
    </button>
  );
};

export default SwapButton;

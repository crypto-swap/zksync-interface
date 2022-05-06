import { useContext } from 'react';
import { WalletContext } from '../../context/wallet';

const SwapButton = () => {
  const { walletConnected, setWalletPopupOpen } = useContext(WalletContext);

  function swap() {

  }

  function openWalletPopup() {
    setWalletPopupOpen(true);
  }

  return (
    <button
      type="button"
      onClick={walletConnected ? swap : openWalletPopup}
      className="mt-8 w-full rounded-md bg-button-blue py-1.5 text-lg font-semibold text-text-dark shadow-button hover:bg-font-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:shadow-button-dark"
    >
      {walletConnected ? 'Swap' : 'Add Wallet'}
    </button>
  );
};

export default SwapButton;

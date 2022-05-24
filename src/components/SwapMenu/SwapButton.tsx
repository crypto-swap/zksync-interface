import { useContext } from 'react';
import { PopupContext } from '../../context/PopupProvider';
import { hooks } from '../../connectors/metaMask';
import { connect } from '../Navbar/WalletPopup';

const { useChainId, useIsActive } = hooks;

const SwapButton = () => {
  const chainIsCorrect = useChainId() == 280;
  const walletConnected = useIsActive();
  const { setWalletPopupOpen } = useContext(PopupContext);

  function swap() {

  }

  function openWalletPopup() {
    setWalletPopupOpen(true);
  }

  const handleClick = walletConnected ? (chainIsCorrect ? swap : connect) : openWalletPopup;
  const text = walletConnected ? (chainIsCorrect ? 'Swap' : 'Switch Network') : "Add Wallet";

  return (
    <button
      type="button"
      onClick={handleClick}
      className="mt-8 w-full rounded-md bg-button-blue py-1.5 text-lg font-semibold text-text-dark shadow-button hover:bg-font-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:shadow-button-dark"
    >
      {text}
    </button>
  );
};

export default SwapButton;

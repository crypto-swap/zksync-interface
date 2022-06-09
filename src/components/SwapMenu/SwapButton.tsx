import { useContext } from 'react';
import { PopupContext } from '../../contexts/PopupProvider';
import { hooks } from '../../connectors/metaMask';
import { connect } from '../Popups/WalletPopup';

const { useChainId, useIsActive } = hooks;

const SwapButton = () => {
  const chainIsCorrect = useChainId() === 280;
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
      className="mt-8 w-full rounded-xl bg-button-blue py-1.5 text-lg h-[55px] font-semibold text-text-dark shadow-blue-button hover:shadow-blue-button-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
    >
      {text}
    </button>
  );
};

export default SwapButton;

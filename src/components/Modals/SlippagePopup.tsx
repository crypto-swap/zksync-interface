import React, { useState, useContext} from 'react';
import { PopupContext } from '../../context/PopupProvider';
import Popup from './Popup';

const SlippageModal = () => {

    const {
        slippagePopupOpen: open,
        setSlippagePopupOpen: setOpen,
    } = useContext(PopupContext);

  
    function closeModal() {
      setOpen(false);
    }

    return (
        <Popup title="Slippage" {...{ open, closeModal }}> 
            Slippage Test
        </Popup>
    )
}

export default SlippageModal

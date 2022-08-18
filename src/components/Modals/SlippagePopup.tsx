import React, {useState} from 'react';
import Popup from './Popup';

const SlippageModal = () => {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState('');
  
    function closeModal() {
      setOpen(false);
    }
  
    function openModal() {
      setQuery('');
      setOpen(true);
    }

    return (
        <Popup title="Slippage" {...{ open, closeModal }}> 
            Slippage Test
        </Popup>
    )
}

export default SlippageModal

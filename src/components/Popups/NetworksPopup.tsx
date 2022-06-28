import React, { useContext } from 'react';
import { PopupContext } from '../../context/PopupProvider';
import Image from 'next/image';
import Popup from './Popup';
import { connect } from './WalletPopup';

interface Network {
  name: string;
  subdomain: string;
  image: string;
  status: boolean;
}

export const networks: Network[] = [
  {
    name: 'zkSync Testnet',
    subdomain: 'zksync',
    image: 'https://cryptoswap.org/network_icons/zksync_logo.svg',
    status: true,
  },
  {
    name: 'StarkNet Testnet',
    subdomain: 'starknet',
    image: 'https://cryptoswap.org/network_icons/starknet_logo.png',
    status: false,
  },
  {
    name: 'Atomic Swaps',
    subdomain: 'atomic',
    image: 'https://cryptoswap.org/network_icons/atomic_swaps.jpg',
    status: false,
  },
];

const NetworksPopup = () => {
  const {
    networksPopupOpen: open,
    setNetworksPopupOpen: setOpen,
  } = useContext(PopupContext);

  function closeModal() {
    setOpen(false);
  }

  function changeSubdomain(subdomain) {
    // reroute to '${subdomain}.cryptoswap.org' 
  }

  return (
    <Popup title="Networks" {...{ open, closeModal }}>
      <div className="mt-2.5">
        {networks.map(({ image, name, status }) => (
          <button
            disabled={!status}
            key={image}
            onClick={() => {
              connect();
              closeModal();
            }}
            className={"mt-5 flex w-full items-center gap-3 rounded-lg bg-slate-500 bg-opacity-0 p-3 text-lg font-bold shadow-card dark:border-bg-light dark:shadow-card-dark" + (status ? ' hover:shadow-button-hover dark:hover:shadow-button-hover-dark' : '')}
          >
            <Image src={image} width={30} height={30} />
            {name}
            <div
              className={`ml-auto mr-2 h-[9px] w-[9px] rounded-full shadow-inner ${status ? 'bg-green-500' : 'bg-red-500'
                } shadow-neutral-900/25`}
            ></div>
          </button>
        ))}
      </div>
    </Popup>
  );
};

export default NetworksPopup;

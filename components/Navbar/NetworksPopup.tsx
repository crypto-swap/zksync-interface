import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Popup from '../Navbar/Popup';

interface Network {
  name: string;
  image: string;
  status: boolean;
}

const networks: Network[] = [
  {
    name: 'zkSync Testnet',
    image: '/network_icons/zksync_logo.svg',
    status: true,
  },
  {
    name: 'StarkNet Testnet',
    image: '/network_icons/starknet_logo.png',
    status: false,
  },
  {
    name: 'Ethereum Testnet',
    image: '/network_icons/eth_logo.png',
    status: false,
  },
];

interface NetworksPopupProps {
  networksPopupOpen: boolean;
  setNetworksPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NetworksPopup = ({
  networksPopupOpen: open,
  setNetworksPopupOpen: setOpen,
}: NetworksPopupProps) => {
  function closeModal() {
    setOpen(false);
  }

  return (
    <Popup title="Networks" {...{ open, closeModal }}>
      <div className="mt-2.5">
        {networks.map(({ image, name, status }) => (
          <div className="mt-5 flex w-full items-center gap-3 rounded-lg bg-slate-500 bg-opacity-0 p-3 text-lg font-bold shadow-card dark:border-bg-light dark:shadow-card-dark">
            <Image src={image} width={30} height={30} />
            {name}
            <div
              className={`ml-auto mr-2 h-[9px] w-[9px] rounded-full shadow-[0_0_2px] ${
                status
                  ? 'bg-green-500 shadow-green-500'
                  : 'bg-red-500 shadow-red-500'
              }`}
            ></div>
          </div>
        ))}
      </div>
    </Popup>
  );
};

export default NetworksPopup;

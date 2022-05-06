import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import WalletPopup from '../Navbar/WalletPopup';
import NetworksPopup from '../Navbar/NetworksPopup';
import { WalletContext } from '../../context/wallet';
import { networks } from '../Navbar/NetworksPopup';

const Navbar = () => {
  // defaults to dark mode
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (theme === 'system') {
      setTheme('dark');
    }
    console.log(theme);
  }, []);

  const { walletConnected, setWalletPopupOpen } = useContext(WalletContext);

  function openWalletPopup() {
    setWalletPopupOpen(true);
  }

  const [network, setNetwork] = useState<number | null>(null);
  const [networksPopupOpen, setNetworksPopupOpen] = useState(false);

  function openNetworksPopup() {
    setNetworksPopupOpen(true);
  }

  return (
    <div className="navbar">
      <div className="navbar-col-1">
        <a id="home-nav-link" href="/">
          <span className="navbar-logo">
            <Image src={'/icons/white_logo.svg'} width={40} height={40} />
          </span>
        </a>
      </div>

      <div className="navbar-col-2">
        <a href="/swap" className="navbar-link-item">
          Swap
        </a>
        <a href="/pool" className="navbar-link-item">
          Pool
        </a>
        <a href="/team" className="navbar-link-item">
          Team
        </a>
        <a
          href={'/whitepaper.pdf'}
          className="navbar-link-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Whitepaper
        </a>
      </div>

      <div className="navbar-col-3">
        <div className="navbar-col-3-items">
          <div className="network" title="">
            <button
              id="select-network"
              className="network-button"
              onClick={openNetworksPopup}
            >
              <Image
                src={
                  network != null
                    ? networks[network].image
                    : '/assets/networks.svg'
                }
                width={20}
                height={20}
              />
              <span>&nbsp;</span>
              {network != null
                ? networks[network].name.split(' ')[0]
                : 'Networks'}
              <span className="hide-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            <NetworksPopup
              {...{ setNetwork, networksPopupOpen, setNetworksPopupOpen }}
            />
          </div>

          <div className="wallet">
            <button
              id="connect-wallet"
              onClick={openWalletPopup}
              className="wallet-button-1 wallet-button-2"
            >
              <p className="wallet-button-text hide-small">
                {walletConnected ? 'Wallet Connected' : 'Connect to a wallet'}
              </p>
              <p className="wallet-button-text show-small">
                {walletConnected ? 'Wallet Connected' : 'Connect wallet'}
              </p>
            </button>
            <WalletPopup {...{ setNetwork }} />
          </div>

          <button
            className="circle-outline"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:fill-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6 hover:fill-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

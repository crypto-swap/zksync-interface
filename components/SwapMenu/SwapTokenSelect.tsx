import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Popup from '../Navbar/Popup';

export type Token = string;

export const tokens: Token[] = [
  'eth',
  'wbtc',
  'dai',
  'usdc',
  'usdt',
  'bat',
  'zrx',
  'link',
  'mkr',
  'rep',
  'knc',
  'gnt',
  'snt',
  'bnt',
  'dnt',
  'eng',
  'salt',
  'fun',
  'mana',
];

interface SwapTokenSelectProps {
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
}

const SwapTokenSelect = ({ token, setToken }: SwapTokenSelectProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  function closeModal() {
    setOpen(false);
  }

  function openModal() {
    setQuery('');
    setOpen(true);
  }

  const filteredTokens =
    query === ''
      ? tokens
      : tokens.filter((token) =>
          token
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="relative my-auto inline-flex items-center gap-1.5 rounded-full border border-button-blue bg-neutral-400 bg-opacity-0 px-1.5 text-xs font-semibold uppercase leading-6 text-button-blue hover:bg-opacity-10"
      >
        <Image src={'/icons/blue_logo.svg'} width={16} height={16} />
        {token}
        <ChevronDownIcon className="inline h-4 w-4" />
      </button>

      <Popup title="Select Token" {...{ open, closeModal }}>
        <input
          className="font-lg font-lg mt-3.5 w-full rounded-lg bg-inherit px-4 py-3 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]"
          placeholder="Search name"
          ref={inputRef}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && tokens.includes(query)) {
              setToken(query);
              closeModal();
            }
          }}
        />
        <div className="mt-4 h-[325px] overflow-hidden rounded-lg shadow-card dark:shadow-card-dark">
          <ol className="h-full snap-y overflow-y-scroll">
            {filteredTokens.map((token) => (
              <li
                className="flex cursor-pointer snap-start items-center p-2.5 hover:bg-bg-blue dark:hover:bg-menu-blue"
                onClick={() => {
                  setToken(token);
                  closeModal();
                }}
              >
                <Image src={'/icons/blue_logo.svg'} width={30} height={30} />
                <span className="ml-2 uppercase">{token}</span>
              </li>
            ))}
          </ol>
        </div>
      </Popup>
    </>
  );
};

export default SwapTokenSelect;

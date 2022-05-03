import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Popup from '../Navbar/Popup';
import { Token, tokens } from '../SwapMenu';

interface SwapTokenSelectProps {
  value: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  onChange: (to: Token) => void;
}

const SwapTokenSelect = ({
  value,
  setToken,
  onChange,
}: SwapTokenSelectProps) => {
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

  function handleTokenChange(token: Token) {
    setToken(token);
    closeModal();
    onChange(token);
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
        {value}
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
              handleTokenChange(query);
            }
          }}
        />
        <div className="mt-4 h-[325px] overflow-hidden rounded-lg shadow-card dark:shadow-card-dark">
          <ol className="h-full snap-y overflow-y-scroll">
            {filteredTokens.map((token) => (
              <li
                className="flex cursor-pointer snap-start items-center p-2.5 hover:bg-bg-blue dark:hover:bg-menu-blue"
                onClick={() => {
                  handleTokenChange(token);
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

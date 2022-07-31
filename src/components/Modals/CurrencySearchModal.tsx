import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Popup from './Popup';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import { useAccount } from '../../hooks';
import TOKEN_LIST from '../../config/constants/testnet.tokenlist.json';

export type Token = string;

const tokens = TOKEN_LIST.tokens

export const tokenSymbols = tokens.map(x => x.symbol)


interface CurrencySearchModalProps {
  value: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  onChange?: (to: Token) => void;
}

const CurrencySearchModal = ({
  value,
  setToken,
  onChange,
}: CurrencySearchModalProps) => {

  const account = useAccount();

    console.log(account)

    for (let i = 0; i < TOKEN_LIST.tokens.length; i++) {
        console.log(TOKEN_LIST.tokens[i].symbol)
        console.log(TOKEN_LIST.tokens[i].address)
  }

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
    onChange?.(token);
  }

  const filteredTokens =
    query === ''
      ? tokenSymbols
      : tokenSymbols.filter((token) =>
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
        className="relative my-auto inline-flex items-center gap-1.5 rounded-xl py-0.5 px-1.5 text-sm font-semibold uppercase leading-6 text-white border border-[#4b86ff] hover:bg-[#4b86ff] active:border-none bg-button-blue shadow-blue-button-small active:shadow-blue-button-hover-small"
      >
        <Image src={tokens[tokenSymbols.indexOf(value)].logoURI} width={20} height={20} />
        {value}
        <ChevronDownIcon className="inline h-4 w-4" />
      </button>

      <Popup title="Select Token" {...{ open, closeModal }}>
        <input
          className="font-lg mt-3.5 w-full rounded-lg bg-inherit px-4 py-3 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]"
          placeholder="Search name"
          ref={inputRef}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && tokenSymbols.includes(query)) {
              handleTokenChange(query);
            }
          }}
        />
        <div className="mt-4 h-[325px] overflow-hidden rounded-lg shadow-card dark:shadow-card-dark">
          <ol className="h-full snap-y overflow-y-scroll">
            {filteredTokens.map((token) => (
              <li
                key={token}
                className="flex cursor-pointer snap-start items-center p-2.5 hover:bg-bg-blue dark:hover:bg-menu-blue"
                onClick={() => {
                  handleTokenChange(token);
                }}
              >
                <Image src={tokens[tokenSymbols.indexOf(token)].logoURI} width={30} height={30} />
                <span className="pl-2">{token}</span>
                
              </li>
            ))}
          </ol>
        </div>
      </Popup>
    </>
  );
};

export default CurrencySearchModal;

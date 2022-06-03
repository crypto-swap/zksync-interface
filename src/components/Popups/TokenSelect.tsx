import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Popup from './Popup';
import { Token, tokens } from '../SwapMenu';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface TokenSelectProps {
  value: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  onChange: (to: Token) => void;
  isTokenA: boolean;
}

const TokenSelect = ({
  value,
  setToken,
  onChange,
  isTokenA,
}: TokenSelectProps) => {

  // token routing 
  const { asPath, pathname } = useRouter();
  const path_array = asPath.split("/")
  let tokenA;
  let tokenB;
  let path = `${tokenA}/${tokenB}`;

  if (path_array.length < 2) {
    path_array[2] = '';
  }

  if (path_array.length < 3) {
    path_array[2] = '';
  }

  function changeTokenA(value) {
    tokenA = value;
    tokenB = path_array.at(3);
    path = `${tokenA}/${tokenB}`;
    console.log(isTokenA);
    console.log("token a");
    console.log(path);
  }

  function changeTokenB(value) {
    tokenA = path_array.at(2);
    tokenB = value;
    path = `${tokenA}/${tokenB}`;
    console.log("token b");
    console.log(path);
  }
  // end token routing 

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
        <QuestionMarkCircleIcon className="w-[16px] h-[16px]" />
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
            if (event.key === 'Enter' && tokens.includes(query)) {
              handleTokenChange(query);
            }
          }}
        />
        <Link
          href="[[...tokens]]"
          as="/add/popup/test/works"
        >
          <a>Random Test</a>
        </Link>
        <div className="mt-4 h-[325px] overflow-hidden rounded-lg shadow-card dark:shadow-card-dark">
          <ol className="h-full snap-y overflow-y-scroll">
            {filteredTokens.map((token) => (
              <li onClick={() => { isTokenA ? changeTokenA(token) : changeTokenB(token) }}>
                <Link href="[[...tokens]]" as={path}>
                  <button
                    key={token}
                    className="flex cursor-pointer w-full snap-start items-center p-2.5 hover:bg-bg-blue dark:hover:bg-menu-blue"
                    onClick={() => {
                      console.log(path);
                      handleTokenChange(token);
                    }}
                  >
                    <QuestionMarkCircleIcon className="w-[30px] h-[30px]" />
                    <span className="ml-2 uppercase">{token}</span>
                  </button>
                </Link>
              </li>

            ))}
          </ol>
        </div>
      </Popup>
    </>
  );
};

export default TokenSelect;

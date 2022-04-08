import React, { Fragment, useState, useRef } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

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
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setQuery('');
    setIsOpen(true);
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
        <Image src={'/logo.png'} width={16} height={16} />
        {token}
        <ChevronDownIcon className="inline h-4 w-4" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          initialFocus={inputRef}
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-neutral-600/40 backdrop-blur-md" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-bg-card-light p-6 text-left align-middle shadow-xl transition-all dark:bg-bg-card-dark">
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-light dark:text-dark text-lg font-medium leading-6"
                  >
                    Select Token
                  </Dialog.Title>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-2 py-1 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </div>
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
                        <Image src={'/logo.png'} width={30} height={30} />
                        <span className="ml-2 uppercase">{token}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SwapTokenSelect;

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { Wallet } from '../SwapMenu/SwapInput'

interface WalletsDropdownProps {
  wallets: Wallet[]
}

export default function WalletsDropdownProps({
  wallets,
}: WalletsDropdownProps) {
  const [selected, setSelected] = useState<Wallet>()

  return (
    <div className="flex w-36 items-center justify-center sm:w-44">
      <Listbox value={selected} onChange={setSelected}>
        <div className="w-full">
          <Listbox.Button className="relative flex w-full cursor-default  items-center justify-center  rounded-lg bg-[#7408F8] py-2.5 text-left text-xs text-button-blue shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-500 sm:pl-3 sm:pr-10">
            <span className="flex w-full items-center justify-center text-center">
              {selected ? selected.name : 'Connected Wallets'}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 hidden  items-center sm:flex sm:pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-xs shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
              {wallets.map((wallet, walletIdx) => (
                <Listbox.Option
                  key={walletIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-blue-100 text-white' : 'text-gray-900'
                    }`
                  }
                  value={wallet}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {wallet.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-button-blue">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

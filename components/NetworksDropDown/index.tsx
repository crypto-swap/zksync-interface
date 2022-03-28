import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import Image from 'next/image'

interface Network {
  name: string
}

interface NetworksDropdownProps {
  networks: Network[]
}

export default function NetworksDropdown({
  networks,
}: NetworksDropdownProps): JSX.Element {
  const [selected, setSelected] = useState<Network>()

  return (
    <div className="flex w-36 items-center justify-center sm:w-44">
      <Listbox value={selected} onChange={setSelected}>
        <div className="w-full rounded-xl border border-button-blue text-[#4E84D0]">
          <Listbox.Button className="relative flex w-full cursor-default items-center justify-center  rounded-xl bg-[#091B32] py-2.5 text-xs shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:pl-3 sm:pr-10 sm:text-left">
            <span className="flex w-full items-center justify-center text-center">
              <Image src="/networks-logo.svg" height={15} width={15} />
              {selected ? selected.name : 'Networks'}
            </span>

            <span className="pointer-events-none absolute inset-y-0 right-0 hidden items-center sm:flex sm:pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-button-blue"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {networks.map((network, networkIdx) => (
                <Listbox.Option
                  key={networkIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={network}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {network.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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

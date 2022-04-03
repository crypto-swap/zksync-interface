import React from 'react'
import WalletsDropdownProps from '../SwapWalletDropdown'
import SwapTokenSelect from './SwapTokenSelect'
import { Token } from './SwapTokenSelect'

export interface Wallet {
  name: string
}

var sampleUserWallets: Wallet[] = [{ name: 'Wallet A' }, { name: 'Wallet B' }]

interface SwapInputProps {
  title: string
  value: string
  token: Token
  setToken: React.Dispatch<React.SetStateAction<Token>>
}

const SwapInput = ({
  title,
  value,
  token,
  setToken,
}: SwapInputProps): JSX.Element => {
  const [amount, setAmount] = React.useState(value)

  return (
    <div className="h-full p-2">
      <div className="flex">
        <div className="w-16 p-1 text-sm font-semibold">{title}:</div>
        <WalletsDropdownProps wallets={sampleUserWallets} />
      </div>

      <div className="relative flex flex-row-reverse place-content-between rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">
        <input
          value={amount}
          onChange={(event) => {
            if (/^\d*\.?\d*$/.test(event.target.value)) {
              setAmount(event.target.value)
            }
          }}
          className="absolute inset-0 inline-block h-full w-full rounded-lg bg-transparent p-4"
        />
        <SwapTokenSelect {...{ token, setToken }} />
      </div>
      <div className="p-1 text-xs font-light">Balance:</div>
    </div>
  )
}

export default SwapInput

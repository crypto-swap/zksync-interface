import React from 'react';
import WalletsDropdownProps from '../SwapWalletDropdown';
import SwapTokenSelect from './SwapTokenSelect';
import { Token } from './SwapTokenSelect';

export interface Wallet {
  name: string;
}

var sampleUserWallets: Wallet[] = [{ name: 'Wallet A' }, { name: 'Wallet B' }];

interface SwapInputProps {
  title: string;
  value: string;
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
}

const SwapInput = ({
  title,
  value,
  token,
  setToken,
}: SwapInputProps): JSX.Element => {
  const [amount, setAmount] = React.useState(value);

  return (
    <>
      <div className="mb-2 flex place-content-between items-center px-0.5">
        <div className="text-sm font-bold">{title}</div>
        <div className="text-xs">Balance: 0.0</div>
      </div>
      <div className="relative flex flex-row-reverse place-content-between rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">
        <input
          placeholder='0.0'
          onChange={(event) => {
            if (/^\d*\.?\d*$/.test(event.target.value)) {
              setAmount(event.target.value);
            }
          }}
          className="absolute inset-0 inline-block h-full w-full rounded-lg bg-transparent p-4"

        />
        <SwapTokenSelect {...{ token, setToken }} />
      </div>
    </>
  );
};

export default SwapInput;

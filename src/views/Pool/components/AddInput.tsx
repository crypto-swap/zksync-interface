import CurrencySearchModal, { Token } from '../../../components/Modals/CurrencySearchModal';
import Link from 'next/link'
import { useCurrencyBalance, useProvider, useAccount } from '../../../hooks';
import { useState, useEffect } from 'react';
import '../../../functions/number.extensions'

export interface Wallet {
  name: string;
}

interface PoolInputProps {
  tokenB?: boolean;
  value: string;
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  setTokenA_Amount: React.Dispatch<React.SetStateAction<string>>;
  setTokenB_Amount: React.Dispatch<React.SetStateAction<string>>;
  onChange: (
    reverse: boolean,
    amount?: number,
    token_a?: Token,
    token_b?: Token,
  ) => number;
  balance: number;
  opened: boolean;
  otherToken: Token; 
}

const style = {
  addInputContainer: `mb-2 flex place-content-between items-center px-0.5`,
}

const PoolInput = ({ 
  tokenB = false, 
  value,
  onChange,  
  token, 
  setToken, 
  setTokenA_Amount, 
  setTokenB_Amount, 
  balance, 
  opened,
  otherToken,
}: PoolInputProps) : JSX.Element => {

  const account = useAccount();

  const provider = useProvider();

  return (
    <>
      <div className={style.addInputContainer}>
        <div className="text-sm font-bold text-gray-500 dark:text-gray-400 ">Input</div>
        {opened ?  <div className="text-xs">Balance: {`${Number(balance).toFixedDown(7)}`}</div> : <></>}
      </div>
      <div className="relative flex flex-row-reverse place-content-between text-lg h-[60px] rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">
        <input
          inputMode="decimal"
          placeholder="0.0"
          className="absolute inset-0 h-full w-full rounded-lg outline-0 bg-transparent p-4"
          value={value}
          onChange={(event) => {
            if (/^\d*\.?\d*$/.test(event.target.value)) {
              if (event.target.value == '') {
                setTokenA_Amount('');
                setTokenB_Amount('');
              } else {
                const amount = parseFloat(event.target.value);
                if (Number.isFinite(amount)) {
                  (tokenB ? setTokenB_Amount : setTokenA_Amount)(event.target.value.substring(0, 32));
                  (tokenB ? setTokenA_Amount : setTokenB_Amount)(onChange(tokenB, amount).toString())
                }
              }
            }
          }
          }
        />
        <div className="flex flex-row gap-x-4 items-center">
          

          <button className="relative cursor-pointer text-sm px-1.5 shadow-card-sm dark:shadow-card-dark-sm rounded-full active:shadow-button-hover dark:active:shadow-button-hover-dark ">
            Max
          </button>

          <CurrencySearchModal
            {...{ value: token, setToken, tokenA: token, tokenB: otherToken }}
            onChange={(token) => {
              let output;
              if (tokenB) {
                output = onChange(false, undefined, undefined, token);
              } else {
                output = onChange(false, undefined, token);
              }
              if (Number.isFinite(output)) {
                setTokenB_Amount(output.toString());
              }
            }}
          />
      </div>
      </div>
    </>
  )
}

export default PoolInput

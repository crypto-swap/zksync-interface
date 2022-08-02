import PoolInput from './AddInput';
import AddPoolButton from './AddLiquidityButton';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';
import { Token } from '../../../components/Modals/CurrencySearchModal'
import { useAllTokens, useCurrencyBalance, useProvider, useAccount } from '../../../hooks';
import TOKEN_LIST from '../../../config/constants/testnet.tokenlist.json';

const tokens = TOKEN_LIST.tokens; 

const tokenSymbols = useAllTokens;

const emptyPoolInformation = new Map([
  ['Rate', 0],
  ['Token B Amount', 0],
  ['Share of pool', 0],
]);

function getRate(token: Token) {
  switch (token) {
    case 'eth':
      return 1;
    case 'bat':
      return 5;
    default:
      return 10;
  }
}

function convert(
  amount: number,
  token_a: Token,
  token_b: Token,
  reverse: boolean = false
) {
  let rate = getRate(token_b) / getRate(token_a);
  if (reverse) {
    rate = 1 / rate;
  }
  const output = amount * rate;
  let tokenB = output;
  if (reverse) {
    [tokenB, amount] = [amount, output];
  }

  // TODO: create a function to get pool share

  return new Map([
    ['Rate', rate],
    ['Token B Amount', amount],
    ['Share of pool', amount * 2]
  ]);
}

const AddInterface = () => {
    
    const account = useAccount();

    const provider = useProvider();

    const router = useRouter()

    const [tokenA, setTokenA_] = useState(tokenSymbols[0]);
    const [tokenB, setTokenB_] = useState(tokenSymbols[1]);

    const [balanceA, setBalanceA_] = useState(0);
    const [balanceB, setBalanceB_] = useState(0);
  
    const [modalOpened, setModalOpened] = useState(false);
      
    const [tokenA_Amount, setTokenA_Amount] = useState('');
    const [tokenB_Amount, setTokenB_Amount] = useState('');
    const [poolInformation, setPoolInformation] = useState<Map<string, number>>(emptyPoolInformation)

    useEffect( () => {
      useCurrencyBalance(account, '0x000000000000000000000000000000000000800a', provider).then( (result) => { setBalanceA_(result)} )
      useCurrencyBalance(account, '0x54a14d7559baf2c8e8fa504e019d32479739018c', provider).then( (result) => { setBalanceB_(result)} )
    }, [])

    function setTokenA(value: React.SetStateAction<Token>) {
      setTokenA_(value);
      router.push(`${(value as string).toUpperCase()}/${tokenB.toUpperCase()}`);
    }
    function setTokenB(value: React.SetStateAction<Token>) {
      setTokenB_(value);
      router.push(`${tokenA.toUpperCase()}/${(value as string).toUpperCase()}`);
    }

    useEffect(() => {
      if (router.query.tokens) {
        setTokenA_(router.query.tokens[0])
        setTokenB_(router.query.tokens[1])
      }
    }, [router.isReady])

  
    function handleChange(reverse: boolean, amount: number = parseFloat(tokenA_Amount), token_a: Token = tokenA, token_b: Token = tokenB) {
      const poolInformation = convert(amount, token_a, token_b, reverse);
      setPoolInformation(poolInformation);

        
      useCurrencyBalance(account, tokens[tokenSymbols.indexOf(token_a)].address, provider).then( (result) => { setBalanceA_(result)} );
      useCurrencyBalance(account, tokens[tokenSymbols.indexOf(token_b)].address, provider).then( (result) => { setBalanceB_(result)} );

      setModalOpened(true);

      return poolInformation.get('Token B Amount')! //non-null (!)

    }

    return (
        <>
            <div className="grid auto-rows-auto gap-y-[20px] ">
              <div id="add-liquidity-input-token-a" className="">
                <PoolInput {...{
                  value: tokenA_Amount,
                  token: tokenA,
                  setToken: setTokenA,
                  setTokenA_Amount: setTokenA_Amount,
                  setTokenB_Amount: setTokenB_Amount,
                  balance: balanceA,
                  opened: modalOpened,
                }}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col justify-start items-center w-full mb-[-1rem]"><PlusIcon className="w-5 h-5" /></div>
              <div id="add-liquidity-input-token-b" className="">
                <PoolInput
                  tokenB
                  {...{
                    value: tokenB_Amount,
                    token: tokenB,
                    setToken: setTokenB,
                    setTokenA_Amount: setTokenA_Amount,
                    setTokenB_Amount: setTokenB_Amount,
                    balance: balanceB,
                    opened: modalOpened,
                  }}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-12 pb-3">
              <AddPoolButton />
            </div>
        </>
    )
}

export default AddInterface 

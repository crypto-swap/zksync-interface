import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useActiveWeb3React } from '../hooks';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, AdjustmentsIcon, PlusIcon } from '@heroicons/react/solid';
import PoolInput from '../components/Add/PoolInput';
import AddPoolButton from '../components/Add/AddPoolButton';


const style = {
  wrapper: `flex flex-col w-full max-w-5xl mr-auto ml-auto items-center flex-1 basis-0 overflow-hidden overflow-auto justify-center p-2`,
  returnBar: `flex justify-between items-center p-2 w-full bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark rounded-2xl mx-2 mt-6 mb-4`,
  poolContainer: `auto-rows-auto max-w-5xl w-full flex flex-col md:flex-row justify-start md:justify-between`,
  poolInfo: `flex flex-1 flex-row md:mr-4 justify-start rounded-2xl bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark`,
  addPoolMenu: `w-full md:w-96 mt-4 md:mt-0 rounded-2xl shrink-0 p-[20px] bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark`,

}

export type Token = string;

export const tokens: Token[] = [
  'eth',
  'bat',
  'wbtc',
  'dai',
  'usdc',
  'usdt',
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

const AddLiquidity = () => {

  const router = useRouter()

  const [currencyIdA, currencyIdB] = router.query.currency || []
  const { account, chainId } = useActiveWeb3React()

  const [tokenA, setTokenA_] = useState(tokens[0]);
  const [tokenB, setTokenB_] = useState(tokens[1]);


  useEffect(() => {
    if (!currencyIdA && !currencyIdB) {
      setTokenA_(tokens[0]);
      setTokenB_(tokens[1])
    }
  }, [currencyIdA, currencyIdB])

  const handleCurrencyASelect = useCallback(
    (currencyA_: Token) => {
      const newCurrencyIdA = currencyA_
      if (newCurrencyIdA === currencyIdB) {
        router.replace(`/add/${currencyIdB}/${currencyIdA}`, undefined, { shallow: true })
      } else if (currencyIdB) {
        router.replace(`/add/${newCurrencyIdA}/${currencyIdB}`, undefined, { shallow: true })
      } else {
        router.replace(`/add/${newCurrencyIdA}`, undefined, { shallow: true })
      }
    },
    [currencyIdB, router, currencyIdA],
  )

  const handleCurrencyBSelect = useCallback(
    (currencyB_: Token) => {
      const newCurrencyIdB = currencyB_
      if (currencyIdA === currencyIdB) {
        if (currencyIdB) {
          router.replace(`/add/${currencyIdB}/${newCurrencyIdB}`, undefined, { shallow: true })
        } else {
          router.replace(`/add/${newCurrencyIdB}`, undefined, { shallow: true })
        }
      } else {
        router.replace(`/add/${currencyIdA || 'ETH'}/${newCurrencyIdB}`, undefined, { shallow: true })
      }
    },
    [currencyIdA, router, currencyIdB],
  )

  useEffect(() => {
    if (router.query.currency) {
      setTokenA_(router.query.currency[0])
      setTokenB_(router.query.currency[1])
    }
  }, [router.isReady])

  const [tokenA_Amount, setTokenA_Amount] = useState('');
  const [tokenB_Amount, setTokenB_Amount] = useState('');
  const [poolInformation, setPoolInformation] = useState<Map<string, number>>(emptyPoolInformation)

  function handleChange(reverse: boolean, amount: number = parseFloat(tokenA_Amount), token_a: Token = tokenA, token_b: Token = tokenB) {
    const poolInformation = convert(amount, token_a, token_b, reverse);
    setPoolInformation(poolInformation);
    return poolInformation.get('Token B Amount')! //non-null (!)
  }

  return (


    <div className={style.wrapper}>
      <div className={style.returnBar}>
        <div className="flex flex-column items-center">
          <button>
            <Link href="/pool">
              <ChevronLeftIcon className="w-14 h-14" />
            </Link>
          </button>
          <h1 className="text-2xl">
            Manage Pool
          </h1>
        </div>
      </div>
      <div className={style.poolContainer}>
        <div className={style.poolInfo}>
          <div className="flex flex-right flex-row justify-start p-8 mr-4">
          </div>
        </div>
        <div className={style.addPoolMenu}>
          <div className="box-border w-full flex wrap items-center min-w-0">
            <div className="border-box w-full flex items-center justify-between">
              <div className="flex flex-nowrap flex-row justify-start items-center">
                <a href="#" id="pool-add-link" className="flex flex-row flex-nowrap items-center justify-center 
                                cursor-pointer outline-none text-none text-base mr-[15px]" aria-current="page">Add</a>
                <a href="#" className="flex flex-row flex-nowrap items-center justify-center 
                                cursor-pointer outline-none text-none text-base mr-[15px]" aria-current="page">Remove</a>
              </div>
              <div className="ml-2 flex relative border-none text-left justify-center items-center">
                <button><div className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px]">
                  <AdjustmentsIcon className="w-6 h-6" />
                </div></button>
              </div>
            </div>
          </div>
          <div className="mt-[20px]">
            <div className="grid auto-rows-auto gap-y-[20px] mt-[0.2rem]">
              <div id="add-liquidity-input-token-a" className="">
                <PoolInput {...{
                  value: tokenA_Amount,
                  token: tokenA,
                  setToken: setTokenA,
                  setTokenA_Amount: setTokenA_Amount,
                  setTokenB_Amount: setTokenB_Amount,
                }}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col justify-start items-center w-full"><PlusIcon className="w-5 h-5" /></div>
              <div id="add-liquidity-input-token-b" className="">
                <PoolInput
                  tokenB
                  {...{
                    value: tokenB_Amount,
                    token: tokenB,
                    setToken: setTokenB,
                    setTokenA_Amount: setTokenA_Amount,
                    setTokenB_Amount: setTokenB_Amount,
                  }}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-20">
              <AddPoolButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddLiquidity

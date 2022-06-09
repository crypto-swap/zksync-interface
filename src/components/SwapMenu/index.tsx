import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SwapInput from './SwapInput';
import SwapButton from './SwapButton';
import { Transition } from '@headlessui/react';
import { hooks } from '../../connectors/metaMask';
import { useRouter } from 'next/router';
import { AdjustmentsIcon } from '@heroicons/react/solid';

const { useIsActive } = hooks;

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

const emptyTransactionInformation = new Map([
  ['Receive', 0],
  ['Rate', 0],
  ['Swap Fee', 0],
  ['Optimization Fee', 0],
  ['Minimum Received', 0],
]);

function convert(
  amount: number,
  from: Token,
  to: Token,
  reverse: boolean = false
) {
  let rate = getRate(to) / getRate(from);
  if (reverse) {
    rate = 1 / rate;
  }
  const output = amount * rate;
  let receive = output;
  if (reverse) {
    [receive, amount] = [amount, output];
  }
  return new Map([
    ['Receive', Number(output.toFixed(4))],
    ['Rate', rate],
    ['Swap Fee', amount * 0.003],
    ['Optimization Fee', amount * 0.0005],
    ['Minimum Received', receive * 0.995],
  ]);
}

const SwapMenu = () => {
  const router = useRouter()
  const [effect, setEffect] = useState(false);

  const [payToken, setPayToken_] = useState(tokens[0]);
  const [receiveToken, setReceiveToken_] = useState(tokens[1]);
  function setPayToken(value: React.SetStateAction<Token>) {
    setPayToken_(value);
    router.push(`/swap?/${(value as string).toUpperCase()}/${receiveToken.toUpperCase()}`);
  }
  function setReceiveToken(value: React.SetStateAction<Token>) {
    setReceiveToken_(value);
    router.push(`/swap?/${payToken.toUpperCase()}/${(value as string).toUpperCase()}`);
  }
  useEffect(() => {
    if (router.query.tokens) {
      setPayToken_(router.query.tokens[0])
      setReceiveToken_(router.query.tokens[1])
    }
  }, [router.isReady])

  const [payAmount, setPayAmount] = useState('');
  const [receiveAmount, setReceiveAmount] = useState('');
  const [transactionInformation, setTransactionInformation] = useState<
    Map<string, number>
  >(emptyTransactionInformation);

  const walletConnected = useIsActive();

  function handleChange(
    reverse: boolean,
    amount: number = parseFloat(payAmount),
    from: Token = payToken,
    to: Token = receiveToken
  ) {
    const transactionInformation = convert(amount, from, to, reverse);
    setTransactionInformation(transactionInformation);
    return transactionInformation.get('Receive')!!;
  }

  function resetTransactionInformation() {
    setTransactionInformation(emptyTransactionInformation);
  }

  return (
    <div className="text-text-light dark:text-text-dark ">
      <div className="relative z-10 mx-auto mt-16 text-left h-auto w-full max-w-md rounded-3xl bg-bg-card-light p-7 pt-6 shadow-card dark:bg-bg-card-dark dark:shadow-card-dark">
        <div className="mb-[27px] text-xl font-bold flex flex-nowrap flex-row justify-between items-center">
          <div>Swap</div>
          <button><AdjustmentsIcon className="w-6 h-6" /></button>
        </div>
        <SwapInput
          {...{
            value: payAmount,
            setPayAmount,
            setReceiveAmount,
            token: payToken,
            setToken: setPayToken,
            resetTransactionInformation
          }}
          onChange={handleChange}
        />
        <div className="mt-6 flex justify-center">
          <button
            className="h-[30px] scale-x-[-1]"
            onClick={() => {
              setEffect(true);
              const temp = payToken;
              setPayToken(receiveToken);
              setReceiveToken(temp);

              setPayAmount(receiveAmount);
              setReceiveAmount(payAmount);
            }}
          >
            <Image
              src={'https://cryptoswap.org/assets/SwapButton.svg'}
              className={`${effect ? 'animate-spin-once' : ''}`}
              onAnimationEnd={() => setEffect(false)}
              height={30}
              width={30}
            />
          </button>
        </div>
        <SwapInput
          receive
          {...{
            value: receiveAmount,
            setPayAmount,
            setReceiveAmount,
            token: receiveToken,
            setToken: setReceiveToken,
            resetTransactionInformation
          }}
          onChange={handleChange}
        />
        <SwapButton />
      </div>
      <div className="pt-2.5">
        <Transition
          show={walletConnected}
          enter="duration-1000"
          enterFrom="translate-y-[-96px]"
          enterTo="translate-y-0"
        >
          <div className="relative z-0 mx-auto flex w-full max-w-md flex-col gap-4 rounded-3xl bg-bg-card-light p-[26px] pt-4 shadow-card dark:bg-bg-card-dark  dark:shadow-card-dark">
            {Array.from(transactionInformation)
              .slice(1)
              .map(([label, value]) => (
                <div className="flex place-content-between text-sm font-bold" key={label}>
                  <span>{label}</span>
                  <span>{(value || 0).toFixed(4)}</span>
                </div>
              ))}
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default SwapMenu;

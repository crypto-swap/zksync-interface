import { useState, useContext } from 'react';
import Image from 'next/image';
import SwapInput from './SwapInput';
import SwapButton from './SwapButton';
import { Transition } from '@headlessui/react';
import { WalletContext } from '../../pages/_app';

const SwapMenu = () => {
  const [effect, setEffect] = useState(false);

  const [fromToken, setFromToken] = useState('eth');
  const [toToken, setToToken] = useState('bat');

  const { wallet } = useContext(WalletContext);

  return (
    <div className="text-text-light dark:text-text-dark ">
      <div className="relative z-10 mx-auto mt-16 h-auto w-full max-w-md rounded-3xl bg-bg-card-light p-6 pt-5  shadow-card dark:bg-bg-card-dark dark:shadow-card-dark">
        <div className="mb-[27px] ml-0.5 text-xl font-bold">Swap</div>
        <SwapInput
          title="Pay"
          value={'0.0'}
          token={fromToken}
          setToken={setFromToken}
        />
        <div className="mt-6 flex justify-center">
          <button
            className="h-[30px] scale-x-[-1]"
            onClick={() => {
              setEffect(true);
              const temp = fromToken;
              setFromToken(toToken);
              setToToken(temp);
            }}
          >
            <Image
              src={'/assets/SwapButton.svg'}
              className={`${effect ? 'animate-spin-once' : ''}`}
              onAnimationEnd={() => setEffect(false)}
              height={30}
              width={30}
            />
          </button>
        </div>
        <SwapInput
          title="Receive"
          value={'0.0'}
          token={toToken}
          setToken={setToToken}
        />
      <SwapButton />
      </div>
      <div className='pt-2.5'>
      <Transition
        show={wallet}
        enter="duration-1000"
        enterFrom="translate-y-[-96px]"
        enterTo="translate-y-0"
      >
        <div className="relative z-0 mx-auto flex w-full max-w-md flex-col gap-4 rounded-3xl bg-bg-card-light p-[26px] pt-4 shadow-card dark:bg-bg-card-dark  dark:shadow-card-dark">
          {['Rate', 'Swap Fee', 'Estimated Cost', 'Minimum Received'].map(
            (label) => (
              <div className="flex place-content-between text-sm font-bold">
                <span>{label}</span>
                <span>XX.XX</span>
              </div>
            )
          )}
        </div>
      </Transition>
      </div>
    </div>
  );
};

export default SwapMenu;

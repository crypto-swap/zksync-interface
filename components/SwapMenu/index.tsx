import { useState } from 'react';
import Image from 'next/image';
import SwapInput from './SwapInput';
import SwapButton from './SwapButton';

const SwapMenu = () => {
  const [effect, setEffect] = useState(false);

  const [fromToken, setFromToken] = useState('eth');
  const [toToken, setToToken] = useState('bat');

  return (
    <div className="h-auto w-full max-w-md rounded-3xl bg-bg-card-light shadow-card dark:bg-bg-card-dark dark:shadow-card-dark">
      <div className="p-6 pt-5 text-text-light dark:text-text-dark">
        <div className="mb-[26px] ml-0.5 text-xl font-bold">Swap</div>
        <SwapInput
          title="Pay"
          value={'0.0'}
          token={fromToken}
          setToken={setFromToken}
        />
        <div className="mt-6 flex justify-center">
          <button
            className="h-[30px]"
            onClick={() => {
              setEffect(true);
              const temp = fromToken;
              setFromToken(toToken);
              setToToken(temp);
            }}
          >
            <Image
              src={'/SwapButton.svg'}
              className={effect ? 'animate-spin-once' : ''}
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
    </div>
  );
};

export default SwapMenu;

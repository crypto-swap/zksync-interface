import { useState } from 'react'
import Image from 'next/image'
import SwapInput from './SwapInput'

const SwapMenu = () => {
  const [effect, setEffect] = useState(false)

  const [fromToken, setFromToken] = useState('eth')
  const [toToken, setToToken] = useState('bat')

  return (
    <div className="h-auto w-full max-w-md rounded-3xl bg-bg-card-light shadow-card dark:bg-bg-card-dark dark:shadow-card-dark">
      <div className="h-full px-3 py-4 text-text-light dark:text-text-dark">
        <div className="font-bold">Swap</div>
        <SwapInput
          title="From"
          value={'0.0'}
          token={fromToken}
          setToken={setFromToken}
        />
        <div className="flex justify-center">
          <button
            className=""
            onClick={() => {
              setEffect(true)
              const temp = fromToken
              setFromToken(toToken)
              setToToken(temp)
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
          title="To"
          value={'0.0'}
          token={toToken}
          setToken={setToToken}
        />
      </div>
    </div>
  )
}

export default SwapMenu

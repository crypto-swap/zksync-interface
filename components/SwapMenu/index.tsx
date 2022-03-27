import Image from 'next/image'
import React from 'react'
import SwapInput from './SwapInput'

const SwapMenu = () => {
  return (
    <div className="h-auto w-4/6 rounded-lg bg-[#1F2237] shadow-lg">
      <div className="h-full px-3 py-4 text-white">
        <div className="font-bold">Swap</div>
        <SwapInput title="From" value={0.0} />
        <div className="flex justify-center">
          <button className="">
            <Image src={'/SwapButton.svg'} height={30} width={30} />
          </button>
        </div>
        <SwapInput title="To" value={0.0} />
      </div>
    </div>
  )
}

export default SwapMenu

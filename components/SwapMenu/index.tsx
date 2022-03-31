import React from 'react'
import Image from 'next/image'
import SwapInput from './SwapInput'

const SwapMenu = () => {
  return (
    <div className="bg-[#F4F4F5] h-auto w-full max-w-md rounded-3xl shadow-card dark:bg-[#1F2237] dark:shadow-card-dark">
      <div className="text-[#1F2237] h-full px-3 py-4 dark:text-[#EFEFEF]">
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

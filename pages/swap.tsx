import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import SwapMenu from '../components/SwapMenu'
import SwapInput from '../components/SwapMenu/SwapInput'

const Swap = () => {
  return (
    <div className="h-screen bg-[#1B1E31] font-[Montserrat]">
      <Head>
        <title>CryptoSwap</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="flex p-5">
        <span className="relative mr-2 w-8">
          <Image src="/logo.png" layout="fill" objectFit="contain" />
        </span>

        <div className="flex gap-5">
          <span className="text-[#7D7E90]">Trade</span>
          <span className="text-[#7D7E90]">Pool</span>
          <span className="text-[#7D7E90]">Docs</span>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <SwapMenu />
      </div>
    </div>
  )
}

export default Swap

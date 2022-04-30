import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Tutorial = () => {
    return (

    <>
        <div className="flex items-center justify-center">
          <div className='text-4xl text-center font-semibold leading-7 rounded-[64px] p-10 w- shadow-card dark:shadow-card-dark'>
              <p className="leading-7">Swapping crypto</p>
              <br></br>
              <p className="leading-7">should be simple</p>
          </div>
        </div>

          <div className="flex-1 mx-auto pt-10 px-4 md:px-[15%] lg:px-[20%] xl:px-[25%]">
            <ul className="grid grid-cols-2 gap-y-6 gap-x-4 md:gap-y-12 md:gap-x-8 lg:gap-x-24 xl:gap-y-16 xl:gap-x-32">
              <li className="bg-menu-blue rounded-3xl square flex flex-col items-center shadow-grey-card hover:shadow-grey-card-hover">
                <button className="flex flex-col items-center square object-contain justify-center p-[10%] gap-y-2 lg:p-[5%] ">
                  <div className="h-auto lg:p-[5%] xl:px-[7.5%] lg:pb-[-10%]">
                    <img src={'/assets/wallets.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg text-center font-semibold text-text-dark'>Connect Your Wallet</span>
                </button>
              </li>
              <li className="flex mt-[20%]">
                <span className='font-bold text-md md:text-lg lg:text-2xl '>
                  Step 1: <br></br>
                  Connect your wallet <br></br>
                  ... and you're done! <br></br><br></br>
                  <span className="text-xs lg:text-lg leading-[0px] lg:leading-3">
                    <p className="leading-[0px] lg:leading-3">No wallet?</p>
                    <a href="" className="text-[#7408F8]">Click Here</a>
                  </span>
                </span>
              </li>
              <li className="flex mt-[20%] lg:mt-[22.5%]">
                <span className='font-bold text-md md:text-lg lg:text-2xl'>
                  Now you can access <br></br>
                  CryptoSwap's great <br></br>
                  features on an ever <br></br>
                  expanding list of <br></br>
                  crypto networks! 
                </span>
              </li>
              <li className="bg-menu-blue rounded-3xl square flex flex-col items-center shadow-grey-card hover:shadow-grey-card-hover">
                <button className="flex flex-col items-center square object-contain justify-center px-[15%] py-[7.5%] md:pt-[7.5%] md:pb-[2.5%] gap-y-1 lg:gap-y-2">
                  <div className="h-auto lg:p-[2.5%] lg:pb-[-2.5%]">
                    <img src={'/assets/networks.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg text-center font-semibold text-text-dark lg:mb-2'>View Networks</span>
                </button>
              </li>
              <li className="bg-[#71B176]  rounded-3xl square flex flex-col items-center shadow-green-card hover:shadow-green-card-hover">
                <Link href="/swap">
                  <button className="flex flex-col items-center square object-contain justify-center px-[10%] py-[5%] gap-y-2">
                    <div className="h-auto">
                      <img src={'/assets/swap.svg'}/>
                    </div>
                    <span className='text-xs md:text-lg text-center font-semibold text-text-dark'>Swap</span>            
                  </button>
                </Link>
              </li>
              <li className="flex mt-[25%] lg:mt-[33.333%]">
                <span className='font-bold text-md md:text-lg lg:text-2xl '>
                  <span className="text-[#7408F8]">Swap</span>
                <br></br>
                  Select your wallets,<br></br>
                  customize your trade.
                </span>
              </li>
              <li className="flex mt-[25%]">
                <span className='font-bold text-md md:text-lg lg:text-2xl '>
                <span className="text-[#7408F8]">Pool</span><br></br>
                  Deposit crypto, <br></br>
                  collect 0.25%  <br></br>
                  per trade. 
                </span>
              </li>
              <li className="bg-font-blue rounded-3xl square flex flex-col items-center shadow-blue-card hover:shadow-blue-card-hover">
                <Link href="/pool">
                  <button className="flex flex-col items-center square object-contain justify-center px-[10%] py-[5%] gap-y-2 ">
                    <div className="h-auto">
                      <img src={'/assets/pool.svg'}/>
                    </div>
                    <span className='text-xs md:text-lg text-center font-semibold text-text-dark'>Pool</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
    </>
    )
}

export default Tutorial

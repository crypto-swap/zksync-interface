import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div className="text-[#1F2237] bg-[#EFEFEF] h-screen font-[Montserrat] overflow-x-hidden dark:bg-[#1B1E31] dark:text-[#EFEFEF] ">
      <Head>
        <title>CryptoSwap</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar/>

      <div className="relative max-w-2xl h-screen w-screen flex items-center justify-center px-5 mx-auto sm:px-4 mt-[-5%] md:mt-[0]">
        <div className="flex flex-col space-y-10 place-items-center font-[Montserrat] p-10 rounded-[64px] shadow-inset-text dark:shadow-inset-text-dark">
          <div className='text-4xl font-semibold leading-7'>
          <p className="leading-7">Crypto swaps</p>
          <br></br>
          <p className="leading-7">are easy here</p>
          </div>

          <button className="bg-[#4B86FF] hover:bg-[#2669F5]  text-[#EFEFEF] font-bold py-2 px-4 rounded-full text-base w-9/12 dark:bg-[#2669F5] dark:hover:bg-[#4B86FF] shadow-button dark:shadow-button-dark">
            <a href="#tutorial">
              Get Started Now
            </a>
          </button>
        </div>
      </div>

      <div><a id={'tutorial'}>&nbsp;</a></div>
      <div className='lg:hidden'>&nbsp;</div>

      <div  className="relative flex-col items-center place-item pt-14 lg:pt-20" >
        <div className="flex justify-center">
          <div className='text-4xl text-center font-semibold leading-7 rounded-[64px] p-10 w-fit shadow-card-text dark:shadow-card-text-dark'>
              <p className="leading-7">Swapping crypto</p>
              <br></br>
              <p className="leading-7">should be simple</p>
          </div>
        </div>

          <div className="flex-1 max-w-4x1 mx-auto pt-10 px-4 md:px-[15%] lg:px-[20%] xl:px-[25%]">
            <ul className="grid grid-cols-2 gap-y-6 gap-x-4 md:gap-y-12 md:gap-x-8 lg:gap-x-24 xl:gap-y-16 xl:gap-x-32">
              <li className="bg-[#363C5F]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center p-[10%] gap-y-2 lg:p-[5%] ">
                  <div className="h-auto lg:p-[5%] xl:px-[7.5%] lg:pb-[-10%]">
                    <img src={'/wallets.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg text-center font-semibold text-[#EFEFEF]'>Connect Your Wallet</span>
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
              <li className="bg-[#363C5F]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[15%] py-[7.5%] md:pt-[7.5%] md:pb-[2.5%]  gap-y-1 lg:gap-y-2">
                  <div className="h-auto  lg:p-[2.5%] lg:pb-[-2.5%]">
                    <img src={'/networks.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg  text-center font-semibold text-[#EFEFEF] lg:mb-2'>View Networks</span>
                </button>
              </li>
              <li className="bg-[#71B176]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[10%] py-[5%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/swap.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg  text-center font-semibold text-[#EFEFEF]'>Swap</span>
                </button>
              </li>
              <li className="flex mt-[25%] lg:mt-[33.333%]">
                <span className='font-bold text-md md:text-lg lg:text-2xl '>
                  Swap:<br></br>
                  Select your wallets,<br></br>
                  customize your trade.
                </span>
              </li>
              <li className="flex mt-[25%]">
                <span className='font-bold text-md md:text-lg lg:text-2xl '>
                  Pool:<br></br>
                  Deposit crypto, <br></br>
                  collect 0.25%  <br></br>
                  per trade. 
                </span>
              </li>
              <li className="bg-[#4B86FF]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[10%] py-[5%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/pool.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg  text-center font-semibold text-[#EFEFEF]'>Pool</span>
                </button>
              </li>
            </ul>
          </div>

      </div>  

      <div className="mt-96">&nbsp;</div>

      <footer className="flex h-24 w-full items-center justify-center">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/logo.png" alt="CryptoSwap Logo" width={16} height={16} /> CryptoSwap
        </a>
      </footer>
    </div>
  )
}

export default Home

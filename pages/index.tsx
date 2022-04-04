import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {

  return (
    <div className="text-text-light bg-bg-light h-screen font-[Montserrat] overflow-x-hidden dark:bg-bg-dark dark:text-text-dark">
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

      <div className="relative h-screen w-screen flex items-center justify-center mx-auto mt-[-5%] md:mt-[0]">
        
        
        <div className="absolute z-auto flex flex-col space-y-10 place-items-center font-[Montserrat] p-10 rounded-[64px] shadow-card dark:shadow-card-dark">
          <div className='text-4xl font-semibold leading-7'>
          <p className="leading-7">Crypto swaps</p>
          <br></br>
          <p className="leading-7">are easy here</p>
          </div>

          <button className=" bg-font-blue hover:bg-button-blue text-text-dark font-bold py-2 px-4 rounded-full text-base w-9/12 dark:bg-button-blue dark:hover:bg-font-blue shadow-button dark:shadow-button-dark">
            <a href="#tutorial">
              Get Started Now
            </a>
          </button>
        </div>

        <div className="">
          <ul className="box-area">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        
        <div className="">
          <ul className="box-area-dark">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

      </div>

      <div id={'tutorial'} className="relative flex flex-col items-center justify-center place-items-center pt-14 lg:pt-20" >
          
        
        <div className="flex items-center justify-center">
          <div className='text-4xl text-center font-semibold leading-7 rounded-[64px] p-10 w- shadow-card-text dark:shadow-card-text-dark'>
              <p className="leading-7">Swapping crypto</p>
              <br></br>
              <p className="leading-7">should be simple</p>
          </div>
        </div>

          <div className="flex-1 mx-auto pt-10 px-4 md:px-[15%] lg:px-[20%] xl:px-[25%]">
            <ul className="grid grid-cols-2 gap-y-6 gap-x-4 md:gap-y-12 md:gap-x-8 lg:gap-x-24 xl:gap-y-16 xl:gap-x-32">
              <li className="bg-menu-blue rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center p-[10%] gap-y-2 lg:p-[5%] ">
                  <div className="h-auto lg:p-[5%] xl:px-[7.5%] lg:pb-[-10%]">
                    <img src={'/wallets.svg'}/>
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
              <li className="bg-menu-blue rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[15%] py-[7.5%] md:pt-[7.5%] md:pb-[2.5%] gap-y-1 lg:gap-y-2">
                  <div className="h-auto lg:p-[2.5%] lg:pb-[-2.5%]">
                    <img src={'/networks.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg text-center font-semibold text-text-dark lg:mb-2'>View Networks</span>
                </button>
              </li>
              <li className="bg-[#71B176]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[10%] py-[5%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/swap.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg text-center font-semibold text-text-dark'>Swap</span>
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
              <li className="bg-font-blue rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[10%] py-[5%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/pool.svg'}/>
                  </div>
                  <span className='text-xs md:text-lg text-center font-semibold text-text-dark'>Pool</span>
                </button>
              </li>
            </ul>
          </div>

          
      </div>  

      <div className="mt-96">&nbsp;</div>

      <footer className="flex h-24 w-full items-center justify-center overflow-hidden">
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

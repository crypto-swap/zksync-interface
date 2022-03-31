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
        <div className="flex flex-col space-y-10 place-items-center font-[Montserrat] ">
          <div className='text-4xl font-semibold leading-7'>
          <p className="leading-7">Crypto swaps</p>
          <br></br>
          <p className="leading-7">are easy here</p>
          </div>
          <button className="bg-[#4B86FF] hover:bg-[#2669F5]  text-[#EFEFEF] font-bold py-2 px-4 rounded-full text-base w-9/12 dark:bg-[#2669F5] dark:hover:bg-[#4B86FF]">
            <a href="#tutorial">
              Get Started Now
            </a>
          </button>
        </div>
      </div>

      <div><a id={'tutorial'}>&nbsp;</a></div>
      <div className='lg:hidden'>&nbsp;</div>

      <div  className="relative flex-col items-center pt-14 lg:pt-20" >

        <div className='text-4xl text-center font-semibold leading-7'>
          <p className="leading-7">Swapping crypto</p>
          <br></br>
          <p className="leading-7">should be simple</p>
        </div>

          <div className="flex-1 max-w-4x1 mx-auto pt-10 px-4 lg:px-[10%] xl:px-[20%]">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
              <li className="bg-[#363C5F]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center p-[10%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/wallets.svg'}/>
                  </div>
                  <span className='text-xs md:text-md text-center font-semibold text-[#EFEFEF]'>Connect Your Wallet</span>
                </button>
              </li>
              <li className="flex mt-[16.6666666%]">
                <span className='font-bold text-md lg:text-lg '>
                  Step 1: <br></br>
                  connect your wallet <br></br>
                  ... and you're done! <br></br><br></br>
                  <span className="text-xs leading-[0px]">
                    <p className="leading-[0px]">No wallet?</p>
                    <a href="" className="text-[#7408F8]">Click Here</a>
                  </span>
                </span>
              </li>
              <li className="flex mt-[20%]">
                <span className='font-bold text-md lg:text-lg '>
                  Now you can access <br></br>
                  CryptoSwap's great <br></br>
                  features on an ever <br></br>
                  expanding list of <br></br>
                  crypto networks! 
                </span>
              </li>
              <li className="bg-[#363C5F]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[15%] py-[7.5%] md:pt-[7.5%] md:pb-[0%]  gap-y-1">
                  <div className="h-auto">
                    <img src={'/networks.svg'}/>
                  </div>
                  <span className='text-xs md:text-md text-center font-semibold text-[#EFEFEF]'>View Networks</span>
                </button>
              </li>
            </ul>
          </div>


        <div className='text-xl font-bold leading-5 flex flex-col items-center justify-center pt-32'> 
          <span>
            <p className="leading-5">CryptoSwap has two features that</p>
            <br></br>
            <p className="leading-5">are being researched, tested, and </p>
            <br></br>
            <p className="leading-5">audited for algorithmic excellence. </p>
            </span>      
        </div>

          <div className="flex-1 max-w-4x1 mx-auto pt-10 px-4 lg:px-[10%] xl:px-[20%]">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4">
              <li className="bg-[#71B176]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center p-[10%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/swap.svg'}/>
                  </div>
                  <span className='text-xs md:text-md text-center font-semibold text-[#EFEFEF]'>Swap</span>
                </button>
              </li>
              <li className="flex mt-[20%]">
                <span className='font-bold text-sm lg:text-lg '>
                  Swap:<br></br>
                  Select your wallets<br></br>
                  and customize your<br></br>
                  trade, CryptoSwap <br></br>
                  will handle the rest.<br></br>
                </span>
              </li>
              <li className="flex mt-[14.2857%]">
                <span className='font-bold text-[13px] md:text-sm lg:text-md xl:text-lg '>
                  Pool:<br></br>
                  Pool your crypto funds <br></br>
                  and collect a 0.25% fee <br></br>
                  per trade. Your pooled <br></br>
                  funds will be linked <br></br>
                  to your wallet via the <br></br>
                  CryptoSwap Protocol. <br></br>
                </span>
              </li>
              <li className="bg-[#4B86FF]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center p-[10%] gap-y-2">
                  <div className="h-auto">
                    <img src={'/pool.svg'}/>
                  </div>
                  <span className='text-xs md:text-md text-center font-semibold text-[#EFEFEF]'>Pool</span>
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

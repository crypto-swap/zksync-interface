import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Tutorial from '../components/Homepage/tutorial'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {

  return (
    <div className="text-text-light bg-bg-light h-screen font-[Montserrat] overflow-x-hidden dark:bg-bg-dark dark:text-text-dark">
      <Head>
        <title>CryptoSwap</title>
        <link rel="icon" href="/black_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar/>

      <div className="relative h-[90vh] w-screen flex items-center justify-center mx-auto">
        
        
        <div className="absolute z-10 -mt-48 flex flex-col space-y-10 place-items-center font-[Montserrat] p-10 rounded-[64px] shadow-card dark:shadow-card-dark">
          <div className='text-4xl font-semibold leading-7'>
          <p className="leading-7">Crypto swaps</p>
          <br></br>
          <p className="leading-7">are easy here</p>
          </div>

          <button className="  bg-font-blue hover:bg-button-blue text-text-dark font-bold py-2 px-4 rounded-full text-base w-9/12 dark:bg-button-blue dark:hover:bg-font-blue shadow-button dark:shadow-button-dark">
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

      <div id={'tutorial'} className="relative flex flex-col items-center justify-center place-items-center pt-5" >
       <Tutorial/>
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

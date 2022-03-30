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

      <div className="relative max-w-2xl h-screen w-screen flex items-center justify-center px-5 mx-auto sm:px-4">
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

        <div className="">
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
              <li className="">
                <span>
                  Step 1: connect your wallet ... and you're done!
                </span>
              </li>
              <li className="">
                <span>
                  xd
                </span>
              </li>
              <li className="bg-[#363C5F]  rounded-3xl square flex flex-col items-center">
                <button className="flex flex-col items-center square object-contain justify-center px-[15%] pt-[7.5%] gap-y-1">
                  <div className="h-auto">
                    <img src={'/networks.svg'}/>
                  </div>
                  <span className='text-xs md:text-md text-center font-semibold text-[#EFEFEF]'>View Networks</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>  

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center ">
        <h1 className="text-6xl font-bold">
          <a className="text-blue-600" href="https://nextjs.org">
            CryptoSwap!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code>
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Home

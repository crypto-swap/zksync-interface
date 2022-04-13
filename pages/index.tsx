import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Tutorial from '../components/Homepage/tutorial';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <div className="relative h-screen overflow-x-hidden bg-bg-light font-[Montserrat] text-text-light dark:bg-bg-dark dark:text-text-dark">
      <Head>
        <title>CryptoSwap</title>
        <link rel="icon" href="/black_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <div className="absolute z-0 h-full w-full">
        <ul className="box-area-dark">
          <li>
            <img src="/coins/coin1-min.png" />
          </li>
          <li>
            <img src="/coins/coin2-min.png" />
          </li>
          <li>
            <img src="/coins/coin3-min.png" />
          </li>
          <li>
            <img src="/coins/coin4-min.png" />
          </li>
          <li>
            <img src="/coins/coin5-min.png" />
          </li>
          <li>
            <img src="/coins/coin6-min.png" />
          </li>
          <li>
            <img src="/coins/coin7-min.png" />
          </li>
          <li>
            <img src="/coins/coin8-min.png" />
          </li>
          <li>
            <img src="/coins/coin9-min.png" />
          </li>
          <li>
            <img src="/coins/coin10-min.png" />
          </li>
        </ul>
      </div>

      <div className="relative mx-auto flex h-[95vh] w-screen items-center justify-center">
        <div className="absolute z-20 flex flex-col items-center justify-center space-y-10 rounded-[64px] p-10 font-[Montserrat] shadow-card dark:shadow-card-dark">
          <div className="text-4xl font-semibold leading-7">
            <p className="z-30 leading-7">Crypto swaps</p>
            <br></br>
            <p className="leading-7">are easy here</p>
          </div>

          <button className="  w-9/12 rounded-full bg-font-blue py-2 px-4 text-base font-bold text-text-dark shadow-button hover:bg-button-blue dark:bg-button-blue dark:shadow-button-dark dark:hover:bg-font-blue">
            <a href="#tutorial">Get Started Now</a>
          </button>
        </div>
      </div>

      <div
        id={'tutorial'}
        className="relative flex flex-col place-items-center items-center justify-center pt-5"
      >
        <Tutorial />
      </div>

      <div className="mt-96">&nbsp;</div>
      <Footer />
    </div>
  );
};

export default Home;

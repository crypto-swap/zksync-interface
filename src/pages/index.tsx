import Head from 'next/head';
import Navbar from '../components/Navbar';
import SwapMenu from '../components/SwapMenu';
import Footer from '../components/Footer';

const Swap = () => {

  return (
    <div className="h-screen bg-bg-light font-[Montserrat] dark:bg-bg-dark overflow-auto">
      <Head>
        <title>CryptoSwap</title>
        <meta name="description" content="CryptoSwap is a very efficient simple DEX on zkSync (Swap, Pool, Liquidity Options, and Generate). No presale, fully decentralized, and community-driven." />
        <meta key="twitter:description" name="twitter:description" content="CryptoSwap" />
        <link rel="icon" href="/icons/black_logo.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="canonical" href="https://cryptoswap.org" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />

      <div className="w-11/12 ml-[4.167%]">
        <SwapMenu />
      </div>

      <div className="bg-bg-light pt-96 dark:bg-bg-dark">&nbsp;</div>

      <Footer />
    </div>
  );
};

export default Swap;

import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PoolView from '../../views/Pool'

//[[...tokens]] catches all routes /add , /add/TokenA, /add/TokenA/TokenB yeet

const Pool = () => {
    return (
        <div className="bg-bg-light dark:bg-bg-dark">
            <Head>
                <title>Crypto Swap</title>
                <meta name="description" content="Crypto Swap is a very efficient simple DEX on zkSync (Swap, Pool, Liquidity Options, and Generate). No presale, fully decentralized, and community-driven." />
                <meta key="twitter:description" name="twitter:description" content="Crypto Swap" />
                <link rel="icon" href="/icons/black_logo.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="canonical" href="https://cryptoswap.org" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar />
            <div className="mb-12">
                <PoolView />
            </div>
            <Footer />
        </div>
    )
}

export default Pool //export single class/module create 


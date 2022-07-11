import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PoolMenu from '../components/Pools/PoolMenu'
import Banner from '../components/Pools/Banner'

const Pools = () => {
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
            <div className="p-5 lg:p-0 lg:pt-5">
                <Banner />
                <PoolMenu />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <Footer />
        </div>
    )
}

export default Pools

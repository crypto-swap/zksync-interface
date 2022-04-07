import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Team = () => {
    return (
        <div>
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
            <div>You'll get to know our team of 17 soon!</div>
            <Footer/>
        </div>    
    )
}

export default Team 

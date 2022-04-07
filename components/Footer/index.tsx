import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Footer = () => {
  const {theme} = useTheme();
  return (
    <div className="h-45 grid w-full grid-cols-1 grid-rows-4 justify-items-center lg:grid-cols-4 lg:grid-rows-1">
      <div className="px-12 space-y-3">
        <p className="text-xl font-semibold text-center">Join Our Community</p>
        <div className="grid grid-cols-5 gap-2 pt-5 pb-3">
          <Link href="https://t.me/+caEx-GqJJy5kMTEx">
            <a target="_blank">
              <Image src={'/telegram.svg'} width={45} height={45} />
            </a> 
          </Link>
          <Link href="https://medium.com/@cryptoswaporg">
            <a target="_blank">
              <Image src={theme === 'dark' ? '/medium_dark.svg' : '/medium.svg'} width={45} height={45} />
            </a>
          </Link>
          <Link href="https://discord.gg/KK2Gha9Cyb">
            <a target="_blank">
              <Image src={'/discord.svg'} width={45} height={45} />
            </a>
          </Link>
          <Link href="https://twitter.com/cryptoswaporg/">
            <a target="_blank">
              <Image src={'/twitter.svg'} width={45} height={45} />
            </a>
            
          </Link>
          <Link href="https://github.com/crypto-swap">
            <a target="_blank">
            <Image src={theme === 'dark' ? 'github_dark.svg' : '/github.svg'} width={45} height={45} />
            </a>
          </Link>
        </div>
        <p className="w-full text-center font-medium">© CryptoSwap 2022</p>
      </div>
      <div className="space-y-3 pt-6 py-3 lg:py-0 lg:pt-0">
        <h1 className="text-xl font-semibold"> About Us </h1>
        <div className="w-full space-y-2.5 text-center text-base font-semibold text-font-blue">
          <p>
            <Link href="">
              <a>Team</a>
            </Link>
          </p>
          <p>
          <Link href="">
              <a>Investors</a>
            </Link>
          </p>
          <p>
          <Link href="">
              <a>Auditors</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="space-y-3 py-3 lg:py-0">
        <h1 className="text-xl font-semibold"> Resources </h1>
        <div className="w-full text-center space-y-2.5 text-base font-semibold text-font-blue">
          <p>
            <Link href="/whitepaper.pdf">
              <a target="_blank">Whitepaper</a>
            </Link>
          </p>
          <p>
          <Link href="">
              <a>Tutorials</a>
            </Link>
          </p>
          <p>
          <Link href="">
              <a>Support</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="space-y-3 py-3 lg:py-0">
        <h1 className="text-xl font-semibold"> Business </h1>
        <div className="w-full text-center space-y-2.5 text-base font-semibold text-font-blue">
          <p>
            <Link href="">
              <a>Contact Us</a>
            </Link>
          </p>
        </div>
      </div>
      <br></br>
      <div className="mt-0 lg:mt-20 xl:mt-20 2xl:mt-16">&nbsp;</div>
    </div>
  );
};

export default Footer;

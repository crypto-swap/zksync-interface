import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';


/*
          <Link href="https://medium.com/@cryptoswaporg">
            <a target="_blank">
              <Image src={theme === 'dark' ? '/icons/medium_dark.svg' : '/icons/medium.svg'} width={45} height={45} />
            </a>
          </Link>
          <Link href="https://t.me/+caEx-GqJJy5kMTEx">
            <a target="_blank">
              <Image src={'/icons/telegram.svg'} width={45} height={45} />
            </a>
          </Link>

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
*/

const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="h-45 bg-bg-light grid w-full grid-cols-1 grid-rows-4 justify-items-center lg:grid-cols-4 lg:grid-rows-1 dark:bg-bg-dark">
      <div className="px-12 space-y-0">
        <p className="text-xl font-semibold text-center pl-[10px]">Join Our Community</p>
        <div className="grid grid-cols-3 pt-5 pl-[24px] pb-3">


          <Link href="https://discord.gg/KK2Gha9Cyb">
            <a target="_blank">
              <Image src={'/icons/discord.svg'} width={45} height={45} />
            </a>
          </Link>
          <Link href="https://twitter.com/cryptoswaporg/">
            <a target="_blank">
              <Image src={'/icons/twitter.svg'} width={45} height={45} />
            </a>

          </Link>
          <Link href="https://github.com/crypto-swap">
            <a target="_blank">
              <Image src={theme === 'dark' ? 'icons/github_dark.svg' : '/icons/github.svg'} width={45} height={45} />
            </a>
          </Link>
        </div>
        <p className="w-full text-center  font-medium">© CryptoSwap 2022</p>
      </div>
      <div className="space-y-3 pt-6 py-3 lg:py-0 lg:pt-0">
        <div className="text-xl font-semibold"> About Us </div>
        <div className="w-full space-y-2 text-center text-base font-semibold text-font-blue">
          <p>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </p>
          <p>
            <Link href="">
              <a>Auditors</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="space-y-3 lg:py-0">
        <div className="text-xl font-semibold flex justify-center"> Resources </div>
        <div className="w-full text-center space-y-2.5 text-base font-semibold text-font-blue">
          <p>
            <Link href="/whitepaper.pdf">
              <a target="_blank">Whitepaper</a>
            </Link>
          </p>
          <p>
            <Link href="https://docs.cryptoswap.org">
              <a>Documentation</a>
            </Link>
          </p>
          <p>
            <Link href="https://cryptoswap.org/#tutorial">
              <a>Tutorials</a>
            </Link>
          </p>
        </div>
      </div>
      <div className="space-y-3 py-3 lg:py-0">
        <div className="text-xl font-semibold"> Business </div>
        <div className="w-full text-center space-y-2.5 text-base font-semibold text-font-blue">
          <p>
            <Link href="mailto: cryptoswaporg@gmail.com">
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

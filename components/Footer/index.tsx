import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';

const Footer = () => {
  const {theme} = useTheme();
  return (
    <div className="h-45 grid w-full grid-cols-1 grid-rows-4 justify-items-center lg:grid-cols-4 lg:grid-rows-1">
      <div className="p-12">
        <div className="grid grid-cols-5 gap-2 ">
          <Link href="/swap">
            <Image src={'/telegram.svg'} width={45} height={45} />
          </Link>
          <Link href="">
            <Image src={theme === 'dark' ? '/medium_dark.svg' : '/medium.svg'} width={45} height={45} />
          </Link>
          <Link href="">
            <Image src={'/discord.svg'} width={45} height={45} />
          </Link>
          <Link href="">
            <Image src={'/twitter.svg'} width={45} height={45} />
          </Link>
          <Link href="">
            <Image src={theme === 'dark' ? 'github_dark.svg' : '/github.svg'} width={45} height={45} />
          </Link>
        </div>
        <p className="w-full text-center font-medium">© CryptoSwap 2022</p>
      </div>
      <div className="space-y-2.5">
        <h1 className="text-xl font-semibold"> About Us </h1>
        <div className="w-full space-y-1.5 text-center text-base font-semibold text-font-blue">
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
      <div className="space-y-2.5">
        <h1 className="text-xl font-semibold"> Resources </h1>
        <div className="w-full text-center space-y-1.5 text-base font-semibold text-font-blue">
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
      <div className="space-y-2.5">
        <h1 className="text-xl font-semibold"> Business </h1>
        <div className="w-full text-center space-y-1.5 text-base font-semibold text-font-blue">
          <p>
            <Link href="">
              <a>Contact Us</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full">
      <div className="flex p-5">
        <div className="relative mr-2 h-16 w-16">
          <Link href="/">
            <Image src="/logo.png" layout="fill" objectFit="contain" />
          </Link>
        </div>

        <div className="mx-10 flex grow items-center gap-5 ">
          <Link href="/swap">
            <a className="text-[#7D7E90] hover:text-white">Trade</a>
          </Link>
          <Link href="/pool">
            <a className="text-[#7D7E90] hover:text-white">Pool</a>
          </Link>
          <Link href="/docs">
            <a className="text-[#7D7E90] hover:text-white">Docs</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

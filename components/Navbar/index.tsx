import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  return (
    <div className="w-full bg-button-blue dark:bg-transparent">
      <div className="flex px-5 py-3">
        <div className="relative mr-2 h-16 w-16">
          <Link href="/">
            <Image src="/logo.png" layout="fill" objectFit="contain" />
          </Link>
        </div>

        <div className="mx-10 flex grow items-center justify-center gap-5 sm:justify-start">
          <Link href="/swap">
            <a className="hover:text-white dark:marker:selection:text-[#7D7E90]">
              Trade
            </a>
          </Link>
          <Link href="/pool">
            <a className="hover:text-white dark:text-[#7D7E90]">Pool</a>
          </Link>
          <Link href="/docs">
            <a className="hover:text-white dark:text-[#7D7E90]">Docs</a>
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="relative mr-2 flex h-16 w-16 items-center justify-center"
        >
          {theme === 'dark' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" h-6 w-6 text-white hover:fill-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6 hover:fill-black dark:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default Navbar

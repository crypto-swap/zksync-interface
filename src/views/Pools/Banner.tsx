import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const style = {
    wrapper: `md:mx-auto md:max-w-5xl md:space-y-5 md:p-0 space-y-4 md:grid md:grid-cols-[4fr,3fr] md:gap-5 md:space-y-0 my-5`,
    liquidity: `relative hidden rounded-xl bg-bg-card-light dark:bg-bg-card-dark card px-[30px] pt-[30px]  dark:card-dark md:block shadow-card dark:shadow-card-dark`,
    pool: `flex select-none items-center justify-center bg-button-blue  leading-none font-medium 
    cursor-pointer text-white h-[50px] text-sm leading-[24px] rounded-xl w-full w-[200px] shadow-blue-button 
    mt-6 hover:shadow-blue-button-hover`,
    zap: `rounded-xl p-5 bg-bg-card-light dark:bg-bg-card-dark card dark:card-dark shadow-card dark:shadow-card-dark md:px-[30px] md:pb-[30px] md:pt-[10px] md:flex md:flex-col md:justify-end`,
    zapText: `flex flex-col space-y-5 md:flex-row md:items-end md:justify-between md:space-y-0 md:space-x-3`,
    zapButton: `flex select-none text-white items-center justify-center leading-none font-medium
    cursor-pointer h-[50px] text-sm leading-[24px] rounded-xl py-[13px] px-[17px] w-full 
    md:w-[120px]  bg-button-blue shadow-blue-button hover:shadow-blue-button-hover`,
    mobileLiquidity: `rounded-xl bg-bg-card-light dark:bg-bg-card-dark p-5 shadow-card dark:shadow-card-dark md:hidden md:p-[30px] md:flex md:flex-col md:justify-end`,
    mobilePool: `flex select-none items-center text-white justify-center whitespace-nowrap leading-none font-medium transition duration-300 cursor-pointer 
    bg-button-blue shadow-blue-button hover:shadow-blue-button-hover
    h-[50px] text-sm leading-[24px] rounded-xl py-[13px] px-[17px] w-full md:w-auto md:min-w-[200px]`,
    poolImage: `absolute bottom-0 right-[10px] `,
}

const Banner = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.mobileLiquidity}>
                <div className="text-lg font-medium">Create a Pool</div>
                <div className="mt-2 text-gray-500 dark:text-gray-400">
                    Create a liquidity pool. The ratio of tokens added sets the price of this pool.
                </div>
                <div className="mt-5 space-y-3 md:flex md:space-y-0 md:space-x-4">
                    <Link href="/pool"><button className={style.mobilePool}>Create a Pool</button></Link>
                </div>
            </div>

            <div className={style.liquidity}>
                <div className="text-lg font-medium">Create a Pool</div>
                <div className="relative mt-2.5 w-2/3 text-gray-500 dark:text-gray-400">
                    Create a liquidity pool. The ratio of tokens you add will set the price of this pool.
                </div>
                <div className="relative mt-4 w-[200px] space-y-4">
                    <Link href="/pool"><button className={style.pool}>Create a Pool</button></Link>
                </div>
                <div className={style.poolImage}>
                    <Image src='https://cryptoswap-assets.s3.amazonaws.com/assets/create_pool.png' width={210} height={230}/>
                </div>
            </div>
            <div className={style.zap}>
                <div className="hidden h-[100px] w-full text-center md:block">
                    <Image src="https://zksync-cryptoswap.s3.amazonaws.com/assets/zap.png" width={210} height={135}/>
                </div>
                <div className={style.zapText}>
                    <div>
                        <div className="text-lg font-medium">
                            Zap
                        </div>
                        <div className="mt-2 text-gray-500 dark:text-gray-400">
                            Zap will turn one token into a pair so you can start earning!
                        </div>
                    </div>
                    <div>
                        <Link href="/zap">
                            <button className={style.zapButton}>
                                <span className="text-lg ml-[-5px]">⚡</span>Zap
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner 

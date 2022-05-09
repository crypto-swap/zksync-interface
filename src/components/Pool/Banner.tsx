import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const style = {
    wrapper: `md:mx-auto md:max-w-5xl md:space-y-5 md:p-0 space-y-4 md:grid md:grid-cols-[4fr,3fr] md:gap-5 md:space-y-0 my-5`,
    liquidity: `relative hidden rounded-xl bg-bg-card-light dark:bg-bg-card-dark card px-[30px] pt-[30px] pb-9 dark:card-dark md:block shadow-card dark:shadow-card-dark`,
    pool: `flex select-none items-center justify-center bg-button-blue  leading-none font-normal 
    cursor-pointer text-white h-[50px] text-sm leading-[24px] rounded-xl py-[13px] 
    px-[17px] w-full w-[200px] shadow-blue-button hover:shadow-blue-button-hover`,
    zap: `rounded-xl p-5 bg-bg-card-light dark:bg-bg-card-dark card dark:card-dark shadow-card dark:shadow-card-dark md:px-[30px] md:pb-[30px] md:pt-[10px] md:flex md:flex-col md:justify-end`,
    zapText: `flex flex-col space-y-5 md:flex-row md:items-end md:justify-between md:space-y-0 md:space-x-3`,
    zapButton: `flex select-none text-white items-center justify-center leading-none font-normal 
    cursor-pointer h-[50px] text-sm leading-[24px] rounded-xl py-[13px] px-[17px] w-full 
    md:w-[120px]  bg-button-blue shadow-blue-button hover:shadow-blue-button-hover`,

    mobileLiquidity: `rounded-xl bg-white p-5 shadow-main dark:bg-dark-800 md:hidden md:p-[30px] md:flex md:flex-col md:justify-end`,
}

const Banner = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.liquidity}>
                <div className="text-lg font-medium">Create a Pool</div>
                <div className="relative mt-2.5 w-2/3 text-gray-500 dark:text-dark-500">
                    Create a liquidity pool. The ratio of tokens you add will set the price of this pool.
                </div>
                <div className="relative mt-4 w-[200px] space-y-4">
                    <div className={style.pool}>Create a Pool</div>
                </div>

            </div>
            <div className={style.zap}>
                <div className="hidden h-[100px] w-full text-center md:block">
                    image here
                </div>
                <div className={style.zapText}>
                    <div>
                        <div className="text-lg font-medium">
                            Zap
                        </div>
                        <div className="mt-2 text-gray-500 dark:text-dark-500">
                            Zap will turn one token into a pair so you can start earning!
                        </div>
                    </div>
                    <div>
                        <button className={style.zapButton}>
                            ⚡ Zap
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner 

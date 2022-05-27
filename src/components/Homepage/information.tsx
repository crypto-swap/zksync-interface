import React from 'react'

const Information = () => {
    return (
        <>
            <div className="flex items-center justify-center z-1">
                <h2 className='text-2xl md:text-3xl lg:text-4xl  text-center font-semibold leading-7 rounded-[64px] p-10'>
                    <p className="leading-5">Practical and efficient,</p>
                    <br></br>
                    <p className="leading-5">that's innovation.</p>
                </h2>
            </div>
            <div className="font-sans text-center m-[10%] mt-10 text-base md:leading-9 z-1 md:w-[700px]">
                <p>
                    CryptoSwap wasn't intended to be innovative, it was supposed to be like any other DEX.
                    However, we couldn't quite find a whitepaper that matched what we were looking for.
                    That is, a protocol that gives liquidity providers the proper flexibility and the tools that
                    they need to protect themselves from the risks of providing liquidity. Although the
                    AMMs of today and tomorrow will be quite advanced, they will never be able to match the true
                    effiency of the market. That's why we're building the CryptoSwap protocol.
                </p>
                <br></br>
                <p>
                    First, we gave liquidity providers the ability to take a "position" while providing liquidity,
                    effectively giving them the tools that they need to reduce impermanent loss. We then use these "positions" to get a
                    more accurate grasp of the true market price. More efficient pricing means less arbitrage opportunities,
                    that means the protocol bleeds less money, cutting costs of liquidity providers and increasing their
                    overall profit.
                </p>
            </div>
            <div className="font-sans text-center text-base md:leading-9 z-1 md:w-[700px]">

            </div>
        </>
    )
}

export default Information


import React from 'react'

const Information = () => {
    return (
        <>
            <div className="flex items-center justify-center z-1">
                <h2 className='text-2xl md:text-3xl lg:text-4xl text-white text-center font-semibold leading-7 rounded-[64px] p-10'>
                    <p className="leading-5">Practical and efficient.</p>
                </h2>
            </div>
            <div className="font-sans text-center m-[10%] mt-10 text-white text-lg md:leading-10 z-1 md:w-[700px]">
                <p>
                    CryptoSwap was supposed to be like any other DEX.
                    But in building this, we quickly found out that many of DEXs are running into the same problems.
                    Impermanent loss, inefficient pricing, large spreads, unscability, and MEV are problems that
                    affect liquidity providers and traders alike. Rather than pretending like these fundamental
                    issues do not exist, we decided to just face them head on and come up with solutions.
                </p>
                <br></br>
                <p>
                    We introduced liquidity options, which allow liquidity providers
                    to choose their impermanent loss. This gives the protocol the
                    option to deploy their liquidity in order to make pricing more
                    efficient. Better prices lead to thinner spreads, which benefit
                    both liquidity providers and traders.
                </p>
                <br></br>
                <p>
                    Miner Extractable Value (MEV) is the single greatest threat to
                    DEXs. It undermines the entire mission of DeFi:
                    to create a trustless and permissionless financial system while
                    minimizing middleman fees.
                </p>
                <br></br>
                <p>
                    Until the day that CryptoSwap solves all of these issues, we will
                    not consider our mission a success, regardless of the accomplishments.
                </p>
            </div>
            <div className="font-sans text-center text-base md:leading-9 z-1 md:w-[700px]">

            </div>
        </>
    )
}

export default Information


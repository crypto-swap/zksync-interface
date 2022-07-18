import React from 'react'
import Image from 'next/image'

const style = {
    wrapper : `pb-12`,
    header : `pb-2 flex place-content-between items-center px-0.5`,
    outputBox: `flex flex-col h-full w-full rounded-lg bg-transparent p-4 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]`,
    asset1: `grid grid-cols-2 text-lg`,
    asset2: `grid grid-cols-2 text-lg pt-2`,
    gridcol1: `flex flex-row gap-x-3`,
    gridcol2: `text-right`,
}

const RemoveOutput = () => {
    
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 ">You'll receive</div>
            </div>
            <div className={style.outputBox}>
                <div className={style.asset1}>
                    <div className={style.gridcol1}>
                        <Image src="https://cryptoswap-assets.s3.amazonaws.com/network_icons/zksync_logo.svg" width={20} height={20} />
                        <div>0.0</div>
                    </div>
                    <div className={style.gridcol2}>Asset 1</div>
                </div>
                <div className={style.asset2}>
                    <div className={style.gridcol1}>
                        <Image src="https://cryptoswap-assets.s3.amazonaws.com/network_icons/starknet_logo.png" width={20} height={20} />
                        <div>0.0</div>
                    </div>
                    <div className={style.gridcol2}>Asset 2</div>
                </div>
            </div>
        </div>
    )
}

export default RemoveOutput 

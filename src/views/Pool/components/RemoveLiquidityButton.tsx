import React, { useState } from 'react'; 


const RemoveLiquidityButton = () => {
    return (
        <button
            className="flex select-none items-center justify-center bg-button-blue  leading-none font-normal 
            cursor-pointer text-white h-[55px] text-lg leading-[24px] rounded-xl w-full shadow-blue-button hover:shadow-blue-button-hover"
        >
            <span className="font-semibold">Remove Liquidity</span>
        </button>
    )
}

export default RemoveLiquidityButton

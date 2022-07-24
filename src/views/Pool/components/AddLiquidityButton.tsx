import React, { useState } from 'react'; 


const AddLiquidityButton = () => {
    return (
        <button
            className="flex select-none items-center justify-center bg-button-blue  leading-none font-normal 
            cursor-pointer text-white h-[55px] text-lg leading-[24px] rounded-xl w-full shadow-blue-button hover:shadow-blue-button-hover"
        >
            <span className="font-semibold">Add Liquidity</span>
            
        </button>
    )
}

export default AddLiquidityButton

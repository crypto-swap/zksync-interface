import React from 'react'

const style = {
    wrapper : `pb-2`,
    header : `pb-2 flex place-content-between items-center px-0.5`,
    inputContainer: `relative flex flex-row-reverse place-content-between text-lg h-[60px] rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]`,
    inputBox: `absolute inset-0 h-full w-full rounded-lg outline-0 bg-transparent p-4`,
}

const RemoveInput = () => {
    
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 ">Percent to remove</div>
            </div>
            <div className={style.inputContainer}>
                <input 
                    inputMode="decimal"
                    placeholder="0.0%"
                    className={style.inputBox} 
                />
            </div>
        </div>
    )
}

export default RemoveInput 

import React from 'react'

const style = {
    wrapper : `pb-12`,
    header : `pb-2 flex place-content-between items-center px-0.5`,
    outputBox: `flex flex-col h-full w-full rounded-lg bg-transparent p-4 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]`,
    asset1: `grid grid-cols-2 text-lg`,
    asset2: `grid grid-cols-2 text-lg pt-2`,
    gridcol1: ``,
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
                    <div className={style.gridcol1}>0.0</div>
                    <div className={style.gridcol2}>Asset 1</div>
                </div>
                <div className={style.asset2}>
                    <div className={style.gridcol1}>0.0</div>
                    <div className={style.gridcol2}>Asset 2</div>
                </div>
            </div>
        </div>
    )
}

export default RemoveOutput 

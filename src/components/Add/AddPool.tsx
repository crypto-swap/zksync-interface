import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeftIcon } from '@heroicons/react/solid'

const style = {
    wrapper: `flex flex-col w-full max-w-5xl mr-auto ml-auto items-center flex-1 basis-0 overflow-hidden overflow-auto justify-center p-2`,
    returnBar: `flex justify-between items-center p-2 w-full bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark rounded-2xl mx-2 mt-6 mb-4`,
    poolContainer: `auto-rows-auto max-w-5xl w-full flex flex-col md:flex-row justify-start md:justify-between`,

}

const AddPool = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.returnBar}>
                <div className="flex flex-column items-center">
                    <button>
                        <Link href="/pool">
                            <ChevronLeftIcon className="w-14 h-14" />
                        </Link>
                    </button>
                    <text className="text-2xl">
                        Manage Pool
                    </text>
                </div>
            </div>
            <div className={style.poolContainer}>
                <div className="flex flex-1 flex-row md:mr-4 justify-start rounded-2xl bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark">
                    <div className="flex flex-right flex-row justify-start p-8 mr-4">
                        test
                    </div>

                </div>
                <div className="w-full md:w-96 rounded-2xl shrink-0 p-[20px] bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark">
                    test 2
                </div>
            </div>
        </div>
    )
}

export default AddPool

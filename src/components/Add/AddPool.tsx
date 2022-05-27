import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeftIcon } from '@heroicons/react/solid'

const style = {
    wrapper: `flex flex-column w-full max-w-5xl mr-auto ml-auto items-center flex-1 overflow-hidden overflow-auto justify-center`,
    returnBar: `flex justify-between items-center p-2 w-full bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark rounded-2xl mx-2 my-6`,

}

const AddPool = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.returnBar}>
                <div className="flex flex-column items-center">
                    <button>
                        <Link href="/pool">
                            <ChevronLeftIcon className="w-16 h-16" />
                        </Link>
                    </button>
                    <text className="text-2xl">
                        Manage Pool
                    </text>
                </div>
            </div>
        </div>
    )
}

export default AddPool

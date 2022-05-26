import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const style = {
    wrapper: ``,
    returnBar: ``
}

const CreatePool = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.returnBar}>
                <button>
                    button here
                </button>
                <text>
                    Manage Pool
                </text>
                <Image src="/assets/pool.svg" width={100} height={100} />
            </div>
        </div>
    )
}

export default CreatePool

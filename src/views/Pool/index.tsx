import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, AdjustmentsIcon } from '@heroicons/react/solid';
import RemoveInterface from './components/RemoveInterface';
import AddInterface from './components/AddInterface';

const style = {
  wrapper: `flex flex-col w-full max-w-5xl mr-auto ml-auto items-center flex-1 basis-0 overflow-hidden overflow-auto justify-center p-2 px-4`,
  returnBar: `flex justify-between items-center p-2 w-full bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark rounded-2xl mx-2 mt-6 mb-6`,
  poolContainer: `auto-rows-auto max-w-5xl w-full flex flex-col md:flex-row justify-start md:justify-between`,
  poolInfo: `flex flex-1 flex-row md:mr-4 p-6 justify-start rounded-2xl bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark`,
  poolMenu: `w-full md:w-96 mt-4 md:mt-0 rounded-2xl shrink-0 p-[20px] bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark`,
  infoItem: `flex flex-col`,
  infoItemTitle: `text-sm font-bold text-gray-500 dark:text-gray-400 `,
  infoItemData: `text-2xl font-medium py-2 md:py-4 `,
  addOption: `flex flex-row flex-nowrap items-center justify-center cursor-pointer outline-none text-none text-base mr-[15px]`,
  removeOption: `flex flex-row flex-nowrap items-center justify-center cursor-pointer outline-none text-none text-base`,
}



const PoolView = () => {

  const router = useRouter(); 

  const [option, setOption] = useState('add');

  return (


    <div className={style.wrapper}>
      <div className={style.returnBar}>
        <div className="flex flex-column items-center">
          <button>
            <Link href="/pools">
              <ChevronLeftIcon className="w-14 h-14" />
            </Link>
          </button>
          <h1 className="text-2xl">
            Manage Pools
          </h1>
        </div>
      </div>
      <div className={style.poolContainer}>
        <div className={style.poolInfo}>
          <div className="flex flex-col justify-start w-full h-full">
            <div className="">
              Overview
            </div>
            <div className="grid grid-cols-2 justify-between content-start w-full h-full md:gap-y-10 lg:gap-y-20 pt-4 md:pt-8 lg:pt-12  ">
              <div className={style.infoItem}>
                <span className={style.infoItemTitle}>Liquidity</span>
                <span className={style.infoItemData}>$0</span>
              </div >
              <div className={style.infoItem}>
                <span className={style.infoItemTitle}>APR</span>
                <span className={style.infoItemData}>0%</span>
              </div>
              <div className={style.infoItem}>
                <span className={style.infoItemTitle}>Your Pool Share</span>
                <span className={style.infoItemData}>0%</span>
              </div>
              <div className={style.infoItem}>
                <span className={style.infoItemTitle}>Your Pool Tokens</span>
                <span className={style.infoItemData}>0</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.poolMenu}>
          <div className="box-border w-full flex wrap items-center min-w-0">
            <div className="border-box w-full flex items-center justify-between">
              <div className="flex flex-nowrap flex-row justify-start items-center">
                <Link href={`${(typeof window === "undefined") ? router.asPath : window.location.pathname}`} id="pool-add-link">
                  <a className={style.addOption + ((option === 'add') ? "": " text-gray-500 dark:text-gray-400")} onClick={ () => {setOption('add')} }>Add</a>
                </Link>

                <Link href={`${(typeof window === "undefined") ? router.asPath : window.location.pathname}`} id="pool-remove-link" >
                  <a className={style.removeOption + ((option === 'remove') ? "": " text-gray-500 dark:text-gray-400")} onClick={ () => {setOption('remove')} }>Remove</a>
                </Link>
              </div>
              <div className="ml-2 flex relative border-none text-left justify-center items-center">
                <button><div className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px]">
                  <AdjustmentsIcon className="w-6 h-6" />
                </div></button>
              </div>
            </div>
          </div>
          <div className="mt-8">
            { ( option === 'add' ) ? <AddInterface/> : <RemoveInterface/> }
          </div>
        </div>
      </div>
    </div>
  )
}

export default PoolView

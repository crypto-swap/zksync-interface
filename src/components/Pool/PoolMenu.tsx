import PoolBar from './PoolBar';
import pools from './mockPools.json';
import Pagination from './Pagination';
import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';
import SelectFilter from '../../features/pool/SelectFilter'

const style = {
    poolMenuContainer: `md:mx-auto md:max-w-5xl`,
    searchBarContainer: `flex flex-column select-none basis-10/12 text-center items-center justify-start gap-4 w-full sm:w-auto `,
    searchBar: `bg-bg-card-light dark:bg-bg-card-dark p-2 border border-solid border-white 
                shadow-card dark:shadow-card-dark dark:border-[#272b45] rounded-2xl w-full`,
    searchBarOuter: `flex w-full px-2 py-3 rounded-lg shadow-search-border dark:shadow-search-border-dark`,
    searchBarInner: `flex flex-1 items-center relative `,
    searchBarInput: `bg-transparent border-0 outline-0 w-full`,
    selectFilterContainer: `flex basis-2/12 gap-2 items-center`,
}



export interface PoolMenuProps { }

const PoolMenu = () => {
    //temp images
    var imgs = {
        'SEK': '/icons/discord.svg'
    }

    // ========================
    // Variables for Pagination
    // ========================
    // Number of Bars
    var numBars: number = pools.length;

    // Number of Bars per Page
    const [numBarInPage, setNumBarInPage] = useState(10);

    // Current Page
    const [currPage, setCurrPage] = useState(1);

    // Range of Bars to load
    var lowerBound: number = (currPage - 1) * numBarInPage;
    var upperBound: number = (currPage) * numBarInPage;
    var pagePools = pools.slice(lowerBound, upperBound);


    // function to Next Page
    function addOneBarPerPage() {
        if (numBarInPage > 1 && numBarInPage < numBars) {
            setNumBarInPage(numBarInPage + 1);
        }
    }
    function minusOneBarPerPage() {
        if (numBarInPage > 1 && numBarInPage < numBars) {
            setNumBarInPage(numBarInPage - 1);
        }
    }

    // search pool bar

    const [value, setValue] = useState("");


    return (
        <div className={style.poolMenuContainer}>
            <div className="flex flex-col w-full gap-6">
                <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
                    <div className={style.searchBarContainer}>
                        <div className={style.searchBar}>
                            <div className={style.searchBarOuter}>
                                <div className={style.searchBarInner}>
                                    <div className='mx-3'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                        </svg>
                                    </div>
                                    <input className={style.searchBarInput}
                                        placeholder="Search by token or pair"
                                        value={value}
                                        onChange={(ev) => setValue(ev.target.value)} >
                                    </input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.selectFilterContainer}>
                        <SelectFilter />
                    </div>
                </div>
            </div>


            <div>
                {
                    pagePools.map((pool) => (

                        <PoolBar key={pool.asset1 + pool.asset2} image1='/icons/discord.svg' image2='/icons/discord.svg' ticker1={pool['asset1']} ticker2={pool['asset2']} liquidity={pool['liquidity']} volume={pool['volume']} fees={(pool['volume'] * 0.025).toFixed(2)} apr={(pool['volume'] * 0.025 / pool['liquidity'] * 365).toFixed(5)} />
                    ))
                }
                <div className='flex relative shrink mx-auto mt-10 justify-items-center justify-center items-center select-none'>
                    <Pagination
                        currentPage={currPage}
                        totalCount={numBars}
                        pageSize={numBarInPage}
                        onPageChange={(page: any) => setCurrPage(page)}
                    />
                </div>
                {/* This two buttons are for developers
                Can be removed
                
                <div className='h-12 mx-8 md:mx-20 lg:mx-40 xl:mx-60 mt-4 overflow-hidden rounded-lg shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark grid grid-cols-6' onClick={addOneBarPerPage}>Add one bar per page Current: {numBarInPage} bars per page</div>
                <div className='h-12 mx-8 md:mx-20 lg:mx-40 xl:mx-60 mt-4 overflow-hidden rounded-lg shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark grid grid-cols-6' onClick={minusOneBarPerPage}>Minus one bar per page Current: {numBarInPage} bars per page</div>
                */}
            </div>
        </div>
    )
}

export default PoolMenu

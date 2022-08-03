import PoolBar from './PoolBar';
import pools from './mockPools.json';
import Pagination from './Pagination';
import React, { useState, useCallback, useMemo } from 'react';
import SelectFilter from './SelectFilter'

const style = {
    poolMenuContainer: `md:mx-auto md:max-w-5xl`,
    searchBarContainer: `flex flex-column select-none basis-10/12 text-center items-center justify-start gap-4 w-full sm:w-auto `,
    searchBar: `bg-bg-card-light dark:bg-bg-card-dark p-2 border border-solid border-white 
                shadow-card dark:shadow-card-dark dark:border-[#272b45] rounded-2xl w-full`,
    searchBarOuter: `flex w-full px-2 py-3 rounded-lg shadow-search-border dark:shadow-search-border-dark`,
    searchBarInner: `flex flex-1 items-center relative `,
    searchBarInput: `bg-transparent border-0 outline-0 w-full`,
    selectFilterContainer: `flex basis-2/12 gap-2 items-center`,
    poolSortBar: `font-[Montserrat] text-[0.5rem] select-none md:p-0 md:text-sm h-8 md:max-width mt-4 overflow-hidden rounded-lg shadow-card 
    bg-bg-card-light dark:bg-bg-card-dark dark:shadow-card-dark flex items-center grid grid-cols-6 `,
}

const PoolMenu = () => {
    // search pool bar
    const [value, setValue] = useState("");
    const filteredPools = pools.filter((pool) => ((pool.asset1 + "-" + pool.asset2).includes(value) || (pool.asset2 + "-" + pool.asset1).includes(value)))

    // ========================
    // Variables for Pagination
    // ========================
    // Number of Bars
    const numBars = filteredPools.length;

    // Number of Bars per Page
    const numBarInPage = 9;

    // Current Page
    const [currPage, setCurrPage] = useState(1);

    // Range of Bars to load
    const lowerBound = (currPage - 1) * numBarInPage;
    const upperBound = (currPage) * numBarInPage;
    const pagePools = filteredPools.slice(lowerBound, upperBound);

    const { items: sortedPools, requestSort } = useSortableData(pagePools, {
        key: 'asset1',
        direction: SortDirection.DESCENDING
    })

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
                                        onChange={(ev) => setValue(ev.target.value.toUpperCase())} >
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
                <div className={style.poolSortBar}>

                    <div className="col-span-2 grid grid-cols-3 text-left gap-x-0.5 pl-2">
                        <button className="flex justify-center gap-x-0.5 lg:gap-x-2 text-gray-500 dark:text-gray-300" onClick={() => { requestSort('asset1') }}>
                            Name
                        </button>
                    </div>

                    <div className="flex flex-col justify-center">
                        <button className="text-right text-gray-500 dark:text-gray-300" onClick={() => { requestSort('liquidity') }}>
                            Liquidity
                        </button>
                    </div>

                    <div className="flex flex-col justify-center">
                        <button className="text-right text-gray-500 dark:text-gray-300" onClick={() => { requestSort('volume') }}>
                            Volume (24H)
                        </button>
                    </div>

                    <div className="flex flex-col justify-center ">
                        <button className="text-right text-gray-500 dark:text-gray-300" onClick={() => { requestSort('volume') }}>
                            Fees (24H)
                        </button>
                    </div>


                    <div className="flex flex-col justify-center pr-2 md:pr-6 lg:pr-10 xl:pr-14">
                        {/* TODO: add sort by APR, currently sorting by volume when sorting by APR */}
                        <button className=" text-right text-gray-500 dark:text-gray-300" onClick={() => { requestSort('volume') }}>
                            APR
                        </button>
                    </div>

                </div>
                {
                    sortedPools.map((pool, index) => (
                        <PoolBar key={index.toString()} image1='/icons/discord.svg' image2='/icons/discord.svg' ticker1={pool['asset1']} ticker2={pool['asset2']}
                            liquidity={pool['liquidity']} volume={pool['volume']} fees={(pool['volume'] * 0.025).toFixed(0)} apr={(pool['volume'] * 0.025 / pool['liquidity'] * 365).toFixed(4)} />
                    ))
                }
                <div className='flex relative shrink mx-auto mt-7 justify-items-center justify-center items-center select-none'>
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
        </div >
    )
}

enum SortDirection {
    ASCENDING = -1,
    DESCENDING = 1,
}

interface SortConfig {
    key: string;
    direction: SortDirection;
}

const useSortableData = (items, config: SortConfig | null = null) => {
    const [sortConfig, setSortConfig] = useState(config);
    const sortedItems = useMemo(() => {
        let sortableItems = [...items];
        if (sortConfig !== null) {
            sortableItems = sortableItems.sort((a, b) => {
                let result;
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    result = -1;
                } else if (a[sortConfig.key] > b[sortConfig.key]) {
                    result = 1;
                } else {
                    result = 0;
                }
                return result * sortConfig.direction;
            });
        }
        return sortableItems;
    }, [items, sortConfig]);
    const requestSort = useCallback((key: string) => {
        let direction = SortDirection.DESCENDING;
        if (sortConfig && sortConfig.key === key && sortConfig.direction === SortDirection.DESCENDING) {
            direction = SortDirection.ASCENDING;
        }
        setSortConfig({ key, direction });
    }, [sortConfig]);
    return { items: sortedItems, requestSort, sortConfig };

}

export default PoolMenu

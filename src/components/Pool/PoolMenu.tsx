import PoolBar from './PoolBar';
import pools from './mockPools.json';
import Pagination from './Pagination';
import React, { useState, useEffect, useLayoutEffect, useContext } from 'react';


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



    return (
        <div>
            {
                pagePools.map((pool) => (

                    <PoolBar image1='/icons/discord.svg' image2='/icons/discord.svg' ticker1={pool['asset1']} ticker2={pool['asset2']} liquidity={pool['liquidity']} volume={pool['volume']} fees={(pool['volume'] * 0.025).toFixed(2)} apr={(pool['volume'] * 0.025 / pool['liquidity'] * 365).toFixed(5)} />
                ))
            }
            <div className='mx-8 md:mx-20 lg:mx-40 xl:mx-60 mt-10 grid justify-items-center'>
                <Pagination
                    currentPage={currPage}
                    totalCount={numBars}
                    pageSize={numBarInPage}
                    onPageChange={(page: any) => setCurrPage(page)}
                />
            </div>
            {/* This two buttons are for developers
            Can be removed */}
            <div className='h-12 mx-8 md:mx-20 lg:mx-40 xl:mx-60 mt-4 overflow-hidden rounded-lg shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark grid grid-cols-6' onClick={addOneBarPerPage}>Add one bar per page Current: {numBarInPage} bars per page</div>
            <div className='h-12 mx-8 md:mx-20 lg:mx-40 xl:mx-60 mt-4 overflow-hidden rounded-lg shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark grid grid-cols-6' onClick={minusOneBarPerPage}>Minus one bar per page Current: {numBarInPage} bars per page</div>
        </div>
    )
}

export default PoolMenu

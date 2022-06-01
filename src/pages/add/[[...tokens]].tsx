import Head from 'next/head';;
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React, { useState, useCallback, useContext, useEffect, } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, AdjustmentsIcon, PlusIcon } from '@heroicons/react/solid';
import PoolInput from '../../components/Add/PoolInput';
import { hooks } from '../../connectors/metaMask';
import AddPoolButton from '../../components/Add/AddPoolButton';
import { useParams } from 'react-router-dom';

//[[...tokens]] catches all routes /add , /add/TokenA, /add/TokenA/TokenB yeet
const { useIsActive } = hooks;


const style = {
    wrapper: `flex flex-col w-full max-w-5xl mr-auto ml-auto items-center flex-1 basis-0 overflow-hidden overflow-auto justify-center p-2`,
    returnBar: `flex justify-between items-center p-2 w-full bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark rounded-2xl mx-2 mt-6 mb-4`,
    poolContainer: `auto-rows-auto max-w-5xl w-full flex flex-col md:flex-row justify-start md:justify-between`,
    poolInfo: `flex flex-1 flex-row md:mr-4 justify-start rounded-2xl bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark`,
    addPoolMenu: `w-full md:w-96 mt-4 md:mt-0 rounded-2xl shrink-0 p-[20px] bg-bg-card-light dark:bg-bg-card-dark shadow-card dark:shadow-card-dark`,

}


export type Token = string;

export const tokens: Token[] = [
    'eth',
    'bat',
    'wbtc',
    'dai',
    'usdc',
    'usdt',
    'zrx',
    'link',
    'mkr',
    'rep',
    'knc',
    'gnt',
    'snt',
    'bnt',
    'dnt',
    'eng',
    'salt',
    'fun',
    'mana',
];

const emptyPoolInformation = new Map([
    ['Rate', 0],
    ['Token B Amount', 0],
    ['Share of pool', 0],
]);

function getRate(token: Token) {
    switch (token) {
        case 'eth':
            return 1;
        case 'bat':
            return 5;
        default:
            return 10;
    }
}

function convert(
    amount: number,
    token_a: Token,
    token_b: Token,
    reverse: boolean = false
) {
    let rate = getRate(token_b) / getRate(token_a);
    if (reverse) {
        rate = 1 / rate;
    }
    const output = amount * rate;
    let tokenB = output;
    if (reverse) {
        [tokenB, amount] = [amount, output];
    }

    // create a function to get pool share

    return new Map([
        ['Rate', rate],
        ['Token B Amount', amount],
        ['Share of pool', amount * 2]
    ]);
}


const Add: React.FC = (): JSX.Element => {

    const router = useRouter()
    const add = router.query.add || []

    const params = useParams(); // views the parameters from routing i.e add/ETH/BTC <--

    // check for existing tokenID from URL
    // assign it to the tokens array 

    const [tokenA, setTokenA] = useState(tokens[0]);
    const [tokenB, setTokenB] = useState(tokens[1]);
    const [tokenA_Amount, setTokenA_Amount] = useState('');
    const [tokenB_Amount, setTokenB_Amount] = useState('');
    const [poolInformation, setPoolInformation] = useState<Map<string, number>>(emptyPoolInformation)

    function handleChange(reverse: boolean, amount: number = parseFloat(tokenA_Amount), token_a: Token = tokenA, token_b: Token = tokenB) {
        const poolInformation = convert(amount, token_a, token_b, reverse);
        setPoolInformation(poolInformation);
        return poolInformation.get('Token B Amount')! //non-null (!)
    }

    const walletConnected = useIsActive();

    return (
        <div className="bg-bg-light dark:bg-bg-dark">
            <Head>
                <title>CryptoSwap</title>
                <meta name="description" content="CryptoSwap is a very efficient simple DEX on zkSync (Swap, Pool, Liquidity Options, and Generate). No presale, fully decentralized, and community-driven." />
                <meta key="twitter:description" name="twitter:description" content="CryptoSwap" />
                <link rel="icon" href="/icons/black_logo.svg" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="canonical" href="https://cryptoswap.org" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Navbar />

            <div className="mb-10">
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
                        <div className={style.poolInfo}>
                            <div className="flex flex-right flex-row justify-start p-8 mr-4">
                                test
                            </div>

                        </div>
                        <div className={style.addPoolMenu}>
                            <div className="box-border w-full flex flex wrap items-center min-w-0">
                                <div className="border-box w-full flex items-center justify-between">
                                    <div className="flex flex-nowrap flex-row justify-start items-center">
                                        <a href="#" id="pool-add-link" className="flex flex-row flex-nowrap items-center justify-center 
                                        cursor-pointer outline-none text-none text-base mr-[15px]" aria-current="page">Add</a>
                                        <a href="#" className="flex flex-row flex-nowrap items-center justify-center 
                                        cursor-pointer outline-none text-none text-base mr-[15px]" aria-current="page">Remove</a>
                                    </div>
                                    <div className="ml-2 flex relative border-none text-left justify-center items-center">
                                        <button><div className="flex justify-center items-center rounded-[50%] h-[40px] w-[40px]">
                                            <AdjustmentsIcon className="w-6 h-6" />
                                        </div></button>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div className="grid auto-rows-auto gap-y-[20px] mt-[0.2rem]">
                                    <div id="add-liquidity-input-token-a" className="">
                                        <PoolInput {...{
                                            value: tokenA_Amount,
                                            token: tokenA,
                                            setToken: setTokenA,
                                            setTokenA_Amount: setTokenA_Amount,
                                            setTokenB_Amount: setTokenB_Amount,
                                        }}
                                            onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col justify-start items-center w-full"><PlusIcon className="w-5 h-5" /></div>
                                    <div id="add-liquidity-input-token-b" className="">
                                        <PoolInput {...{
                                            value: tokenB_Amount,
                                            token: tokenB, setToken: setTokenB,
                                            setTokenA_Amount: setTokenA_Amount,
                                            setTokenB_Amount: setTokenB_Amount,
                                        }}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="mt-20">
                                    <AddPoolButton />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Add //export single class/module create 

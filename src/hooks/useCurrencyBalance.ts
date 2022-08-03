import { useMemo, useRef } from 'react';
import { useProvider, useAccount } from '.';
import { Token } from '../components/Modals/CurrencySearchModal';
import { useAllTokens } from '.';
import TOKEN_LIST from '../config/constants/testnet.tokenlist.json'

const {ethers, utils, BigNumber} = require('ethers');

const tokenSymbols = useAllTokens
const tokens = TOKEN_LIST.tokens

const ERC20ABI = require("../config/abi/erc20.json");
const zksync = require('zksync-web3');

export async function useCurrencyBalance(account: string, tokenAddress: string, provider: any) {

    const tokenContract = new zksync.Contract(tokenAddress, ERC20ABI, provider);

    if (tokenAddress === "0x000000000000000000000000000000000000800a") {
        let balance = await tokenContract.balanceOf(account) / 1e18
        return balance
    }

    const decimals = await tokenContract.decimals();
    console.log(decimals)


    let balance = format(await tokenContract.balanceOf(account), decimals)

    return balance
}

function format(number, decimals) {
    return ethers.utils.formatUnits(number, decimals);
}

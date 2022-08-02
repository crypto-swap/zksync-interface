import { useMemo } from 'react';
import { useProvider, useAccount } from '.';
import { Token } from '../components/Modals/CurrencySearchModal';
import { useAllTokens } from '.';
import TOKEN_LIST from '../config/constants/testnet.tokenlist.json'

const {utils, BigNumber} = require('ethers');

const tokenSymbols = useAllTokens
const tokens = TOKEN_LIST.tokens

const ERC20ABI = require("../config/abi/erc20.json");
const zksync = require('zksync-web3');

export async function useCurrencyBalance(account?: string, tokenAddress?: string) {

    const provider = useProvider();
    const tokenContract = useMemo( () => new zksync.Contract(tokenAddress, ERC20ABI, provider), [tokenAddress, ERC20ABI, provider]);


    return await tokenContract.balanceOf(account) / 1e18;
}

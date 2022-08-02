import { useMemo, useRef } from 'react';
import { useProvider, useAccount } from '.';
import { Token } from '../components/Modals/CurrencySearchModal';
import { useAllTokens } from '.';
import TOKEN_LIST from '../config/constants/testnet.tokenlist.json'

const {utils, BigNumber} = require('ethers');

const tokenSymbols = useAllTokens
const tokens = TOKEN_LIST.tokens

const ERC20ABI = require("../config/abi/erc20.json");
const zksync = require('zksync-web3');

export async function useCurrencyBalance(account: string, tokenAddress: string, provider: any) {

    const tokenContract = new zksync.Contract(tokenAddress, ERC20ABI, provider);

    let balance = await tokenContract.balanceOf(account) / 1e18

    return balance
}

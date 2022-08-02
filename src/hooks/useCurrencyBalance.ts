import { useMemo } from 'react';
import { useProvider, useAccount } from '.';
import { Token } from '../components/Modals/CurrencySearchModal';
import { useAllTokens } from '.';
import TOKEN_LIST from '../config/constants/testnet.tokenlist.json'

const tokenSymbols = useAllTokens
const tokens = TOKEN_LIST.tokens

const ERC20ABI = require("../config/abi/erc20.json");
const zksync = require('zksync-web3');

const provider = useProvider();
const account = useAccount();
const signer = provider?.getSigner();

function useCurrencyBalance(account?: string, token?: string) {
    
    const tokenAddress = tokens[tokenSymbols.indexOf(token!)].address;
    const tokenContract = new zksync.Contract(tokenAddress, ERC20ABI, signer);
    console.log(tokenContract.balanceOf(account))

}

export default useCurrencyBalance

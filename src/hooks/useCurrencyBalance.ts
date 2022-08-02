import { useMemo } from 'react';
import { useProvider, useAccount } from '.';
import { Token } from '../components/Modals/CurrencySearchModal';
import { useAllTokens } from '.';
import TOKEN_LIST from '../config/constants/testnet.tokenlist.json'

const tokenSymbols = useAllTokens

const tokens = TOKEN_LIST.tokens

const ERC20Interface = require("../config/abi/erc20.json");

const provider = useProvider();
const account = useAccount();
const signer = provider?.getSigner();

function useCurrencyBalance(account?: string, token?: Token) {

}

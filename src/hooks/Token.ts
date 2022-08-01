import { useAccount } from '.';
import TOKEN_LIST from '../config/constants/testnet.tokenlist.json';

export const useAllTokens = TOKEN_LIST.tokens.map(x => x.symbol)


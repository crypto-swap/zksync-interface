import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { Token, ChainId } from '@crypto-swap/sdk'
import { parseUnits } from '@ethersproject/units'
import { TokenInfo, TokenList, Tags } from '@uniswap/token-lists'

export type TokenAddressMap = Readonly<{
    [chainId in ChainId]: Readonly<{ [tokenAddress: string]: { list: TokenList } }>
}>


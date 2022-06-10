import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { Token, ChainId } from '@crypto-swap/sdk'
import { parseUnits } from '@ethersproject/units'


export type TokenAddressMap = Readonly<{
    [chainId in ChainId]: Readonly<{ [tokenAddress: string]: { list: "zkSync alpha testnet" } }>
}>

// instead of zkSync alphatestnet we would want uniswap tokenlist

import BigNumber from 'bignumber.js'
import { Token } from '@crypto-swap/sdk'

export interface Address {
    280?: string //zksync testnet address
}

export interface SerializedToken {
    chainId: number
    address: string
    decimals: number
    symbol?: string
    name?: string
    projectLink?: string
    logoURI?: string
}

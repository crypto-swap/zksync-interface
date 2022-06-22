import { Currency, Token } from '@crypto-swap/sdk'

const zkSyncAlpha = 280; // chainId for zkSync alpha 

type ChainTokenList = {
    readonly [chainId: number]: Token[]
}

type ChainCurrencyList = {
    readonly [chainId: number]: Currency[]
}

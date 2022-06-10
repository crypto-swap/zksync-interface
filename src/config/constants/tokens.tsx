import { ChainId, Token } from '@crypto-swap/sdk'
import { useWeb3React } from '@web3-react/core'
import { serializeToken } from '../../state/user/hooks/helpers'
import { SerializedToken } from './types'

const { TESTNET } = ChainId

interface TokenList {
    [symbol: string]: Token
}

export const defineTokens = <T extends TokenList>(t: T) => t

export const testnetTokens = defineTokens({
    eth: new Token(
        TESTNET,
        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
        18,
        'ETH',
        'Ethereum',
        "/network_icons/eth_logo.png",
    ),
    usdc: new Token(
        TESTNET,
        "0xd35CCeEAD182dcee0F148EbaC9447DA2c4D449c4",
        18,
        'USDC',
        'USD Coin',
        "https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png?1547042389",
    ),
} as const)


const tokens = () => {
    const { chainId } = useWeb3React()

    // If testnet - return list comprised of testnetTokens wherever they exist, and mainnetTokens where they don't
    // @ts-ignore needs type fixing
    if (parseInt(chainId, 10) === ChainId.TESTNET) {
        return Object.keys(testnetTokens).reduce((accum, key) => {
            return { ...accum, [key]: testnetTokens[key] || testnetTokens[key] }
        }, {} as typeof testnetTokens & typeof testnetTokens)
    }

    return testnetTokens
}

const unserializedTokens = tokens()

type SerializedTokenList = Record<keyof typeof unserializedTokens, SerializedToken>

export const serializeTokens = () => {
    const serializedTokens = Object.keys(unserializedTokens).reduce((accum, key) => {
        return { ...accum, [key]: serializeToken(unserializedTokens[key]) }
    }, {} as SerializedTokenList)

    return serializedTokens
}

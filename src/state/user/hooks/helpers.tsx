import { Token } from '@crypto-swap/sdk'
import { SerializedToken } from '../../../config/constants/types'

export function serializeToken(token: Token): SerializedToken {
    return {
        chainId: token.chainId,
        address: token.address,
        decimals: token.decimals,
        symbol: token.symbol,
        name: token.name,
        projectLink: token.projectLink,
    }
}

export function deserializeToken(serializedToken: SerializedToken): Token {
    return new Token(
        serializedToken.chainId,
        serializedToken.address,
        serializedToken.decimals,
        serializedToken.symbol,
        serializedToken.name,
        serializedToken.projectLink,
    )
}

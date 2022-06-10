import { ChainId } from '@crypto-swap/sdk'
import addresses from '../config/constants/contracts'
import { Address } from '../config/constants/types'

export const getAddress = (address: Address): string => {
    const chainId = process.env.NEXT_PUBLIC_CHAIN_ID
    // @ts-ignore needs type fixing 
    return address[chainId] ? address[chainId] : address[ChainId.TESTNET]
}

export const getMulticallAddress = () => {
    return getAddress(addresses.multiCall)
}

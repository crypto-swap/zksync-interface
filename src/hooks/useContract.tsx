import { useMemo } from 'react';
import useActiveWeb3React from '../hooks/useActiveWeb3React';
import { Contract } from '@ethersproject/contracts'
import { WETH } from '@crypto-swap/sdk'
import ICryptoPairABI from '../config/abi/ICryptoPair.json'
import { ERC20_BYTES32_ABI } from '../config/abi/erc20'
import ERC20_ABI from '../config/abi/erc20.json'
import WETH_ABI from '../config/abi/weth.json'
import multiCallAbi from '../config/abi/Multicall.json'
import { getContract, getProviderOrSigner } from '../utils'


// returns null on errors
export function useContract<T extends Contract = Contract>(
    addressOrAddressMap: string | { [chainId: number]: string } | undefined,
    ABI: any,
    withSignerIfPossible = true
): T | null {
    const { library, account, chainId } = useActiveWeb3React()

    return useMemo(() => {
        if (!addressOrAddressMap || !ABI || !library || !chainId) return null
        let address: string | undefined
        if (typeof addressOrAddressMap === 'string') address = addressOrAddressMap
        else address = addressOrAddressMap[chainId]
        if (!address) return null
        try {
            return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
        } catch (error) {
            console.error('Failed to get contract', error)
            return null
        }
    }, [addressOrAddressMap, ABI, library, chainId, withSignerIfPossible, account]) as T
}

export function useTokenContract(tokenAddress?: string, withSignerIfPossible?: boolean): Contract | null {
    return useContract(tokenAddress, ERC20_ABI, withSignerIfPossible)
}

export function useMulticall2Contract() {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId ? MULTICALL2_ADDRESS[chainId] : undefined, MULTICALL2_ABI, false)
}

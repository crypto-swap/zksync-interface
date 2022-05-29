/* eslint-disable react-hooks/rules-of-hooks */
import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'

import { NetworkContextName } from '../constants/misc'

const useActiveWeb3React = () => {
    const interfaceContext = useWeb3React<Web3Provider>()
    const interfaceNetworkContext = useWeb3React<Web3Provider>()

    if (interfaceContext.isActive) {
        return interfaceContext
    }

    return interfaceNetworkContext
}

export default useActiveWeb3React

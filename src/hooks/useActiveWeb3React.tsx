import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'


const useActiveWeb3React = () => {
    const interfaceContext = useWeb3React<Web3Provider>()
    const interfaceNetworkContext = useWeb3React<Web3Provider>()

    if (interfaceContext.isActive) {
        return interfaceContext
    }

    return interfaceNetworkContext
}

export default useActiveWeb3React

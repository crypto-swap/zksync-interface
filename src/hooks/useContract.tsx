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

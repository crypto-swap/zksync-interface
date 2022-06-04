import React, { createContext, FC, useContext, useMemo } from 'react'
import { useActiveWeb3React } from '../hooks'
import { Token, tokens } from '../components/SwapMenu'
import useCurrenciesFromURL from '../features/useCurrenciesFromURL'

// this page returns the context for each pool by quering into the blockchain. 

interface PoolContext {
    currencies: (Token | undefined)[]
}

const Context = createContext<PoolContext | undefined>(undefined)

const PoolContext = ({ }: PoolContext) => {
    const { account } = useActiveWeb3React();
    const { currencies } = useCurrenciesFromURL()

    // const poolWithState = ConstantProductAnalyze(currencies[0], currencencies[1])

    return (
        <Context.Provider value={useMemo(() => ({ currencies }), [currencies])}>
            {/*// we can reduce renders by conditionally rendering here*/}
            Render Pool State Here
        </Context.Provider>
    )
}


export const usePoolContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('Hook can only be used inside Pool Context')
    }
    return context
}

export default PoolContext

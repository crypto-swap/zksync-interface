import { Token, tokens } from '../components/SwapMenu'
import { useActiveWeb3React } from '../hooks'
import { useRouter } from 'next/router' 
import { useCallback, useMemo } from 'react' 

const getToken = (urlToken: string | undefined) => {
    if (!urlToken) return undefined; 
    return urlToken 
}

const useCurrenciesFromURL = (): {
    currencies: (Token | undefined)[]
    switchCurrencies: () => Promise<void>
    setURLcurrency: (cur: Token, index: number) => void 
} => {

    const { chainId } = useActiveWeb3React()
    const router = useRouter()

    const currencyA = getToken(router.query.tokens?.[0]) || undefined
    const currencyB = getToken(router.query.tokens?.[1]) || undefined 

    const switchCurrencies = useCallback(async () => {
        if (!chainId) return

        let tokens: (string | undefined)[] = []
        if (router.query && router.query.tokens) {
            tokens = [router.query.tokens?.[1], router.query.tokens?.[0]]
        } else {
            tokens = [currencyB, currencyA]
        }

        await router.push({
            pathname: router.pathname,
        })
    }, [currencyA, currencyB, router])

    const setURLCurrency = useCallback(
        async (cur: Token, index: number) => {
            if (!chainId) return 

            let tokens: (string | undefined)[] = [
                currencyA, 
                currencyB,
            ]

            if (chainId && router.query?.tokens && router.query?.tokens.length > 0) {
                tokens = [...router.query.tokens]
        
                // If selected currency is already in URL, switch currencies
                if (tokens[(index + 1) % 2] === cur) {
                  return switchCurrencies()
                }
        
                // @ts-ignore TYPE NEEDS FIXING
                const newToken = cur;
                // @ts-ignore TYPE NEEDS FIXING
                if (tokens.includes(newToken)) return // return if token already selected
                // @ts-ignore TYPE NEEDS FIXING
                tokens[index] = newToken
              }
        
              if (!router.query?.tokens) {
                // @ts-ignore TYPE NEEDS FIXING
                tokens[index] =
                  index === 1 ? cur : cur 
              }

              await router.push({pathname: router.pathname})
            }, 
        [currencyA, currencyB, router]
    )

    // @ts-ignore WEIRD ERROR NEEDS FIXING
    return useMemo(
        () => ({ 
            currencies: [currencyA, currencyB], 
            setURLCurrency, 
            switchCurrencies}),
        [currencyA, currencyB, setURLCurrency, switchCurrencies])
}

export default useCurrenciesFromURL

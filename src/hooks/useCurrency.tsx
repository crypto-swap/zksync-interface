




export function useCurrency(currencyId: string | undefined): Currency | null | undefined {
  const { chainId } = useActiveWeb3React()

  // Since this is used throughout the app, cant change this to NATIVE[chainId]?.symbol
  const isETH = currencyId?.toUpperCase() === 'ETH'

  if (isETH) {
    // @ts-ignore TYPE NEEDS FIXING
    currencyId = WNATIVE_ADDRESS[chainId]
  }

  const token = useToken(currencyId)

  const { native, wnative } = useMemo(
    () => ({
      // @ts-ignore TYPE NEEDS FIXING
      native: chainId && chainId in NATIVE ? NATIVE[chainId] : undefined,
      wnative: chainId && chainId in WNATIVE ? WNATIVE[chainId] : undefined,
    }),
    [chainId]
  )

  if (wnative?.address?.toLowerCase() === currencyId?.toLowerCase()) return wnative

  return token
}

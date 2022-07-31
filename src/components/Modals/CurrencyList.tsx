import React, {FC, useCallback, useMemo } from 'react';
import { Currency } from '@crypto-swap/sdk'
import { useAccount } from '../../hooks'
import { UnicodeNormalizationForm } from 'ethers/lib/utils';
import TOKEN_LIST from '../../config/constants/testnet.tokenlist.json'


const CurrencyRow = () => {

    const account = useAccount();

    console.log(account)

    for (let i = 0; i < TOKEN_LIST.tokens.length; i++) {
        console.log(TOKEN_LIST.tokens[i].symbol)
        console.log(TOKEN_LIST.tokens[i].address)
    }
    
    return (
        <>
        </>
    )

}

export default CurrencyRow

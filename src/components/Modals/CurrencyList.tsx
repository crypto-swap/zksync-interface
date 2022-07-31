import React, {FC, useCallback, useMemo } from 'react';
import { Currency } from '@crypto-swap/sdk'
import { useAccount } from '../../hooks'
import { UnicodeNormalizationForm } from 'ethers/lib/utils';


const CurrencyRow = () => {

    const account = useAccount();

    console.log(account)

    return (
        <>
        </>
    )

}

export default CurrencyRow

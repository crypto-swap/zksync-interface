import { hooks, metaMask } from '../connectors/metaMask';

const { useAccounts } = hooks;



function useAccount() {

    const accounts = useAccounts()

    let account = "";

    if (accounts !== undefined && accounts.length >= 1 ) {9
        account = accounts[0];
    }

    return account
}


    

export default useAccount

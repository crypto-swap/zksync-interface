import React, { useState } from 'react'; 
import Link from 'next/link';
import { hooks, metaMask } from '../../connectors/metaMask'
import * as zksync from "zksync-web3";
import testnetFaucet from '../../config/constants/contracts';

const { useProvider, useAccounts } = hooks;

const style = {
    faucetMenuWrapper : `flex flex-col relative z-10 mx-auto mt-16 h-auto w-full max-w-md rounded-3xl bg-bg-card-light p-7 pt-6 shadow-card dark:bg-bg-card-dark dark:shadow-card-dark`,
    header : `mb-[27px] text-xl font-bold text-left`,
    desc : `mb-[27px]`,
    zkSyncText : `text-[#8C8DFC] cursor-pointer font-semibold`,
    syncSwapText : `text-[#8C8DFC] font-semibold`,
    button : `flex select-none items-center justify-center bg-button-blue  leading-none font-normal 
    cursor-pointer text-white h-[55px] text-lg leading-[24px] rounded-xl w-full shadow-blue-button hover:shadow-blue-button-hover`,
    claimed : `flex select-none items-center justify-center bg-button-blue leading-none font-normal 
    cursor-default text-white h-[55px] text-lg leading-[24px] rounded-xl w-full`,
}

const FaucetMenu = () => {

    const [claimed, setClaimed] = useState(false);

    const provider = useProvider();
    const accounts = useAccounts();

    const signer = provider?.getSigner();

    const faucetABI = require("../../config/abi/testnet_faucet.json")
    const faucetContract = new zksync.Contract(testnetFaucet, faucetABI, signer);
    
    async function claimTokens() {
    
        console.log(`Sending tokens to ${accounts}`);
    
        const claimed = await faucetContract.claimAll();
    
        if (claimed) {
            console.log(`Tokens claimed successfully.`);
            setClaimed(true);
        } else {
            console.error('Failed. It seems the transaction has been reverted.');
        }

    }

    return (
        <div className={style.faucetMenuWrapper}>
            <div className={style.header}>
                Faucet
            </div>
            <div className={style.desc}>
                You can request tokens from our faucet for testing, once per account.
                <br></br><br></br>
                Please claim some tokens from <Link href="https://portal.zksync.io/faucet"><span className={style.zkSyncText}>the zkSync Portal</span></Link> first for gas.
                <br></br><br></br>
                Note: Since we are collaborating with <span className={style.syncSwapText}>SyncSwap</span> to implement this faucet, 
                any tokens claimed from the <span className={style.syncSwapText}>SyncSwap faucet</span> will not be dripped. 
            </div>

            { claimed ? 
                <button className={style.button} onClick={ () => claimTokens() }>
                    <span className="font-semibold">Claim Testnet Tokens</span> 
                </button>
                :
                <button className={style.claimed}><span className="font-semibold">Tokens Have Been Claimed</span></button>
            }
        </div>
    )
}

export default FaucetMenu;

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
                Note: Since we are collaborating with <Link href="https://syncswap.xyz"><span className={style.zkSyncText}>SyncSwap</span></Link> to implement this faucet, 
                any tokens claimed from the <Link href="https://syncswap.xyz"><span className={style.zkSyncText}>SyncSwap faucet</span></Link> will not be dripped. 
                <br></br><br></br>
                { claimed ?
                    <div>
                        Notable addresses to add to <span className="text-[#F6851B]">MetaMask</span>: 
                        <br></br>
                        testnet CryptoSwap: 
                        <br></br>
                        <span className="text-sm">0xfD2a81f7FC4fcc9dc26cB0641B190C1e0F37c43B</span>
                        <br></br>
                        testnet SyncSwap: 
                        <br></br>
                        <span className="text-sm">0x0E7896E6cE62a3481000dEf9B769d3563D0941F4</span>
                        <br></br>
                        FRAX: 
                        <br></br>
                        <span className="text-sm">0x6e5056cBaa4082d4eeE06906Be7680A8524Ed675</span>
                    </div> : <></>
                }
            </div>

            { claimed ? 
                <button className={style.claimed}>
                    <span className="font-semibold">Tokens Have Been Claimed</span>
                </button>
                :
                <button className={style.button} onClick={ () => claimTokens() }>
                    <span className="font-semibold">Claim Testnet Tokens</span> 
                </button>
            }
        </div>
    )
}

export default FaucetMenu;

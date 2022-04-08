import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

interface PoolBarProps {
    name: string;
    liquidity: string;
    volume: string;
    fees: string;
    apr: string;
}

const PoolBar = ({name, liquidity, volume, fees, apr} : PoolBarProps) => {
    //gets images from name ex: USD-BIT gets /USD.svg and /BIT.svg imgs
    var coins = name.split('-');
    var icon1 = "/" + coins[0].toString() + ".svg";
    var icon2 = "/" + coins[1].toString() + ".svg";
    //testing images
    var icon1 = '/discord.svg';
    var icon2 = '/discord.svg';
    return ( 
    <Link href="/">
        <div className="font-[Montserrat] text-xs lg:text-lg h-12 mx-8 lg:mx-20 mt-4 overflow-hidden rounded-lg shadow-card hover:shadow-button-hover dark:hover:shadow-button-hover-dark dark:shadow-card-dark grid grid-cols-6 ">
            
            <div className="col-span-2 grid grid-cols-3 text-left">
                <div className="flex justify-center gap-x-0.5 lg:gap-x-2">
                    <Image src={icon1} width={25} height={25} />
                    <Image src={icon2} width={25} height={25} />
                </div>
                <div className="flex flex-col justify-center col-span-2"> 
                    {name}
                </div>
                
            </div>
            <div className="flex flex-col justify-center text-right">
                {liquidity}
            </div>
            <div className="flex flex-col justify-center text-right">
                {volume}
            </div>
            <div className="flex flex-col justify-center text-right">
                {fees}
            </div>
            <div className="flex flex-col justify-center text-right">
                {apr}
            </div>
            
        </div>
    </Link>
    ) }
    
export default PoolBar

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { prependOnceListener } from 'process';

interface TeamLayoutProps {
    name: string;
    title: string;
    text: string; 
    photo: string;
}


const SingleTeamMember = ({name, title, text, photo} : TeamLayoutProps) => {
    /* const { theme } = useTheme();  not needed for now */
    return (
        <div className='relative group'>
            <div className='absolute hidden group-hover:block bg-bg-card-light/90 w-full z-20 h-full px-8 pb-10 dark:bg-bg-card-dark/90'>
                <div className='text-center'>
                    {text}
                </div>
            </div>
            {/* Tiny Bug: some type of image cannot being displayed properly since 'object-fill' seems not working */}
            <div className='aspect-square relative rounded-full overflow-hidden mb-[10px] m-5'>
                <Image src={photo} className='object-fill z-10' width={300} height={300}/>
            </div>
            <div className="mt-[30px] text-2xl font-bold text-center">{name}</div>
            <div className="text-xl text-center mb-5">{title}</div>

            {/* not needed for now
            <div className='mt-3 w-auto mx-auto flex flex-row mb-4 justify-center'>

                <div className='w-7 rounded-full overflow-hidden z-30 mr-1'>
                    <Link href={github}>
                        <a target="_blank">
                            <Image src={theme === 'dark' ? 'icons/github_dark.svg' : '/icons/github.svg'} width={45} height={45} />
                        </a>
                    </Link>
                </div>
                <div className='w-7 rounded-full overflow-hidden z-30 ml-1'>
                    <Link href={twitter}>
                        <a target="_blank">
                            <Image src={'/icons/twitter.svg'} width={45} height={45} />
                        </a>

                    </Link>
                </div>
            </div>
             */}
        </div>
    );
};

export default SingleTeamMember

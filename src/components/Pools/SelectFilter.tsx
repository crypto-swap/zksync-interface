import React, { useState, useMemo, FC, Fragment,  ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'

const style = {
    selectFilterSubContainer: `relative inline-block w-full text-left bg-bg-card-light dark:bg-bg-card-dark`,
    selectFilter: `w-full px-4 py-3 text-sm font-bold bg-transparent border-solid border-white rounded 
    dark:border-[#272b45]  dark:bg-bg-card-dark shadow-card dark:shadow-card-dark hover:animate-pulse`,
    selectFilterDropdown: `absolute px-4 z-10 w-full mt-2 border border-white divide-y dark:border-[#272b45] rounded shadow-card dark:shadow-card-dark 
    focus:outline-none bg-bg-card-light dark:bg-bg-card-dark divide-white dark:divide-black`,
}


const MenuLink: FC< { href?: string; label: string; onClick?(): void } > = ({ href, label, onClick }) => {
    const router = useRouter()

    if (onClick) {
        return (
            <Menu.Item>
                {({ active }) => {
                    return (
                        <div className="text-sm font-bold">
                            {label}
                        </div>
                    )
                }}
            </Menu.Item>
        )
    }

    if (href) {
        return (
            // @ts-ignore
            <Menu.Item onClick={() => router.push(href)}>
                {({ active }) => {
                    return (
                        <div className="text-sm font-bold">
                            {label}
                        </div>
                    )
                }}
            </Menu.Item>
        )
    }

    return <></>
}

enum PoolFilter {
    All = 'All Pools',
    Portfolio = 'Your Pools',
}

const filters: Record<string, PoolFilter> = {
    portfolio: PoolFilter.Portfolio,
    pool: PoolFilter.All,
}

const SelectFilter = () => {
    // filter fo what pools that the user has

    const router = useRouter()

    const filter = router.query?.filter as string

    const [selected, setSelected] = useState<PoolFilter>(filters[filter] || PoolFilter.All)

    let account = "0xWalletAddress"

    const items = useMemo(() => {
        const map: Record<string, ReactNode> = {
            [PoolFilter.All]: <MenuLink href={'/pools'} label="All Pools" />,
            [PoolFilter.Portfolio]: <MenuLink href={`/pools?account=${account}&filter=portfolio`} label="Your Pools" />
        }

        return Object.entries(map).reduce<Record<string, ReactNode>>((acc, [key, value]) => {

            if (value && selected !== key) {
                acc[key] = value;
            }
            return acc
        }, {})
    }, [account, selected])

    return (
        <Menu as="div" className={style.selectFilterSubContainer}>
            <div>
                <Menu.Button className={style.selectFilter}>
                    <div className="flex flex-row items-center justify-between ">
                        <div className="text-sm leading-5 font-bold currentColor">{selected}</div>
                        <div className="shadow-card dark:shadow-card-dark rounded-full hover:shadow-button-hover dark:hover:shadow-button-hover-dark ">
                            <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
                        </div>
                    </div>
                </Menu.Button>
            </div>
            <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items static className={style.selectFilterDropdown}>
                    {Object.entries(items).map(([key, value], index) => (
                        <div
                            key={index}
                            onClick={() => setSelected(key as PoolFilter)}
                            className="px-3 py-2 cursor-pointer hover:bg-dark-900/40"
                        >
                            {value}
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default SelectFilter

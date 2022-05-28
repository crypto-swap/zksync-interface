import TokenSelect from '../Popups/TokenSelect';
import { Token } from '../SwapMenu';

export interface Wallet {
    name: string;
}

interface PoolInputProps {
    receive?: boolean,
    value: string,
}

const style = {
    poolInputContainer: `mb-2 flex place-content-between items-center px-0.5`,
}

const PoolInput = () => {
    return (
        <>
            <div className={style.poolInputContainer}>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 ">Input</div>
                <div className="text-xs">Balance: 0.0</div>
            </div>
            <div className="relative flex flex-row-reverse place-content-between rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">

            </div>
        </>
    )
}

export default PoolInput

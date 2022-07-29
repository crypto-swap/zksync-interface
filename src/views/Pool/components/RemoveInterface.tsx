import RemoveLiquidityButton from './RemoveLiquidityButton';
import RemoveInput from './RemoveInput';
import RemoveOutput from './RemoveOutput';
import { ArrowDownIcon } from '@heroicons/react/solid';
import { Transition } from '@headlessui/react';

const style = { 
    wrapper: `pb-3`,
    arrowContainer: `pt-2 pb-1 flex flex-col justify-center items-center`,
}

const RemoveInterface = () => {
    return (
        <div className={style.wrapper}>
            <RemoveInput/>
            <div className={style.arrowContainer}><ArrowDownIcon className="w-5 h-5"/></div>
            <RemoveOutput/>
            <RemoveLiquidityButton/>
        </div>
    )
}

export default RemoveInterface

import RemoveLiquidityButton from './RemoveLiquidityButton';
import RemoveInput from './RemoveInput';
import RemoveOutput from './RemoveOutput';
import { REFUSED } from 'dns';

const style = { 
    wrapper: ``,
}

const RemoveInterface = () => {
    return (
        <div className={style.wrapper}>
            <RemoveInput/>
            <RemoveLiquidityButton/>
        </div>
    )
}

export default RemoveInterface

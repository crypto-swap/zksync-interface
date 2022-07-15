import RemoveLiquidityButton from './RemoveLiquidityButton';
import RemoveInput from './RemoveInput';
import RemoveOutput from './RemoveOutput';

const style = { 
    wrapper: ``,
}

const RemoveInterface = () => {
    return (
        <div className={style.wrapper}>
            remove liquidity interface
            <RemoveLiquidityButton/>
        </div>
    )
}

export default RemoveInterface

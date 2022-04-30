import PoolBar from './PoolBar'
import pools from './mockPools.json';

const PoolMenu = () => {
    //temp images
    var imgs = {
        'SEK' : '/icons/discord.svg'

    }
    return ( 
        <div>
            {
                pools.map((pool) => (
                    
                    <PoolBar image1='/icons/discord.svg' image2='/icons/discord.svg' ticker1={pool['asset1']} ticker2={pool['asset2']} liquidity={pool['liquidity']} volume={pool['volume']} fees={(pool['volume'] * 0.025).toFixed(2)}  apr={(pool['volume'] * 0.025 / pool['liquidity'] * 365).toFixed(5)} />
                ))
            }
        </div>
    ) }
    
export default PoolMenu

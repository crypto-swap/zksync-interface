import PoolInput from './PoolInput';
import AddPoolButton from './AddPoolButton';

const AddInterface = () => {
    
    return (
        <>
                    <div className="grid auto-rows-auto gap-y-[20px] mt-[0.2rem]">
              <div id="add-liquidity-input-token-a" className="">
                <PoolInput {...{
                  value: tokenA_Amount,
                  token: tokenA,
                  setToken: setTokenA,
                  setTokenA_Amount: setTokenA_Amount,
                  setTokenB_Amount: setTokenB_Amount,
                }}
                  onChange={handleChange} />
              </div>
              <div className="flex flex-col justify-start items-center w-full"><PlusIcon className="w-5 h-5" /></div>
              <div id="add-liquidity-input-token-b" className="">
                <PoolInput
                  tokenB
                  {...{
                    value: tokenB_Amount,
                    token: tokenB,
                    setToken: setTokenB,
                    setTokenA_Amount: setTokenA_Amount,
                    setTokenB_Amount: setTokenB_Amount,
                  }}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-12">
              <AddPoolButton />
            </div>
        </>
    )
}

export default AddInterface 

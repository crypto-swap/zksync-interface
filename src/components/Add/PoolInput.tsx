import TokenSelect from '../Popups/TokenSelect';
import { Token } from '../SwapMenu';
import Link from 'next/link'

export interface Wallet {
    name: string;
}

interface PoolInputProps {
    tokenB?: boolean;
    value: string;
    token: Token;
    setToken: React.Dispatch<React.SetStateAction<Token>>;
    setTokenA_Amount: React.Dispatch<React.SetStateAction<string>>;
    setTokenB_Amount: React.Dispatch<React.SetStateAction<string>>;
    onChange: (
        reverse: boolean,
        amount?: number,
        token_a?: Token,
        token_b?: Token,
    ) => number;
}

const style = {
    poolInputContainer: `mb-2 flex place-content-between items-center px-0.5`,
}

const PoolInput = ({ tokenB = false, value, token, setToken, setTokenA_Amount, setTokenB_Amount, onChange }: PoolInputProps) => {
    return (
        <>
            <Link
                href="[[...tokens]]"
                as="/add/routing/test/works"
            >
                <a>Test</a>
            </Link>
            <div className={style.poolInputContainer}>
                <div className="text-sm font-bold text-gray-500 dark:text-gray-400 ">Input</div>
                <div className="text-xs">Balance: 0.0</div>
            </div>
            <div className="relative flex flex-row-reverse place-content-between text-lg h-[60px] rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">
                <input
                    inputMode="decimal"
                    placeholder="0.0"
                    className="absolute inset-0 h-full w-full rounded-lg bg-transparent p-4"
                    value={value}
                    onChange={(ev) => {
                        if (/^\d*\.?\d*$/.test(ev.target.value)) {
                            if (ev.target.value == '') {
                                setTokenA_Amount('');
                                setTokenB_Amount('');
                            } else {
                                const amount = parseFloat(ev.target.value);
                                if (Number.isFinite(amount)) {
                                    (tokenB ? setTokenB_Amount : setTokenA_Amount)(ev.target.value.substring(0, 32));
                                    (tokenB ? setTokenA_Amount : setTokenB_Amount)(onChange(tokenB, amount).toString())
                                }
                            }
                        }
                    }
                    }
                />
                <TokenSelect
                    {...{ value: token, setToken, isTokenA: !tokenB }}
                    onChange={(tokenA) => {
                        let output;
                    }}
                />
            </div>
        </>
    )
}

export default PoolInput

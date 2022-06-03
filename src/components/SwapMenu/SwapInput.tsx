import TokenSelect from '../Popups/TokenSelect';
import { Token } from '../SwapMenu';

export interface Wallet {
  name: string;
}

interface SwapInputProps {
  receive?: boolean;
  value: string;
  onChange: (
    reverse: boolean,
    amount?: number,
    from?: Token,
    to?: Token
  ) => number;
  setPayAmount: React.Dispatch<React.SetStateAction<string>>;
  setReceiveAmount: React.Dispatch<React.SetStateAction<string>>;
  token: Token;
  setToken: React.Dispatch<React.SetStateAction<Token>>;
  resetTransactionInformation: () => void;
  isTokenA: boolean;
}

const SwapInput = ({
  receive = false,
  value,
  onChange,
  setPayAmount,
  setReceiveAmount,
  token,
  setToken,
  resetTransactionInformation,
  isTokenA,
}: SwapInputProps): JSX.Element => {
  return (
    <>
      <div className="mb-2 flex place-content-between items-center px-0.5">
        <div className="text-sm font-bold">{receive ? 'Receive' : 'Pay'}</div>
        <div className="text-xs">Balance: 0.0</div>
      </div>
      <div className="relative flex flex-row-reverse text-lg h-[60px] place-content-between rounded-lg px-4 py-2 shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">
        <input
          inputMode="decimal"
          placeholder="0.0"
          className="absolute inset-0 h-full w-full rounded-lg bg-transparent p-4"
          value={value}
          onChange={(event) => {
            if (/^\d*\.?\d*$/.test(event.target.value)) {
              if (event.target.value === '') {
                setPayAmount('');
                setReceiveAmount('');
                resetTransactionInformation();
              } else {
                const amount = parseFloat(event.target.value);
                if (Number.isFinite(amount)) {
                  (receive ? setReceiveAmount : setPayAmount)(
                    event.target.value.substring(0, 32)
                  );
                  (receive ? setPayAmount : setReceiveAmount)(
                    onChange(receive, amount).toString()
                  );
                }
              }
            }
          }}
        />
        <TokenSelect
          {...{ value: token, setToken, isTokenA: isTokenA }}
          onChange={(token) => {
            let output;
            if (receive) {
              output = onChange(false, undefined, undefined, token);
            } else {
              output = onChange(false, undefined, token);
            }
            if (Number.isFinite(output)) setReceiveAmount(output.toString());
          }}
        />
      </div>
    </>
  );
};

export default SwapInput;

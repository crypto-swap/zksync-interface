import React from 'react'

interface SwapInputProps {
  title: string
  value: number
}

const SwapInput = ({ title, value }: SwapInputProps): JSX.Element => {
  return (
    <div className="h-full p-2">
      <div className="p-1 text-sm font-semibold">{title}:</div>
      <div className="rounded-lg  shadow-[inset_0.5px_1px_5px_rgba(0,0,0,0.3)]">
        <div className="px-4 py-2">{value.toFixed(1)}</div>
      </div>
      <div className="p-1 text-xs font-light">Balance:</div>
    </div>
  )
}

export default SwapInput

import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Key = (prop:HTMLAttributes<HTMLDivElement>) => {
    const {children,className} = prop
  return (
    <div className={twMerge('size-14 bg-neutral-300 text-neutral-950 inline-flex items-center justify-center rounded-2xl  font-medium',className)}>
        {children}
    </div>
  )
}

export default Key
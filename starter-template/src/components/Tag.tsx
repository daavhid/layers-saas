'use client'
import React, { HTMLAttributes } from 'react'

import { twMerge } from 'tailwind-merge'

const Tag = (props:HTMLAttributes<HTMLDivElement>) => {
    const {className,children} = props
  return (
    <div className={twMerge('w-fit flex mx-auto border border-lime-400 text-lime-400 px-3 gap-4 py-1 rounded-full items-center uppercase text-center',className)}>
        <span >&#9734;</span>
        <span className='text-sm'>{children}</span>
    </div>
  )
}

export default Tag
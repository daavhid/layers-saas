import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

const Avatar = (props:HTMLAttributes<HTMLDivElement>) => {
    const {children, className, ...rest} = props
  return (
    <div className={twMerge('border-4 p-1 size-20 border-blue-500 rounded-full overflow-hidden ',className)} {...rest}>
        {children}
        
    </div>
  )
}

export default Avatar
import React, { ButtonHTMLAttributes, HTMLAttributes, HtmlHTMLAttributes } from 'react'
import {cva} from 'class-variance-authority'

const classes = cva('h-12 px-6  border rounded-full ', {
    variants:{
        variant:{
            primary: 'bg-lime-400 border-lime-400 text-neutral-950',
            secondary: "border-white bg-transparent text-white",
        },
        size:{
            sm:'h-10'
        }
    }
})

const Button = (props:  {variant:'primary' | 'secondary',size?:'sm'}&ButtonHTMLAttributes<HTMLButtonElement>) => {
    const {variant,className,size,children,...otherProps} = props
  return (
    <button className={classes({variant,className,size})} {...otherProps}>
        {children}

    </button>
  )
}

export default Button
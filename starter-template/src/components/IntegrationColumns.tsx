'use client'
import { integrations } from '@/sections/Integrations'
import Image from 'next/image'
import React, { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import {motion} from 'framer-motion'


type integrationCol = typeof integrations

const IntegrationColumns = (props:{
    integrations:integrationCol,
    className?:string,
    down?:boolean,
}) => {
    const {integrations,className,down} = props
  return (
    <motion.div 
    initial = {{y:`${down&&'-50%'}`}}
    animate = {{y:`${down?'-0%':'-50%'}`}} 
    transition={{
        duration:10,
        ease:'linear',
        repeat:Infinity
    }}
    className={twMerge("flex flex-col gap-4 pb-1 lg:pb-4 md:p-2",className)}>
        {
            Array.from({length:2}).map((_,i)=>(
                <Fragment key={i}>

                    {integrations.map(integration=>(
                        <div key={integration.name} className="bg-neutral-900 border border-white/10 p-6 rounded-3xl ">
                            <Image src={integration.icon} alt={integration.name} className="size-24 mx-auto" priority/>
                            <div className="mt-8">
                                <h3 className="text-center font-medium text-2xl" >{integration.name}</h3>
                                <p className="text-center text-white/50 mt-4">{integration.description}</p>
                            </div>
                        </div>

                    ))}
                </Fragment>
            ))
        }
    </motion.div>
  )
}

export default IntegrationColumns
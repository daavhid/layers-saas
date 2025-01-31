'use client'
import { integrations } from '@/sections/Integrations'
import Image from 'next/image'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import {AnimationPlaybackControls, motion,useAnimate} from 'framer-motion'


type integrationCol = typeof integrations

const IntegrationColumns = (props:{
    integrations:integrationCol,
    className?:string,
    down?:boolean,
}) => {
    const {integrations,className,down} = props
    const animateRef = useRef<AnimationPlaybackControls>()
    const [isHovered,setisHovered] = useState(false)
    const [scope,animate] = useAnimate()
    useEffect(()=>{
        animateRef.current = animate(scope.current,{y:`${down? '0px':'-50%'}`},{
            duration:10,
            ease:'linear',
            repeat:Infinity
        })
    },[animate,down,scope])
    useEffect(()=>{
        if (animateRef.current){
            animateRef.current.speed = isHovered ?0.5:1
        }
    })
  return (
    <motion.div
    ref={scope}
        initial = {{y:`${down&&'-50%'}`}}
        // animate = {{y:`${down? '0px':'-50%'}`}} 
         className=''>

        <div 
        
        className={twMerge("flex flex-col gap-4 pb-1 lg:pb-4 md:p-2",className)} onMouseEnter={()=>{setisHovered(true)}} onMouseLeave={()=>{setisHovered(false)}}>
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
        </div>
    </motion.div>
  )
}

export default IntegrationColumns
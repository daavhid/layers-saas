'use client'
import {AnimationPlaybackControls, motion,useAnimate} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';
export default function CallToAction() {
    const [isHovered,setisHovered] = useState(false)
    const animateRef = useRef<AnimationPlaybackControls>()
    const [scope,animate] = useAnimate()
    useEffect(()=>{
        animateRef.current = animate(scope.current,{x:'-50%'},{duration:30,ease:'linear',repeat:Infinity})
    },[animate,scope])
    useEffect(()=>{
        if(animateRef.current){

            animateRef.current.speed  = isHovered ? 0.5 : 1
        }
    },[isHovered])
    return (
        <section className="py-24">
            <div className="overflow-x-clip">
                <div
                
                className='flex'>

                    <motion.div
                    ref={scope}
                    className="  gap-16 flex-none flex font-medium pr-10 group cursor-pointer" onMouseEnter={()=>{setisHovered(true)}} onMouseLeave={()=>{setisHovered(false)}}>

                        {
                            Array.from({ length: 10 }).map((_, index) => (
                                <div key={index} className="flex items-center whitespace-nowrap gap-16 md:text-8xl text-7xl grow p-5">

                                        <span className="text-lime-400 text-7xl ">&#10038;</span>
                                        <span className='group-hover:text-lime-400'>Try it for free</span>
                                </div>
                            ))
                        }
                    </motion.div>          
                </div>

            </div>
        </section>
    );
}

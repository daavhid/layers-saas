'use client'
import Button from "@/components/Button";
import designExample1 from '@/assets/images/design-example-1.png'
import designExample2 from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion,useAnimate} from 'framer-motion'
import { useEffect, useRef } from "react";
import customCursor from '@/assets/images/cursor-you.svg'

export default function Hero() {
    const constraintRef = useRef<HTMLElement>(null)

    const [lDesignScope,lDesignAnimate] = useAnimate()
    const [lpointerScope,lpointerAnimate] = useAnimate()
    const [rDesignScope,rDesignAnimate] = useAnimate()
    const [rpointerScope,rpointerAnimate] = useAnimate()

    
    useEffect(()=>{
        lDesignAnimate([
            [lDesignScope.current,{opacity:1},{duration:0.5}],
            [lDesignScope.current,{y:0,x:0},{duration:0.5}]

        ]);
        lpointerAnimate([
            [lpointerScope.current,{opacity:1},{duration:0.5}],
            [lpointerScope.current,{y:0,x:-130},{duration:0.5}],
            [lpointerScope.current,{y:[0,16,0],x:0},{duration:0.5}]
        ]);
        rDesignAnimate([
            [rDesignScope.current,{opacity:1},{duration:0.5,delay:1.5}],
            [rDesignScope.current,{y:0,x:0},{duration:0.5}],
        ]);
        rpointerAnimate([
            [rpointerScope.current,{opacity:1},{duration:0.5,delay:1.5}],
            [rpointerScope.current,{y:0,x:180},{duration:0.5}],
            [rpointerScope.current,{y:[0,20,0],x:0},{duration:0.5}]
        ]);
    },[lDesignAnimate,lDesignScope,lpointerAnimate,rDesignAnimate,rDesignScope,rpointerAnimate,rpointerScope,lpointerScope])
    return (
        <section style={{cursor:`url(${customCursor.src}), auto`}} ref={constraintRef} className="  py-24 overflow-x-clip">
            <div className="relative container ">
                <motion.div
                drag
                dragConstraints = {{top:-200,left:-100,bottom:50,right:900}}
                initial={{opacity:0,y:100, x:-100}} ref={lDesignScope} className="absolute hidden lg:block -left-40 top-16">
                    <Image draggable={false} src={designExample1} alt="design example 1"/>
                </motion.div>
                <motion.div initial={{opacity:0,y:100, x:-230}} ref={lpointerScope} className="absolute top-96 left-56 hidden lg:block">
                    <Pointer name="Andrea"/>
                </motion.div>
                <motion.div drag
                dragConstraints = {{top:-200,left:-900,bottom:50,right:-300}} initial={{opacity:0,y:100, x:100}} ref={rDesignScope} className="absolute hidden lg:block -right-[17rem] -top-16">
                    <Image draggable={false} src={designExample2} alt="design example 2"/>
                </motion.div>
                <motion.div initial={{opacity:0,y:100, x:280}} ref={rpointerScope} className="absolute -top-4 right-80 hidden lg:block">
                    <Pointer name="Andrea" color="red"/>
                </motion.div>
                <div className="bg-gradient-to-r w-fit text-center mx-auto from-purple-400 to-pink-400 rounded-full py-1 px-3 font-semibold text-neutral-950">✨$7.5M seed round raised</div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">Impactful design, created effortlessly</h1>
                <p className="mt-8 max-w-2xl mx-auto text-center text-xl text-white/50">Design tools shounldn&apos;t slow you down. Layers combines powerful features with an intuitive interface that keeps you in your creative flow. </p>
                <form className="border max-w-lg p-2 rounded-full border-white mt-8 border-opacity-15 mx-auto flex relative justify-between">
                    <input type="email" placeholder="Enter your email" className="bg-transparent md:flex-1 w-4/5  outline-none  px-4 shrink" />
                    <Button variant="primary" size="sm" type="submit" className=" whitespace-nowrap ">Sign Up</Button>
                </form>
            </div>
        </section>
    );
}

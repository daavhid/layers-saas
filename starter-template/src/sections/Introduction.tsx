'use client'
import Tag from "@/components/Tag";
import {useScroll, useTransform} from 'framer-motion'
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
// import { workerData } from "worker_threads";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const divRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:['start end','end end']
    })
    const [currentWordIndex,setCurrentWordIndex] = useState(0)
    const wordIndex = useTransform(scrollYProgress,[0,1],[0,words.length])
    useEffect(()=>{
        wordIndex.on('change',(latest)=>{
            setCurrentWordIndex(latest)
        })
        
    },[wordIndex])
    // console.log(currentWordIndex,words.length,'this is the current word index')
    return (
        <section className="py-28 lg:py-40">
            <div className="container relative">
                <div className="sticky top-20 md:top-28">
                    <Tag>Introducing Layers</Tag>
                    <div className="text-4xl  md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your creative process deserves better.</span>{' '}
                        <span>

                            {
                                words.map((word,i)=>(
                                    <span className={twMerge("text-white/15 transition duration-500 ",i < currentWordIndex && 'text-white')} key={i}>{`${word}  `}{'  '}</span>
                                ))
                            }
                        </span>
                        
                
                        <span className="block text-lime-400">Thats why we built Layers </span>
                    </div>

                </div>
                <div className="h-[150vh]" ref={divRef}></div>
            </div>
        </section>
    );
}

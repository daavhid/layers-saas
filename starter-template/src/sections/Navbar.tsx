'use client'
import Image from "next/image";
import layers from '@/assets/images/logo.svg';
import Button from "@/components/Button";
import Link from "next/link";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import {motion,AnimatePresence} from 'framer-motion'

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="bg-neutral-950/70 backdrop-blur border border-white/15 rounded-[2rem]">
                        <div className="grid grid-cols-2 lg:grid-cols-3 items-center px-4 p-2 md:pr-2 ">
                            <div>
                                <Image src={layers} alt='Layers logo' className="w-auto h-9 md:h-auto"/>
                            </div>
                            <div className="lg:flex justify-center hidden items-center">

                                    <ul className=" flex gap-6 ">
                                        {navLinks.map((link,index)=>(
                                            <React.Fragment key={index}>
                                                <Link href={link.href}>{link.label}</Link>
                                            </React.Fragment>
                                        ))}
                                    </ul>
                                </div>
                            <div className="flex justify-end items-center gap-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden" onClick={()=>{
                                    setIsOpen(!isOpen)
                                }}><line x1="3" y1="6" x2="21" y2="6" className={twMerge('origin-left transition',isOpen&&'rotate-45 -translate-y-1')}></line><line x1="3" y1="12" x2="21" y2="12" className={twMerge('transition',isOpen && 'hidden')}></line><line x1="3" y1="18" x2="21" y2="18" className={twMerge('origin-left transition',isOpen && '-rotate-45 translate-y-1')}></line></svg>
                                
                                <Button variant="secondary" className="hidden md:block">Log In</Button>
                                <Button variant="primary" className="hidden md:block">Sign Up</Button>
                            </div>
                        </div>
                        <AnimatePresence>

                            {
                                isOpen && (
                                    <motion.div
                                    initial = {{height:0}}
                                    animate = {{height:'auto'}}
                                    exit={{height:0}}
                                    className="overflow-hidden"
                                    >

                                        <div className="flex md:hidden flex-col items-center justify-center gap-6 py-4">
                                            {navLinks.map(link => (
                                                <a href={link.href} key={link.label}>{link.label}</a>
                                            ))}
                                            <Button variant="secondary">Log In</Button>
                                            <Button variant="primary">Sign Up</Button>
                                        </div>
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[5.375rem] md:pb-[5.5rem] lg:pb-[5.7rem]">

            </div>
        </>
    );
}

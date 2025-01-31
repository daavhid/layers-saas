'use client'
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import {motion} from 'framer-motion'
import { Fragment,} from "react";

const logos = [
    { name: "Quantum", image: quantumLogo },
    { name: "Acme Corp", image: acmeLogo },
    { name: "Echo Valley", image: echoValleyLogo },
    { name: "Pulse", image: pulseLogo },
    { name: "Outside", image: outsideLogo },
    { name: "Apex", image: apexLogo },
    { name: "Celestial", image: celestialLogo },
    { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
    
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h1 className="text-white/15 text-xl text-center mb-12">Already chosen by these market leaders</h1>
                <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div animate= {{
                        x:'-50%',
                    }} transition={{
                        duration:30,
                        ease:'linear',
                        repeat:Infinity
                    }} className="flex flex-none gap-24 pr-[6.5rem]">
                       { Array.from({length:2}).map((_,i)=>(
                        <Fragment key={i}>
                        
                            {logos.map(logo=>(
                                <Image key={logo.name} src={logo.image} alt={logo.name}/>
                            ))}
                        </Fragment>

                       ))
                    }
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

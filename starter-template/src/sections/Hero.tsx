import Button from "@/components/Button";
import designExample1 from '@/assets/images/design-example-1.png'
import designExample2 from '@/assets/images/design-example-2.png'
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="  py-24 overflow-x-clip">
            <div className="relative container ">
                <div className="absolute hidden lg:block -left-40 top-16">
                    <Image src={designExample1} alt="design example 1"/>
                </div>
                <div className="absolute hidden lg:block -right-[17rem] -top-16">
                    <Image src={designExample2} alt="design example 2"/>
                </div>
                <div className="absolute top-96 left-56 hidden lg:block">
                    <Pointer name="Andrea"/>
                </div>
                <div className="absolute -top-4 right-80 hidden lg:block">
                    <Pointer name="Andrea" color="red"/>
                </div>
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

import Avatar from "@/components/Avatar";
import Feature from "@/components/Feature";
import Tag from "@/components/Tag";
import img1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import img2 from "@/assets/images/avatar-lula-meyers.jpg";
import img3 from "@/assets/images/avatar-florence-shaw.jpg";
import img4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Key from "@/components/Key";

const features = [
    "Asset Library",
    "Code Preview",
    "Flow Mode",
    "Smart Sync",
    "Auto Layout",
    "Fast Search",
    "Smart Guides",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <Tag>Features</Tag>
                <h1 className="text-center mt-12 text-6xl font-semibold max-w-2xl mx-auto">Where power meets <span className="text-lime-400">simplicity</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 items-center justify-center mt-12 ">
                    <Feature title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1 group" >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image src={img1} alt="image 1" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image src={img2} alt="image 2" className="rounded-full "/>
                            </Avatar>
                            <Avatar className="-ml-6 border-yellow-500 z-20">
                                <Image src={img3} alt="image 3" className="rounded-full"/>
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent  group-hover:border-green-500 transition bg-neutral-700
                            flex items-center justify-center gap-1 relative ">
                                <Image src={img4} alt="image 4" className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"/>
                                {Array.from({length:3}).map((_,i)=>(
                                    <span key={i} className="
                                    block  rounded-full size-1.5 bg-white">
                                        
                                    </span>
                                ))}

                            </Avatar>
                        </div>
                    </Feature>
                    <Feature title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1 relative group">
                        <div className="aspect-video    flex items-center justify-center ">
                            <p className="text-4xl text-center font-extrabold text-white/20 group-hover:text-white/15 transition duration-500">We&apos;ve achieved {"  "}<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span><br/> growth this year</p>
                            <div className="rounded-3xl overflow-hidden left-1/2 absolute top-0 -translate-y-[50%] -translate-x-1/2   opacity-0 group-hover:opacity-100 object-cover transition duration-500">

                                <video src={'/assets/gif-incredible.mp4' } className=" shadow-2xl size-full  rounded-3xl   inline-block pointer-events-none" autoPlay loop muted playsInline/>
                            </div>

                        </div>
                    </Feature>
                    <Feature title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="md:col-span-2 lg:col-span-1 md:col-start-2 group">
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="w-28 keys">shift</Key>
                            <Key className="keys delay-150">alt</Key>
                            <Key className="keys delay-300">C</Key>
                        

                        </div>

                    </Feature>
                </div>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    {features.map((feature, index) => (
                        <div key ={index} className="bg-neutral-900 rounded-2xl  flex items-center justify-center gap-3 px-3 md:px-5 md:py-2 py-1.5 border border-white/10 group hover:scale-105 transition duration-500">
                            <span className="size-5 text-neutral-950 inline-flex items-center justify-center bg-lime-400 rounded-full text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

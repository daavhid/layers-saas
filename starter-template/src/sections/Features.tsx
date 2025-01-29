import Avatar from "@/components/Avatar";
import Feature from "@/components/Feature";
import Tag from "@/components/Tag";
import img1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import img2 from "@/assets/images/avatar-lula-meyers.jpg";
import img3 from "@/assets/images/avatar-florence-shaw.jpg";
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
                    <Feature title="Real-time Collaboration" description="Work together seamlessly with conflict-free team editing" className="md:col-span-2 lg:col-span-1" >
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
                            <Avatar className="-ml-6 border-transparent bg-neutral-700
                            flex items-center justify-center gap-1">
                                {Array.from({length:3}).map((_,i)=>(
                                    <span key={i} className="
                                    block  rounded-full size-1.5 bg-white">
                                        
                                    </span>
                                ))}

                            </Avatar>
                        </div>
                    </Feature>
                    <Feature title="Interactive Prototyping" description="Engage your clients with prototypes that react to user actions" className="md:col-span-2 lg:col-span-1">
                        <div className="aspect-video flex items-center justify-center ">
                            <p className="text-4xl text-center font-extrabold text-white/20">We&apos;ve achieved {"  "}<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span><br/> growth this year</p>

                        </div>
                    </Feature>
                    <Feature title="Keyboard Quick Actions" description="Powerful commands to help you create designs more quickly" className="md:col-span-2 lg:col-span-1 md:col-start-2">
                        <div className="aspect-video flex justify-center items-center gap-4">
                            <Key className="w-28">shift</Key>
                            <Key>alt</Key>
                            <Key>C</Key>

                        </div>

                    </Feature>
                </div>
                <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                    {features.map((feature, index) => (
                        <div key ={index} className="bg-neutral-900 rounded-2xl  flex items-center justify-center gap-3 px-3 md:px-5 md:py-2 py-1.5 border border-white/10">
                            <span className="size-5 text-neutral-950 inline-flex items-center justify-center bg-lime-400 rounded-full text-xl">&#10038;</span>
                            <span className="font-medium md:text-lg">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

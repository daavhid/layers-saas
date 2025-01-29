import Tag from "@/components/Tag";
import Image from "next/image";
import figmaLogo from "@/assets/images/figma-logo.svg"
import notionLogo from "@/assets/images/notion-logo.svg"
import slackLogo from "@/assets/images/slack-logo.svg"
import relumeLogo from "@/assets/images/relume-logo.svg"
import framerLogo from "@/assets/images/framer-logo.svg"
import githubLogo from "@/assets/images/github-logo.svg"
import IntegrationColumns from "@/components/IntegrationColumns";

export const integrations = [
    { name: "Figma", icon: figmaLogo, description: "Figma is a collaborative interface design tool." },
    { name: "Notion", icon: notionLogo, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Slack", icon: slackLogo, description: "Slack is a powerful team communication platform." },
    { name: "Relume", icon: relumeLogo, description: "Relume is a no-code website builder and design system." },
    { name: "Framer", icon: framerLogo, description: "Framer is a professional website prototyping tool." },
    { name: "GitHub", icon: githubLogo, description: "GitHub is the leading platform for code collaboration." },
] ;


export default function Integrations() {
    return (
        <section className="py-24">
            <div className="container lg:flex items-center lg:gap-10">
                <div className="">

                    <Tag className="mx-0">integrations</Tag>
                    <h1 className="text-left mt-12 text-6xl font-semibold ">Plays well with  <span className="text-lime-400">others</span></h1>
                    <p className="text-white/50 mt-8 text-lg">layers seamlessly connects with your favorite tools, making it easy to plug into any workflow and collaborate across platforms</p>
                </div>
                <div className="lg:h-[50rem] h-[25rem] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] mt-8 lg:mt-0">
                    <div className="flex gap-4">

                        <IntegrationColumns integrations={integrations}/>
                        <IntegrationColumns integrations={integrations.slice().reverse()} className="hidden md:flex"/>
                    </div>
                    
                </div>

            </div>
        </section>
    );
}

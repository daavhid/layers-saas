import Image from "next/image";
import layers from '@/assets/images/logo.svg';

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-between">
                    <Image src={layers} alt="layers logo"/>
                    <ul className="flex gap-6">
                        {footerLinks.map((link) => (
                            <li key={link.label} className="text-white/50 text-sm">{link.label}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

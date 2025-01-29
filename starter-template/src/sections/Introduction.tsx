import Tag from "@/components/Tag";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
    return (
        <section className="py-28">
            <div className="container">
                <Tag>Introducing Layers</Tag>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Your creative process deserves better.</span>{' '}
                    <span className="text-white/15">{text}</span>
                    <span className="block text-lime-400">Thats why we built Layers </span>
                </div>
            </div>
        </section>
    );
}

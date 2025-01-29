export default function CallToAction() {
    return (
        <section className="py-24">
            <div className="overflow-x-clip">

                <div className="  gap-16 flex font-medium">

                    {
                        Array.from({ length: 10 }).map((_, index) => (
                            <div key={index} className="flex items-center whitespace-nowrap gap-16 md:text-8xl text-7xl grow p-5">

                                    <span className="text-lime-400 text-7xl ">&#10038;</span>
                                    <span>Try it for free</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

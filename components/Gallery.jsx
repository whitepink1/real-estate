import Image from "next/image";

const Gallery = () => {
    return(<div id="ourclients" className="w-[95vw] p-4 mx-auto lg:w-[92vw]">
        <div className="relative grid grid-cols-4 gap-2.5 w-full h-fit p-6 bg-grey-10 border-2 border-grey-15 rounded-xl bg-abstract lg:gap-5 lg:p-15">
            <div className="z-8 relative col-span-2 row-span-1">
                <Image fill sizes="w-full" loading="lazy" className="object-cover rounded-xl aspect-5/2" src="/Gallery/gallery1.jpg" alt="Office Space"/>
            </div>
            <div className="z-8 relative col-span-2 row-span-1">
                <img loading="lazy" className="object-cover rounded-xl aspect-5/2" src="/Gallery/team1.jpg" alt="Man working in offce"/>
            </div>
            <div className="z-8 relative col-span-2 row-span-1">
                <img loading="lazy" className="object-cover rounded-xl aspect-5/2" src="/Gallery/gallery2.jpg" alt="Office Space v2"/>
            </div>
            <div className="z-8 relative">
                <img loading="lazy" className="object-cover rounded-xl h-full" src="/Gallery/team2.jpg" alt="Office Space v3"/>
            </div>
            <div className="z-8 relative">
                <img loading="lazy" className="object-cover rounded-xl h-full" src="/Gallery/team3.jpg" alt="Man working in tablet"/>
            </div>
            <div className="z-8 flex flex-col justify-center my-4 col-span-4 w-full lg:px-0 lg:col-span-2 lg:my-0">
                <Image src="/sparcle.svg" width={70} height={30} loading="lazy" alt="Sparcles"/>
                <h2 className="font-h2 pl-3 lg:pl-none lg:mb-2">Explore Estatein's World</h2>
                <p className="font-paragraph text-grey-60 pl-3 lg:pl-none lg:pr-10">Step inside the world of Estatein, where professionalism meets warmth, and expertise meets passion. Our gallery offers a glimpse into our team and workspaces, inviting you to get to know us better.</p>
            </div>
            <div className="z-8 relative col-span-4 lg:col-span-2 lg:row-span-1">
                <img loading="lazy" className="object-cover rounded-xl aspect-7/4 lg:aspect-5/2" src="/Gallery/team4.jpg" alt="Working space"/>
            </div>
        </div>
    </div>)
}

export default Gallery;
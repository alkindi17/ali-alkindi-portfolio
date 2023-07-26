import Image from 'next/image'

export default function HomeSection() {
    return (
        <div id="about" className="flex flex-row max-md:flex-col gap-16 max-md:gap-8 justify-center max-md:text-center items-center h-fit max-sm:-translate-y-10">
            {/* Image */}
            <div className="w-[250px] max-md:w-[150px] max-sm:w-[120px] basis-1/5">
                <Image src="peep-2.svg" width={220} height={50} alt={""}/>
            </div>

            {/* Text */}
            <div className="h-full basis-3/5">
                <p className="text-lg max-md:text-sm text-justify">I am a passionate and skilled Software Developer specializing in Mobile and Web development with a strong dedication to quality and attention to detail. I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices by attending conferences, taking online courses, and experimenting with new technologies. I build functional, beautiful and user-friendly designs. My commitment to innovation ensures that clients receive cutting-edge and effective solutions.</p>
            </div>
        </div>
    )
}
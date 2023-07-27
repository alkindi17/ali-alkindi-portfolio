import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from './PrimaryButton'
import { useLayoutEffect, useRef } from 'react';
import gsap, {Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AboutSection() {

    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef();

    // GSAP Animations
    useLayoutEffect(() => {

        // text animation options
        const animationOptions = {    
            y: 30,
            opacity: 0,
            duration: 1.5,
            ease: Power3.easeOut,
            }

            tl.current = gsap.timeline({scrollTrigger: {
                trigger: "#about",
                markers: false,
                scroller: ".overflow-scroll",
                toggleActions: "restart none none reset",
            }})
                .from("#peep-2", animationOptions)
                .from("#about-text", animationOptions, "-=1.2")
                .from("#about-resume-button", animationOptions, "-=1.2")
        }, []);

    return (
        <div id="about" className="flex flex-row max-md:flex-col gap-16 max-md:gap-8 justify-center max-md:text-center items-center h-fit max-sm:-translate-y-10">
            {/* Image */}
            <div className="w-[250px] max-md:w-[150px] max-sm:w-[120px] basis-1/5">
                <Image id='peep-2' src="peep-2.svg" width={220} height={50} alt={""}/>
            </div>

            {/* Text */}
            <div className="h-full basis-3/5">
                
                <p id='about-text' className="text-lg max-md:text-sm text-justify">I am a passionate and skilled Software Developer specializing in Mobile and Web development with a strong dedication to quality and attention to detail. I am constantly seeking new challenges and opportunities to improve my craft. I stay updated with the latest industry trends and best practices by attending conferences, taking online courses, and experimenting with new technologies. I build functional, beautiful and user-friendly designs. My commitment to innovation ensures that clients receive cutting-edge and effective solutions.</p>
                
                <Link id='about-resume-button' href={'/ali-alkindi-resume.pdf'} target="_blank">
                    <PrimaryButton>
                        <div className='flex flex-row gap-3 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
                                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                            </svg>
                            View Resume
                        </div>
                    </PrimaryButton>
                </Link>

            </div>
        </div>
    )
}
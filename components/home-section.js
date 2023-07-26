import Image from "next/image"
import { useLayoutEffect, useRef} from "react"
import gsap, {Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

export default function HomeSection() {
    
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef();

    // GSAP Animations
    useLayoutEffect(() => {
        
        // Splitting Text
        new SplitType('#home-text-line-1');
        new SplitType('#home-text-line-2', { types: 'words, chars' });
        new SplitType('#home-text-line-3');

        // text animation options
        const textAnimation = {    
            y: 30,
            opacity: 0,
            duration: 1.5,
            ease: Power3.easeOut,
            stagger: 0.02
            }

            tl.current = gsap.timeline({scrollTrigger: {
                trigger: "#home",
                markers: false,
                scroller: ".overflow-scroll",
                toggleActions: "restart none none reset",
            }})
                .from("#peep-1", {
                    y: 50, 
                    opacity: 0, 
                    duration: 1.5, 
                    ease: Power3.easeOut
                })
                .from("#home-text-line-1 .char", textAnimation, "-=1.2")
                .from("#home-text-line-2 .char", textAnimation, "-=1.2")
                .from("#home-text-line-3 .char", textAnimation, "-=1.2")
        }, []);

    
    return (
        <div id="home" className="flex flex-row max-md:flex-col gap-16 max-md:gap-10 justify-center max-md:text-center max-md:items-center items-end h-fit max-sm:-translate-y-10">
            
            {/* Image */}
            <div id="peep-1" className="w-[220px] max-md:w-[180px]">
                <Image src="peep-1.svg" width={220} height={50} alt={""}/>
            </div>


            {/* Text */}
            <div id="home-text" className="h-full">
                <p id="home-text-line-1" className="text-2xl max-md:text-xl">Hello, I&apos;m</p>
                <h1 id="home-text-line-2" className={"font-enriqueta text-8xl max-md:text-6xl"}>Ali <span>Al Kindi</span></h1>
                <h6 id="home-text-line-3" className="text-2xl max-md:text-lg font-bold">A Software Engineer</h6>
            </div>

        </div>
    )
}

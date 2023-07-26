import Image from "next/image"
import { Enriqueta } from "next/font/google"
import { useLayoutEffect, useRef} from "react"
import gsap, {Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

const oleoScript = Enriqueta({ weight: '700', subsets: ['latin'] })

export default function HomeSection() {
    
    gsap.registerPlugin(ScrollTrigger);
    const tl = useRef();

    useLayoutEffect(() => {
        
        new SplitType('#home-text-line-1');
        new SplitType('#home-text-line-2');
        new SplitType('#home-text-line-3');

        tl.current = gsap.timeline({scrollTrigger: {
            trigger: "#home",
            markers: false,
            scroller: ".overflow-scroll",
            toggleActions: "restart reset restart reset",
        }})
            .from("#peep-1", {
                y: 50, 
                opacity: 0, 
                duration: 1.5, 
                ease: Power3.easeOut
            })
            .from("#home-text-line-1 .char", {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: Power3.easeOut,
                stagger: 0.02
                }, "-=1")
            .from("#home-text-line-2 .char", {
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: Power3.easeOut,
                stagger: 0.02
                }, "-=1")
            .from("#home-text-line-3 .char", {    
                y: 50,
                opacity: 0,
                duration: 1.5,
                ease: Power3.easeOut,
                stagger: 0.02
                }, "-=1")
      }, []);

    
    return (
        <>
            <div id="home" className="flex flex-row max-md:flex-col gap-16 max-md:gap-10 justify-center max-md:text-center max-md:items-center items-end h-fit max-sm:-translate-y-10">
                
                {/* Image */}
                <div id="peep-1" className="w-[220px] max-md:w-[180px]">
                    <Image src="peep-1.svg" width={220} height={50} alt={""}/>
                </div>


                {/* Text */}
                <div id="home-text" className="h-full">
                    <p id="home-text-line-1" className="text-2xl max-md:text-xl">Hello, I&apos;m</p>
                    <h1 id="home-text-line-2" className={oleoScript.className + " text-8xl max-md:text-6xl"}>Ali Al&nbsp;Kindi</h1>
                    <h6 id="home-text-line-3" className="text-2xl max-md:text-lg font-bold">A Software Engineer</h6>
                </div>

            </div>
        </>

    )
}

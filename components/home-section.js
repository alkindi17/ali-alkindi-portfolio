import Image from "next/image"
import { Enriqueta } from "next/font/google"
import { useEffect, useState, useRef, useLayoutEffect} from "react"
import gsap, {Power3} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const oleoScript = Enriqueta({ weight: '700', subsets: ['latin'] })

export default function HomeSection() {
    
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
            gsap.from("#home", {
                x: -50, 
                opacity: 0.1, 
                duration: 1.5, 
                ease: Power3.easeOut,
                scrollTrigger: {
                    trigger: "#home",
                    markers: false,
                    scroller: ".overflow-scroll",
                    toggleActions: "restart reset restart reverse",
                }
            })    
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
                    <p className="text-2xl max-md:text-xl">Hello, I&apos;m</p>
                    <h1 className={oleoScript.className + " text-8xl max-md:text-6xl"}>Ali Al&nbsp;Kindi</h1>
                    <h6 className="text-2xl max-md:text-lg font-bold">A Software Engineer</h6>
                </div>

            </div>
        </>

    )
}

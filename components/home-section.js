"use client";
import getCurrentTheme from "@/functions/theme"
import Image from "next/image"
import { Oleo_Script } from "next/font/google"

const oleoScript = Oleo_Script({ weight: '400', subsets: ['latin'] })

export default function HomeSection() {
    return (
        <div className="container mx-auto h-full items-center flex justify-center">
            
            <div className="flex flex-row max-sm:flex-col gap-16 max-sm:gap-10 justify-center items-center sm:items-end h-fit max-sm:-translate-y-10">
                
                {/* Image */}
                <div className="w-[220px] max-sm:w-[180px]">
                    {getCurrentTheme()=="light"?
                        <Image src="peep-1-light.svg" width={220} height={50}/>
                    :
                        <Image src="peep-1-dark.svg" width={220} height={50}/>
                    }
                </div>

                {/* Text */}
                <div className="h-full">
                    <p className="text-2xl max-sm:text-xl">Hello, I'm</p>
                    <h1 className={oleoScript.className + " text-8xl max-sm:text-6xl"}>Ali Al Kindi</h1>
                    <h6 className="text-2xl max-sm:text-lg font-bold">A Software Engineer</h6>
                </div>

            </div>

        </div>
    )
    
}

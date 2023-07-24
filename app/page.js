"use client";

import NavBar from "@/components/nav-bar"
import HomeSection from "@/components/home-section";


export default function Home() {
  return (
    <>
      <NavBar />

      <main className="snap-y w-screen h-screen snap-mandatory overflow-scroll">

        <div className="snap-always snap-start w-screen h-screen">
          <HomeSection />
        </div>

        <div className="snap-always snap-start w-screen h-screen">
          <img className="w-screen h-screen" src="https://images.unsplash.com/photo-1581617069577-4fa83042b2b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" />
        </div>
        
      </main>
    </>
  )
}

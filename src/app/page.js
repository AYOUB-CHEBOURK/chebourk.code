"use client"


import { useEffect } from "react";
import Hero from "./components/header/hero";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  useEffect (()=>{
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <main>
      <Hero/>
    </main>
  );
}

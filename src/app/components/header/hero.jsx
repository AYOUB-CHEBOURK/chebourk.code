"use client"

import styles from "./hero.module.css"
import Image from "next/image"
import hero_img from "../../../../public/hero-img.webp"
// import icon_lamp from "../../../../public/iconLamp.svg"
// import { FaRegFilePdf } from "react-icons/fa6";
import { motion } from "framer-motion"
// import { TypeAnimation } from 'react-type-animation';
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";

const Hero = () => {

  const {mode } = useContext(ThemeContext)

  const download_cv = () => {
    download.href = canvas.toDataURL(hero_img);
    console.log(download_cv)
  }

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}>
      {/* <div className={styles.hero}>
        <div className="container">
          <div className={styles.content}>
            <Image src={hero_img} alt="image hero" className={styles.img} />
            <div className={styles.text}>
              <h1 className={styles.h1}>Turning Vision Into Reality
                <TypeAnimation
                  sequence={[
                    'With Code ', // Types 'One'
                    2000, // Waits 1s
                    'And Design.', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    () => {
                      console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                    }
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1em', }}
                />
              </h1>
              <p className={styles.p}>As a skilled Front-End Developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
              <button className={styles.resume} style={mode === "dark" ? {color: "white"} : {color: "black"}}>resume <FaRegFilePdf className={styles.icon} onClick={download_cv}/></button>
            </div>
            <Image src={icon_lamp} alt="image hero" className={styles.icon_lamp} />
          </div>
        </div>
      </div> */}
    </motion.div>
  )
}

export default Hero
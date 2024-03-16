"use client"


import styles from "./about.module.css"
import about_img from "../../../../public/about-img.jpg"
import html from "../../../../public/html5.svg"
import css from "../../../../public/css3.svg"
import javascript from "../../../../public/javascript.svg"
import bootstrap from "../../../../public/bootstrap.svg"
import react from "../../../../public/react.svg"
import next from "../../../../public/next-js.svg"
import Lottie from "lottie-react";
import animation from "../../../../public/Animation - 1709982236795.json"
// import animation from "../../../../public/Animation - 1709981756088.json"
import Image from "next/image"
import { FaGratipay, FaCheck, FaCode } from "react-icons/fa";
import { motion } from "framer-motion"
import CountUp from 'react-countup';
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";
import Service from "@/app/components/section/service"


const About = () => {

  const { mode } = useContext(ThemeContext)

  const counterData = [
    {id: 1, icon: <FaGratipay />, number: 90, title: "happy clients"},
    {id: 2, icon: <FaCheck />, number: 10, title: "projects completed"},
    {id: 4, icon: <FaCode />, number: 1446, title: "liens of code"}
  ]

  const skillsData = [
    { id: 1, title: "Html5", icon: html },
    { id: 2, title: "Css3", icon: css },
    { id: 3, title: "Bootstrap", icon: bootstrap },
    { id: 4, title: "Java Script", icon: javascript },
    { id: 5, title: "React Js", icon: react },
    { id: 6, title: "Next Js", icon: next },
  ]


  return (
    <div className={styles.about}>
      <div className="container">
        <motion.div
          initial={{ y: "-200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.5 }}>
          <h1 className={styles.h1}>Passion Fuels Purpose! </h1>
          <div className={styles.content}>
            <div className={styles.text}>
              <p className={styles.p}>I'm Ayoub Chebourk 20 ans I from Morocco, and Im an experienced front-end developer with 2 years of expertise and a deep understanding of
                using React Js, Next Js.
              </p>
              <p className={styles.p}>I will convert your PSD or Figma design
                as per your requirement, which will be completely mobile-friendly and functional.
              </p>
              <p className={styles.p}>I believe in delivering quality code, real-time updates, pixel-perfect
                design, and optimization of websites.
              </p>
            </div>
            <div className={styles.about_img} style={mode === "dark" ? { border: "2px solid white", boxShadow: "15px 14px 0px -5px white" } : { border: "var(--border)", boxShadow: "var(--box-shadow)" }}>
              <Image src={about_img} alt="image about" className={styles.img} />
            </div>
            <div className={styles.counter}>
              {counterData.map((items, id) => (
                <div className={styles.box} key={id}>
                  <i className={styles.i}>{items.icon}</i>
                  <h2 className={styles.h2}><CountUp enableScrollSpy duration={5} end={items.number} /></h2>
                  <h3 className={styles.h3}>{items.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <div className={styles.skills}>
          <h1 className={styles.skills_h1} data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1000"> skills</h1>
          <p className={styles.skills_p} data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
            Passionate Front End Developer with expertise in modern web technologies and Develope highly interactive Front end / User Interfaces web application.
          </p>
          <div className={styles.skills_content}>
            <Lottie animationData={animation} loop={true} className={styles.animation}
              data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" 
            />
            <div className={styles.icons_skills} data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1000">
              {skillsData.map((items, id) => (
                <div className={styles.icon_skills} key={id}>
                  <Image src={items.icon} alt="icon skills" className={styles.icon} />
                  <h2 className={styles.skills_h2}>{items.title}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Service />
      </div>
    </div>
  )
}

export default About
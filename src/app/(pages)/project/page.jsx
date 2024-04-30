"use client"

import styles from "./project.module.css"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import image1 from "../../../../public/ecommerce.png"
import image2 from "../../../../public/iptv-global.png"
import image3 from "../../../../public/editor-image.png"
import image4 from "../../../../public/traduire.png"
import image5 from "../../../../public/xo.png"
import image6 from "../../../../public/blog.png"
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";



const Project = () => {

  const {mode } = useContext(ThemeContext)

  const projects = [
    { id: 1, img: image2, category: "Website Template", title: "Website Template iptv" , URL: "https://global-iptv.vercel.app/" },
    { id: 2, img: image3, category: "Website", title: " Editor Images Website" , URL: "https://ayoub-chebourk.github.io/editor-image/" },
    { id: 3, img: image4, category: "Website Template", title: "Website translation video" , URL: "https://traduire-eight.vercel.app/" },
    { id: 4, img: image5, category: "Website ", title: "Website game XO" , URL:"https://ayoub-chebourk.github.io/XO-GAME"},
  ]


  return (
    <div className={styles.project}>
      <div className="container">
      <motion.div
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.5 }}>
        <h1 className={styles.h1}>My Projects</h1>
      </motion.div>
      <div className={styles.content}>
        <motion.div
          initial={{ y: "200vh" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.8 }} className={styles.motion}>
          <div className={styles.box_ecom} style={mode === "dark" ? {border: "2px solid white" , boxShadow: "15px 14px 0px -5px white"} : {border: "var(--border)" , boxShadow: "var(--box-shadow)"}}>
            <Image src={image1} alt="image project" className={styles.img_ecom} />
            <div className={styles.text}>
              <h2 className={styles.h2}>E-commerce Web Site</h2>
              <p className={styles.p}>A feature E-commerce Web Site App using React Js, Bootstrap, Redux, React Router. It shows detail regarding almost all the E-commerce. You can easily convert the price in your local currency.</p>
              <Link href="https://gander-ecommerce.vercel.app/">
                <button className={styles.visit_project}>Visit Project</button>
              </Link>
            </div>
          </div>
          <div className={styles.boxes}>
            {projects.slice(0, 2).map((items, id) => (
              <div className={styles.box} key={id} style={mode === "dark" ? {border: "2px solid white" , boxShadow: "15px 14px 0px -5px white"} : {border: "var(--border)" , boxShadow: "var(--box-shadow)"}}
              data-aos="fade-up" data-aos-duration="1000">
                <div className={styles.img_hover}>
                  <Image src={items.img} alt="image project" className={styles.img} />
                </div>
                <div className={styles.text}>
                  <span className={styles.span}>{items.category}</span>
                  <h2 className={styles.h3}>{items.title}</h2>
                  <Link href={items.URL} >
                    <button className={styles.button} style={mode === "dark" ? {color: "white"} : {}}>Visit Project</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className={styles.box_ecom} style={mode === "dark" ? {border: "2px solid white" , boxShadow: "15px 14px 0px -5px white"} : {border: "var(--border)" , boxShadow: "var(--box-shadow)"}}
        data-aos="fade-up" data-aos-duration="1000">
          <Image src={image6} alt="image project" className={styles.img_ecom} />
          <div className={styles.text}>
            <h2 className={styles.h2}>Blog health News Web Site</h2>
            <p className={styles.p}>A feature Blog Web Site App using Next Js 14 and Seo. It shows detail regarding almost all the E-commerce. You can easily convert the price in your local currency.</p>
            <Link href="https://health-news-rho.vercel.app/">
              <button className={styles.visit_project}>Visit Project</button>
            </Link>
          </div>
        </div>
        <div className={styles.boxes}>
          {projects.slice(2, 4).map((items, id) => (
            <div className={styles.box} key={id} style={mode === "dark" ? {border: "2px solid white" , boxShadow: "15px 14px 0px -5px white"} : {border: "var(--border)" , boxShadow: "var(--box-shadow)"}}
            data-aos="fade-up" data-aos-duration="1000">
              <div className={styles.img_hover}>
                <Image src={items.img} alt="image project" className={styles.img} />
              </div>
              <div className={styles.text}>
                <span className={styles.span}>{items.category}</span>
                <h2 className={styles.h3}>{items.title}</h2>
                <Link href={items.URL} >
                  <button className={styles.button} style={mode === "dark" ? {color: "white"} : {}}>Visit Project</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project
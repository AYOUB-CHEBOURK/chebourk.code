"use client"
import styles from "./footer.module.css"
import logo from "../../../../public/logo.png"
import logo_dark from "../../../../public/logo-dark.png"
import facebook from "../../../../public/facebook.png"
import instagram from "../../../../public/instagram.png"
import linkedin from "../../../../public/linkedin.png"
import github from "../../../../public/github-dark.png"
import Image from "next/image"
import Link from "next/link"
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";

const Footer = () => {

    const {mode } = useContext(ThemeContext)

    const iconMedia = [
        { id: 1, img: facebook , link_url: "https://www.facebook.com/ayoub.chbourk/" },
        { id: 2, img: instagram , link_url: "https://www.instagram.com/chebourk_111/" },
        { id: 3, img: linkedin , link_url: "https://www.linkedin.com/in/che-bourk-947406273/" },
        { id: 4, img: github, link_url: "https://github.com/AYOUB-CHEBOURK?tab=repositories" },
    ]

  return (
    <div className={styles.footer}><hr className="hr"/>
        <div className="container">
            <div className={styles.content}>
            <ul className={styles.iconMedia}>
                {iconMedia.map(({ img, link_url, id }) => (
                    <li key={id}>
                        <Link href={link_url} >
                            <Image src={img} alt="icon image" width={24} height={24}/>
                        </Link>
                    </li>
                )) } 
            </ul>
            <p className={styles.p}> &copy; 2023 <span className={styles.span}>Chebourk</span> All Right Reserved</p>
            <Image src={mode === "dark" ? logo : logo_dark} alt="logo" width={150}/>
            </div>
        </div>
    </div>
  )
}

export default Footer
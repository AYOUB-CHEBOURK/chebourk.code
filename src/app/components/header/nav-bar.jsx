"use client"


import "./navbar.css"
import Link from "next/link"
import {useState } from "react";
import { usePathname } from "next/navigation";
import { FaBars , FaX } from "react-icons/fa6";
import Image from "next/image";
import logo from "../../../../public/logo.png"
import logo_dark from "../../../../public/logo-dark.png"
import facebook from "../../../../public/facebook.png"
import instagram from "../../../../public/instagram.png"
import linkedin from "../../../../public/linkedin.png"
import github_dark from "../../../../public/github-dark.png"
import DarkMode from "../section/darkMode";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/themeContext";



const NavBar = () => {
    const [responsive, setResponsive] = useState(false);
    const pathName = usePathname()
    const {mode } = useContext(ThemeContext)

    const links = [
        { id: 1, title: "Home", link_url: "/" },
        { id: 2, title: "About", link_url: "/about" },
        { id: 3, title: "Project", link_url: "/project" },
        { id: 4, title: "contact", link_url: "/contact" },
    ]

    const iconMedia = [
        { id: 1, img: facebook , link_url: "https://www.facebook.com/ayoub.chbourk/" },
        { id: 2, img: instagram , link_url: "https://www.instagram.com/chebourk.code/" },
        { id: 3, img: linkedin , link_url: "https://www.linkedin.com/in/che-bourk-947406273/" },
        { id: 4, img: github_dark , link_url: "https://github.com/AYOUB-CHEBOURK?tab=repositories" },
    ]

    const setHideMenu = () => {
        setResponsive(!responsive)
    }

    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <Link href='/'>
                        <Image src={mode === "dark" ? logo : logo_dark} width={150} alt="logo"/>
                    </Link>
                </div>
                <div className={responsive ? "hideMenu" : "nav"}>
                    <ul>
                        {links.map(({ title, link_url, id }) => (
                            <li key={id}>
                                <Link href={link_url} className={pathName === link_url ? "focus" : ""} onClick={setHideMenu}
                                style={mode === "dark" ? {color: "white"} : {}}>
                                    {title}
                                </Link>
                            </li>
                        )) } 
                    </ul>
                </div>
                <ul className="icons">
                    {iconMedia.map(({ img, link_url, id }) => (
                        <li key={id}>
                            <Link href={link_url} >
                                <Image src={img} alt="icon image" width={24} height={24} className='iconMedia'/>
                            </Link>
                        </li>
                    ))} 
                    <DarkMode/>
                </ul>
                <i className={responsive ? "show" : "notShow"}>
                    <FaBars className="iconBars" onClick={setHideMenu}/>
                    <FaX className="iconClose" onClick={setHideMenu}/>
                </i>
            </div>
        </nav>
    )
}

export default NavBar

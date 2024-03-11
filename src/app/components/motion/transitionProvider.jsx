"use client"

import styles from "./motion.module.css"
import { AnimatePresence } from "framer-motion"
import { motion } from "framer-motion"
import NavBar from "../header/nav-bar"
import Footer from "../footer/footer"
import { usePathname } from "next/navigation"
import { ThemeProvider } from "@/app/context/themeContext"

const TransitionProvider = ({ children }) => {

    const pathName = usePathname()

    return (
        <ThemeProvider>
            <AnimatePresence mode="wait">
                <div key={pathName}>
                    <motion.div className={styles.motion_1}
                        animate={{ height: "0vh" }}
                        exit={{ height: "140vh" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }} />
                    <motion.div className={styles.motion_3}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        {pathName.substring(1)}
                    </motion.div>
                    <motion.div className={styles.motion_2}
                        initial={{ height: "140vh" }}
                        animate={{ height: "0vh", transition: { delay: 0.8 } }} />
                    <NavBar />
                    {children}
                    <Footer />
                </div>
            </AnimatePresence>
        </ThemeProvider>
    )
}

export default TransitionProvider
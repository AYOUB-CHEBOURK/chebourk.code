"use client"

import styles from "./contact.module.css"
import Lottie from "lottie-react";
import animation from "../../../../public/Animation - 1709551186546.json"
// import animation from "../../../../public/Animation - 1709550713527.json"
import { motion } from "framer-motion"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";
import { FaRegPaperPlane } from "react-icons/fa6";

const Contact = () => {

  const form = useRef();
  const [error, setError] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_70zbqwz', 'template_7fzjexl', form.current, 'jXjEIFp2QgXaQac3D')
      .then((result) => {
        console.log(result.text);
        showAlert();
        alert("Your message has been sent"); // Use alert instead of Alert
        window.location.reload()
      }, (error) => {
        setError(error.text);
      });
  };


  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5 }}>
      <div className={styles.contact}>
        <div className="container">
          <h1 className={styles.h1}>Contact Us</h1>
          <div className={styles.content}>
            <Lottie animationData={animation} loop={true} className={styles.animation} />
            <div className={styles.form_contact}>
              <form className={styles.form} ref={form} onSubmit={sendEmail}>
                <input className={styles.main_input} type='text' name='name' placeholder='Your Name' required autoFocus></input>
                <input className={styles.main_input} type='email' name='email' placeholder='Your Email' required></input>
                <textarea className={styles.textarea_input} name="message" placeholder='Your Message'></textarea>
                {error && <p>{error}</p>}
                <button className={styles.submit_input}>Send Message <FaRegPaperPlane /></button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contact
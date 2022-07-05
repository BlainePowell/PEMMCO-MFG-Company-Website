import styles from "../styles/Home.module.css";
import { useState, useRef } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import Modal from './components/modal';
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Backdrop from "./components/backdrop";
import { motion } from "framer-motion";

function Quote() {
    const [ isOpen, setOpen ] = useState(false);
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
      window.alert('Thank you for contacting us. We will get back to you shortly.')
  
      emailjs
        .sendForm(
          "service_2uzqx2l",
          "template_a2pbyo8",
          form.current,
          "NSnQOkLKXEKVN1xpF"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    const variants = {
      open: { opacity: 1, x: 0, transition: {duration: .3} },
      closed: { opacity: 0, x: "0%" },
    }


    return (
        <div className={styles.stickyquote}>
        {isOpen && <Backdrop onClick={() => {
    setOpen(false)}}
    />}
  <div className={styles.freeconq}>
        <h1>Request A Free Consultation Today</h1>
        <div>
          <label>
            <input
              className={styles.names}
              placeholder="Full Name"
              type="text"
              name="req_name"
            />
            <input className={styles.phones} placeholder="Phone #" type="text" name="req_phone"/>
            <input className={styles.emails} placeholder="Email" type="text" name="req_email"/>
            <textarea
              className={styles.helps}
              placeholder="How Can We Help You?"
              type="text"
              name="req_help"
            />
          </label>
          <button onClick={sendEmail}>Submit Request</button>
        </div>
      </div>
  <img src="pemdrone-min.jpeg" className={styles.vidq} />
  <div className={styles.nava}>
  <div className={styles.hamburger}>
    <Hamburger toggled={isOpen} toggle={setOpen}/>
    </div>
    <div className={styles.logoa}>
    <img
      src="pemmcomfg-removebg-preview.png"
      onClick={() => {
        window.location.href = "http://www.pemmcomfg.com/";
      }}
    />
    </div>
    <motion.nav
    animate={isOpen ? "open" : "closed"}
    variants={variants}
    >
    {isOpen && <Modal />}
    </motion.nav>
    <div className={styles.serviceshh}>        
          <Link href="/">
          <a className={styles.serviceshome}>HOME</a>
        </Link>
        </div>
        <div className={styles.servicesh}>        
          <Link href="/services">
          <a className={styles.serviceshome}>SERVICES</a>
        </Link>
        </div>
        <div className={styles.contact}>        
          <Link href="/certifications">
          <a className={styles.servicescon}>CERTIFICATIONS</a>
        </Link>
        </div>
        <div className={styles.quoter}>
        <Link href="/quote">
          <a className={styles.serviceshome}>QUOTE REQUEST</a>
        </Link>
          </div>
        <div className={styles.certh}>        
          <Link href="/contact">
          <a className={styles.certsshome}>CONTACT US</a>
        </Link>
        </div>
        <div className={styles.newsh}>        
      <Link href="/news">
      <a className={styles.serviceshome}>NEWS</a>
    </Link>
    </div>
        <div className={styles.applya}>
        <Link href="/apply">
          <a>APPLY</a>
        </Link>
          </div>
  </div>
  </div>
    )
}

export default Quote;
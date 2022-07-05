import { useEffect, useState } from "react";
import React, { useCallback, useRef } from "react";
import Aos from "aos";
import emailjs from "@emailjs/browser";
import "aos/dist/aos.css";
import { Transition } from "react-transition-group";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import "/public/machining.jpeg";
import { Sling as Hamburger } from 'hamburger-react';
import Backdrop from './components/backdrop';
import Modal from './components/modal';
import Footer from './components/footer';
import Social from "./components/social";
import { motion } from 'framer-motion'

function Honda() {
    const [ isOpen, setOpen ] = useState(false);

    const variants = {
        open: { opacity: 1, x: 0, transition: {duration: .3} },
        closed: { opacity: 0, x: "0%" },
      }

    return (
        <div className={styles.stickyhon}>
        {isOpen && <Backdrop onClick={() => {
    setOpen(false)}}
    />}
  <div className={styles.welcomehome}>
  <h1>
    PEMMCO MFG In The News
  </h1>
  </div>
  <img src="bizness.jpeg" className={styles.vid} />
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
      <motion.nav
    animate={isOpen ? "open" : "closed"}
    variants={variants}
    >
    {isOpen && <Modal />}
    </motion.nav>
  </div>
  <div className={styles.blog}>
    <h1>PEMMCO Manufacturing Receives Award</h1>
    <i>by Brian Powell | July 11, 2018</i>
    <p>PEMMCO Manufacturing received the Excellence in Delivery Award at the 2018 Honda Power & Equipment Supplier Day</p>
    <img src="honda.jpeg" />
  </div>
  <div className={styles.blogfoot}>
                <Footer />
                <Social />
          </div>
  </div>
    )}

    export default Honda;
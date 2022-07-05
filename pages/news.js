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

function News() {
    const [ isOpen, setOpen ] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0, transition: {duration: .3} },
        closed: { opacity: 0, x: "0%" },
      }

    return (
        <div className={styles.stickyhome}>
        {isOpen && <Backdrop onClick={() => {
    setOpen(false)}}
    />}
  <div className={styles.welcomehome}>
  <h1>
    PEMMCO Mfg In The News
  </h1>
  <h2>
  PEMMCO Mfg In The News
  </h2>
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
      <Link href="/contact">
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
  <div className={styles.news}>
              <h1>
                Keep up with<span>&nbsp;PEMMCO Mfg.</span>
              </h1>
              <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:6939550223115464704"  
              frameborder="0" allowfullscreen="" title="Embedded post" scrolling="no"/>
              </div>
              <div className={styles.selection}>
                <h1>News</h1>
                <div className={styles.article}>
                <img src="honda.jpeg" />
                    <h1>Honda Excellence in Delivery Award <i>&nbsp;7&nbsp;-&nbsp;1&nbsp;-&nbsp;2018&nbsp;</i></h1>
                    <Link href='/honda'>
                    <h3> 
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </h3>
                    </Link>
                    </div>
                    <div className={styles.article}>
                    <img src="apprentice.jpeg" />
                    <h1>Proud Partner of Apprenticeship Randolph<i>&nbsp;12&nbsp;-&nbsp;27&nbsp;-&nbsp;2017&nbsp;</i></h1>
                    <Link href='apprentice'>
                    <h3> 
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </h3>
                    </Link>
                    </div>
                    <div className={styles.article}>
                    <img src="carbon.png" />
                    <h1>PEMMCO Mfg. Reduces Carbon Footprint Again!<i>&nbsp;9&nbsp;-&nbsp;20&nbsp;-&nbsp;2017&nbsp;</i></h1>
                    <h3> 
                        <a href="carbon1.pdf">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </a>
                    </h3>
                    </div>
                    <div className={styles.article}>
                    <img src="carbon.png" />
                    <h1>PEMMCO Mfg. Reduces Carbon Footprint By Recycling<i>&nbsp;8&nbsp;-&nbsp;23&nbsp;-&nbsp;2017&nbsp;</i></h1>
                    <h3> 
                        <a href="waste-watchers.pdf">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </a>
                    </h3>
                    </div>
                    <div className={styles.article}>
                    <img src="triad.jpeg" />
                    <h1>PEMMCO Mfg. in Latest Triad Business Journal Release<i>&nbsp;1&nbsp;-&nbsp;18&nbsp;-&nbsp;2013&nbsp;</i></h1>
                    <h3> 
                        <a href="https://www.bizjournals.com/bizjournals/how-to/growth-strategies/2013/01/pemmco-manufacturing-sees-ample.html">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </a>
                    </h3>
                    </div>
                    <div className={styles.article}>
                    <img src="pemdrone-min.jpeg" />
                    <h1>Triad's Fast 50 2012 - PEMMCO Mfg.<i>&nbsp;9&nbsp;-&nbsp;28&nbsp;-&nbsp;12&nbsp;</i></h1>
                    <h3> 
                        <a href="https://www.bizjournals.com/triad/print-edition/2012/09/28/triads-fast-50-2012---no-6-pemmco.html">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </a>
                    </h3>
                    </div>
                    <div className={styles.article}>
                    <img src="pemmco.jpeg" />
                    <h1>PEMMCO Mfg. Grand Opening!<i>&nbsp;11&nbsp;-&nbsp;14&nbsp;-&nbsp;2011&nbsp;</i></h1>
                    <h3> 
                        <a href="https://www.bizjournals.com/triad/news/2011/11/14/pemmco-opens-new-asheboro-facility.html">
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="14" fill="currentColor" class="bi bi-arrow-right" >
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                    </svg>
                    </a>
                    </h3>
                    </div>
              </div>
              <div className={styles.newsfoot}>
                <Footer />
                <Social />
          </div>
              </div>
    )
}

export default News;
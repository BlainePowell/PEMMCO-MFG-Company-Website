import Link from "next/link";
import styles from "../styles/Home.module.css";
import Modal from './components/modal';
import Backdrop from "./components/backdrop";
import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Aos from "aos";
import "aos/dist/aos.css";
import { Sling as Hamburger } from 'hamburger-react';
import Footer from "./components/footer";
import Social from "./components/social";
import Spline from "./components/spline";
import Engrave from "./components/engrave";
import { motion } from "framer-motion";

function New() {
  const [ isOpen, setOpen ] = useState(false)
  const [ engrave, setEngrave ] = useState(true);
  const [ spline, setSpline ] = useState(false);
  const form = useRef();

  const variants = {
    open: { opacity: 1, x: 0, transition: {duration: .3} },
    closed: { opacity: 0, x: "0%" },
  }

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

  useEffect(() => {
    Aos.init({ duration: 1000, once: 'true' });
  }, []);

  return (
    <div>
    <div className={styles.sticky}>
      {isOpen && <Backdrop onClick={() => {
        setOpen(false)}}
        />}
      <div className={styles.welcomeserv}>
      <h1>
        Serving the CNC Industry Since 1960
      </h1>
      </div>
      <video className={styles.vid} autoPlay loop muted>
        <source src="PEM32 (1).mp4" type="video/mp4" />
      </video>
      <div className={styles.navs}>
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
      <div className={styles.precision}>
        <h1 data-aos="fade-right">
          Precision CNC Machining
        </h1>
        <p1>
        PEMMCO Mfg. is a highly successful CNC machining facility due to the amount of attention we put towards precision 
        and accuracy on every single part we make on a day to day basis. PEMMCO Mfg. runs an average of 10,000 parts per day 
        and must stay on top of the latest technology to continue to be a top competitor in the large OEM and aftermarket supply chain.
        </p1>
        <img src="CNCT.jpeg" className={styles.millingimg} data-aos="fade-up"/>
        <p className={styles.millingp}>CNC Milling</p>
        <img src="CNCM.jpeg" className={styles.turningimg} data-aos="fade-up"/>
        <p className={styles.turningp}>CNC Turning</p>
        <img src="CNCA.jpeg" className={styles.assemblyimg} data-aos="fade-up"/>
        <p className={styles.assemblyp}>Assembly</p>
      </div>
      <div className={styles.mcapabilities}>
        <img src="milling.jpeg" />
        <h2>Milling Capabilities</h2>
        <p>
        Our 3, 4, and 5 axis Vertical Mills are perfect for handling your smaller components,
        Our 10 Horizontal Mills are great for handling your larger components
        that require fast cycle times and higher volumes. 
        With our integrated pallet change systems, the down time is practically seconds between cycles.
        </p>
      <div className={styles.tcapabilities}>
        <img src="turning.jpeg" />
        <h1>Turning Capabilities</h1>
        <p>
        PEMMCO Mfg. has invested in the latest technology when it comes to our lathe division.
         14 of our 15 CNC Lathes are fully automated by either Robots or Bar-feeders. 
         The automation drastically reduces your cost of components and you consistently 
         receive your parts on-time due to the utilization of automation.
         We can manufacture parts from the size of a pencil tip to the size of a car tire.
        </p>
      </div>
      <div className={styles.acapabilities}>
        <img src="assembly.jpeg" />
        <h1>Assembly</h1>
        <p>
          At PEMMCO Mfg. we offer the option to assemble your parts before we ship them to you. 
          In fact, we have a whole department dedicated to this procedure.
          With our ability to do assembly, we lower your bottom-line and get your parts to you faster!
        </p>
      </div>
      </div>
      <div className={styles.video}>
        <h1 data-aos='fade-right'>More Than Just CNC.</h1>
        <p>
        Located in the Asheboro, North Carolina, we are able to offer quick lead times, 
        low cost and exceptional quality from our  75,000 sq. ft. facility built in 2011.  
        Our robust Quality System is backed by ISO 9001:2015 & IATF 16949:2016 certifications which we have held for over 10 years.  
        Our privately held company is here to provide you with the absolute highest of quality parts while still keeping your cost down.
        </p>
        <div className={styles.rickimgs}>
          <div className={styles.rickimg1}>
        <img src="hack.jpeg" className={styles.waterimg} data-aos="fade-up"/>
        <p>Manufacturing Engineering</p>
        </div>
        <div className={styles.rickimg2}>
        <img src="waterjet2.jpeg" className={styles.engimg} data-aos="fade-up"/>
        <p>Waterjet Cutting</p>
        </div>
        <div className={styles.rickimg3}>
        <img src="metrology.jpeg" className={styles.qimg} data-aos="fade-up"/>
        <p>Metrology</p>
        </div>
        </div>
      </div>
          <div className={styles.secapabilities}>
          <img src="engineering.jpeg" />
        <h2>Manufacturing Engineering</h2>
        <p>
        Our Vertical Mills are perfect for handling your smaller components that do not have a very large annual usage. 
        Our Horizontal Mills are great for handing your larger components that require fast cycle times and higher annual volumes. 
        With our integrated pallet change systems, the down time is practically seconds between cycles.
        </p>
          <div className={styles.tcapabilities}>
        <img src="metrology.jpeg" />
        <h1>Metrology</h1>
        <p>
          We use GD & T to accuratelly measure parts that conform to our customers values and dimensions using our highly accurate 
          Computerized Measuring Machines (CMM).
          This allows us to measure our parts down to microns.
          We also keep track with measuring tools on the shop floor to ensure our quality system is always in check.
          This allows us to consistently make quality customer parts.
        </p>
      </div>
      <div className={styles.acapabilities}>
        <img src="waterjet.jpeg" />
        <h1>Waterjet Cutting</h1>
        <p>
          At PEMMCO Mfg. we offer the option to assemble your parts before we ship them to you. 
          In fact, we have a whole department dedicated to this procedure.
          With our ability to do assembly, we lower your bottom-line and get your parts to you faster!
        </p>
      </div>
          </div>
          <div className={styles.explore}>
          <h1>Explore Our Other Services</h1>
      </div>
      <div className={styles.other}>
<div className={styles.other3} onMouseOver={() => {
          setEngrave(true);
          setSpline(false);
        }}>
<h1  style={{
  color: engrave ? '#022652' : '#E6E6E6',
}}>Engraving</h1>
<div  style={{
  backgroundColor: engrave ? '#022652' : '#E6E6E6',
}}/>
</div>
<div className={styles.other4} onMouseOver={() => {
          setEngrave(false);
          setSpline(true);
        }}>
<h1  style={{
  color: spline ? '#022652' : '#E6E6E6',
}}>Spline Rolling</h1>
<div style={{
  backgroundColor: spline ? '#022652' : '#E6E6E6',
}}/>
</div>
      </div>
      {engrave && <Engrave />}
      {spline && <Spline />}
      </div>
      <div className={styles.freecons}>
        <h1>Request A Free Consultation Today</h1>
       <form ref={form} onSubmit={sendEmail}>
        <div>
          <label>
            <input
              className={styles.names}
              placeholder="Full Name"
              type="text"
              name="req_name"
            />
            <input className={styles.phones} placeholder="Phone #" type="text"  name="req_phone"/>
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
       </form>
        </div>.
      <div className={styles.youtube}>
      <iframe src="https://www.youtube.com/embed/6ckddM7zpqc" />
      </div>
      <div className={styles.servfoot}>
                <Footer />
                <Social/>
          </div>
        </div>
  );
}

export default New;

import styles from "../styles/Home.module.css";
import { useState } from 'react';
import { Sling as Hamburger } from 'hamburger-react';
import Modal from './components/modal';
import Footer from "./components/footer";
import Social from "./components/social";
import Link from "next/link";
import Backdrop from "./components/backdrop";
import { motion } from "framer-motion";


function Contact() {
    const [ isOpen, setOpen ] = useState(false);

    const variants = {
      open: { opacity: 1, x: 0, transition: {duration: .3} },
      closed: { opacity: 0, x: "0%" },
    }

    return (
        <div className={styles.stickycon}>
            {isOpen && <Backdrop onClick={() => {
        setOpen(false)}}
        />}
      <div className={styles.welcomeserv}>
      <h1>
        Just A Phone Call Away
      </h1>
      </div>
      <img src="pemmco.jpeg" className={styles.vid} />
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
      <div className={styles.map}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.602426473077!2d-79.83652868431618!3d35.66216578019872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88536f54173f88c9%3A0x76e8693dd50baef7!2sPEMMCO%20Manufacturing!5e0!3m2!1sen!2sus!4v1655473495801!5m2!1sen!2sus"
      />
      </div>
      <div className={styles.info}>
        <h1>PEMMCO MFG. <p>631 Veterans Loop Road Asheboro, NC 27205</p></h1>
        <h2>Email: <p> brianmp@pemmcomfg.com</p></h2>
        <h3>Phone: <p>336-625-1122</p></h3>
        <h4>Fax: <p>336-626-5358</p></h4>
      </div>
      <div className={styles.careerq}>
      <h1>Career<p>For inquiries regarding a career at PEMMCO, please contact...</p></h1>
      <h2>Dee Eaton<i>&nbsp;&nbsp;Human&nbsp;Resources&nbsp;</i></h2>
      <h3>Phone: <p>336-625-1122</p></h3>
      <h4>Email: <p>deee@pemmcomfg.com</p></h4>
      <h1>Business<p>For business inqueires with PEMMCO, please contact...</p></h1>
      <h2>Rick Powell<i>&nbsp;&nbsp;President</i></h2>
      <h3>Phone: <p>Rick Powell x 1202</p></h3>
      <h4>Email: <p>rickp@pemmcomfg.com</p></h4>
      <h2>Brian R. Powell<i>&nbsp;&nbsp;Plant&nbsp;Manager&nbsp;</i></h2>
      <h3>Phone: <p>Brian R. Powell x 1206</p></h3>
      <h4>Email: <p>brianp@pemmcomfg.com</p></h4>
      <h2>Brian M. Powell<i>&nbsp;&nbsp;National&nbsp;Sales&nbsp;Manager</i></h2>
      <h3>Phone: <p>Brian M. Powell x 1207</p></h3>
      <h4>Email: <p>brianmp@pemmcomfg.com</p></h4>
      <h2>Keith Johnson<i>&nbsp;&nbsp;Engineering&nbsp;Manager</i></h2>
      <h3>Phone: <p>Keith Johnson</p></h3>
      <h4>Email: <p>keithj@pemmcomfg.com</p></h4>
      <h2>Chris Graves<i>&nbsp;&nbsp;Purchasing&nbsp;Manager</i></h2>
      <h3>Phone: <p>Chris Graves x 1203</p></h3>
      <h4>Email: <p>chrisg@pemmcomfg.com</p></h4>
      <h2>Staci Varner<i>&nbsp;&nbsp;Quality&nbsp;Manager</i></h2>
      <h3>Phone: <p>Staci Varner x 1208</p></h3>
      <h4>Email: <p>staciv@pemmcomfg.com</p></h4>
      </div>
      <div className={styles.contactfoot}>
                <Footer />
                <Social />
          </div>
      </div>
    )
}

export default Contact;

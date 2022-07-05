import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import Modal from "./components/modal";
import Link from "next/link";
import Backdrop from "./components/backdrop";
import Iso from "./components/iso";
import Second from "./components/iso2";
import Iatf from "./components/iatf";
import Federal from "./components/federal";
import Footer from './components/footer'
import Social from "./components/social";
import { motion } from "framer-motion";

function Cert() {
  const [isOpen, setOpen] = useState(false);
  const [iso, setIso] = useState(true);
  const [iatf, setIatf] = useState(false);
  const [second, setSecond] = useState(false);
  const [ffl, setFfl] = useState(false);

  const variants = {
    open: { opacity: 1, x: 0, transition: {duration: .3} },
    closed: { opacity: 0, x: "0%" },
  }

  return (
    <div className={styles.stickycert}>
      {isOpen && (
        <Backdrop
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      <div className={styles.welcomeserv}>
        <h1>Certified To Meet Your Needs</h1>
      </div>
      <img src="machining.jpeg" className={styles.vid} />
      <div className={styles.nava}>
        <div className={styles.hamburger}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
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
      <div className={styles.cnav}>
        <div
          className={styles.iso}
          style={{
            backgroundColor: iso ? "#666666" : "rgba(185, 185, 185, 0.353)",
          }}
          onMouseOver={() => {
            setFfl(false);
            setSecond(false);
            setIso(true);
            setIatf(false);
          }}
          onClick={() => {
            setIso(true);
            setIatf(false);
            setSecond(false);
            setFfl(false);
          }}
        >
          <h1
            style={{
              color: iso ? "white" : "#022652",
            }}
          >
            ISO 9001
          </h1>
        </div>
        <div
          className={styles.iatfbar}
          style={{
            backgroundColor: iatf ? "#666666" : "rgba(185, 185, 185, 0.353)",
          }}
          onMouseOver={() => {
            setFfl(false);
            setSecond(false);
            setIso(false);
            setIatf(true);
          }}
          onClick={() => {
            setIatf(true);
            setIso(false);
            setSecond(false);
            setFfl(false);
          }}
        >
          <h1
            style={{
              color: iatf ? "white" : "#022652",
            }}
          >
            IATF 16949
          </h1>
        </div>
        <div
          className={styles.second}
          style={{
            backgroundColor: second ? "#666666" : "rgba(185, 185, 185, 0.353)",
          }}
          onMouseOver={() => {
            setFfl(false);
            setSecond(true);
            setIso(false);
            setIatf(false);
          }}
          onClick={() => {
            setSecond(true);
            setIso(false);
            setIatf(false);
            setFfl(false);
          }}
        >
          <h1
            style={{
              color: second ? "white" : "#022652",
            }}
          >
            ISO 14001
          </h1>
        </div>
        <div
          className={styles.federal}
          style={{
            backgroundColor: ffl ? "#666666" : "rgba(185, 185, 185, 0.353)",
          }}
          onMouseOver={() => {
            setFfl(true);
            setSecond(false);
            setIso(false);
            setIatf(false);
          }}
          onClick={() => {
            setFfl(true);
            setSecond(false);
            setIso(false);
            setIatf(false);
          }}
        >
          <h1
            style={{
              color: ffl ? "white" : "#022652",
            }}
          >
            FFL
          </h1>
        </div>
      </div>
      {iso && <Iso />}
      {second && <Second />}
      {iatf && <Iatf />}
      {ffl && <Federal />}
      <div className={styles.certfoot}>
      <Footer />
      <Social />
      </div>
    </div>
  );
}

export default Cert;

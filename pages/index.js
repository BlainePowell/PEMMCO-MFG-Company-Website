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

let image1 = [
  "Taurus-removebg-preview.png",
  "brp-min.png",
  "carolina-min.png",
  "honda-min.png",
  "GE-min.png",
  "volvoimg-min.png"
];

let image2 = [
"beretta-removebg-preview.png",
"Recaro-min.png", 
"JD-min.png",
"ford-min.png",
"goodyear-min.png",
]

let image3 = [
  "IR-min.png",
  "jcb-min.png",
  "toyota-min.png",
  "fnamerica-min.png",
  "boeing-min.png",
  "parker-min.png",
]

let image4 = [
  "Taurus-removebg-preview.png",
  "brp-min.png",
  "carolina-min.png",
  "goodyear-min.png",
  "honda-min.png",
  "GE-min.png",
  "beretta-removebg-preview.png",
  "bmw-min.png",
  "Recaro-min.png", 
  "JD-min.png",
  "ford-min.png",
  "volvoimg-min.png",
  "IR-min.png",
  "jcb-min.png",
  "toyota-min.png",
  "fnamerica-min.png",
  "boeing-min.png",
]

function Home() {
  const [ isOpen, setOpen ] = useState(false)
  const [newName, setnewName] = useState("");
  const [secondName, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [prop, setProp] = useState(false);
  const [inProp, setInProp] = useState(false);
  const [outProp, setOutProp] = useState(false);
  const [final, setFinal] = useState("");
  const [inFinal, setInFinal] = useState(false);
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

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  function Changer() {
    const index = Math.floor(Math.random() * image1.length);
    setThird(image1[index]);
    setProp(true);
  }

  const shuffleImage3 = useCallback(() => {
    setTimeout(() => {
      Changer();
    }, 1000);
    setProp(false);
  }, []);

  useEffect(() => {
    setTimeout(shuffleImage3, 100);
    const intervalID = setInterval(shuffleImage3, 7000);
    return () => clearInterval(intervalID);
  }, [shuffleImage3]);

  function Changes() {
    const index = Math.floor(Math.random() * image3.length);
    setSecond(image3[index]);
    setOutProp(true);
  }

  const shuffleImage = useCallback(() => {
    setTimeout(() => {
      Changes();
    }, 1000);
    setOutProp(false);
  }, []);

  useEffect(() => {
    setTimeout(shuffleImage, 100);
    const intervalID = setInterval(shuffleImage, 9000);
    return () => clearInterval(intervalID);
  }, [shuffleImage]);

  function Change() {
    const index = Math.floor(Math.random() * image2.length);
    setnewName(image2[index]);
    setInProp(true);
  }

  const shuffle = useCallback(() => {
    setTimeout(() => {
      Change();
    }, 1000);
    setInProp(false);
  }, []);

  useEffect(() => {
    setTimeout(shuffle, 100);
    const intervalID = setInterval(shuffle, 11000);
    return () => clearInterval(intervalID);
  }, [shuffle]);

  function Final() {
    const index = Math.floor(Math.random() * image4.length);
    setFinal(image4[index]);
    setInFinal(true);
  }

  const shuffleFinal = useCallback(() => {
    setTimeout(() => {
      Final();
    }, 1000);
    setInFinal(false);
  }, []);

  useEffect(() => {
    setTimeout(shuffleFinal, 100);
    const intervalID = setInterval(shuffleFinal, 6000);
    return () => clearInterval(intervalID);
  }, [shuffleFinal]);

  return (
    <div className={styles.stickyhome}>
            {isOpen && <Backdrop onClick={() => {
        setOpen(false)}}
        />}
      <div className={styles.welcomehome}>
      <h1>
        Welcome To PEMMCO Manufacturing
      </h1>
      <h2>
        Welcome To PEMMCO MFG
      </h2>
      </div>
      <img src="PEMSKY.jpeg" className={styles.vid} />
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
      <div className={styles.default}>
              <p data-aos="fade-up">
                Customers We Serve
              </p>
              <Transition in={prop} timeout={300}>
                {(state) => (
                  <div className={styles.dstyle}>
                  <img
                    src={third}
                    style={{
                      ...transitionStyles[state]
                    }}
                  />
                  </div>
                )}
              </Transition>
              <Transition in={inProp} timeout={300}>
                {(state) => (
                  <div className={styles.defaultstyle4}>
                  <img
                    src={newName}
                    style={{
                      ...transitionStyles[state]
                    }}
                  />
                  </div>
                )}
              </Transition>
              <Transition in={outProp} timeout={300}>
                {(state) => (
                  <div className={styles.defaultstyle3}>
                  <img
                    src={secondName}
                    style={{
                      ...transitionStyles[state]
                    }}
                  />
                  </div>
                )}
              </Transition>
              <Transition in={inFinal}>
                {(state) => (
                  <div className={styles.finalstyle}>
                  <img
                    src={final}
                    style={{
                      ...transitionStyles[state]
                    }}
                  />
                  </div>
                )}
              </Transition>
            </div>
      <div>
          <div className={styles.ccapabilities}>
              <h1>CNC Done Right</h1>
              <img src="rick.jpeg"/>
              <p>
              If you are looking for a highly diverse CNC Machining supplier that also offers value added assembly – 
              you have come to the right place.  
              PEMMCO Mfg. provides precision CNC Milling, CNC Turning and Assembly work for many different industries.
              </p>
            </div>
          </div>
          <div className={styles.improvement}>
            <h1 data-aos="fade-right">
              Always Improving
            </h1>
            <p className={styles.improved}>
            PEMMCO Mfg. is always striving to improve our manufacturing environment 
            to ensure the speed and quality that our customers so 
            rightfully deserve. 
            Through many additions to our plant, we continue to go the 
            extra mile to meet our customers needs.
            </p>
            <div className={styles.robotsec}>
              <img src="Hack.jpeg" className={styles.robotimg} />
              <p className={styles.robot}>
                " Robots are being used at PEMMCO Mfg. to make high production part runs easier on operators and in a safer environment. 
                Robots allow operators to focus more time on part inspection which greatly increases accuracy on each part being produced.&nbsp;"
                <i>
                -&nbsp;David&nbsp;Yates,&nbsp;Engineer
              </i>
              </p>
            </div>
            <div className={styles.qualitysec}>
              <img src="ken.jpeg" className={styles.qualityimg} />
              <p className={styles.qualitytext}>
                " We implemented CMM machines because they provide shop employees with 
                extremely accurate and precise measurements on complex parts that can’t
                 be checked in the traditional manor. 
                This helps us ensure the quality of our customers parts.&nbsp;"
                <i>
                -&nbsp;Ken&nbsp;Wiant,&nbsp;Quality&nbsp;Engineer
              </i>
              </p>
            </div>
            <div className={styles.freeconsh}>
        <h1>Request A Free Consultation Today</h1>
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
        </div>.
          </div>
          <div className={styles.homefoot}>
                <Footer />
                <Social/>
          </div>
        </div>
  );
}

export default Home;
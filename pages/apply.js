import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Aos from "aos";
import Backdrop from "./components/backdrop";
import Modal from "./components/modal";
import Footer from "./components/footer";
import Social from "./components/social";
import { Sling as Hamburger } from 'hamburger-react';
import { motion } from "framer-motion";

export const ContactUs = () => {
  const [ isOpen, setOpen ] = useState(false);
  const form = useRef();

  const variants = {
    open: { opacity: 1, x: 0, transition: {duration: .3} },
    closed: { opacity: 0, x: "0%" },
  }

  useEffect(() => {
    Aos.init({ duration: 800, delay: 10, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    window.alert('Thank you for contacting us. We will get back to you shortly.')

    emailjs
      .sendForm(
        "service_2uzqx2l",
        "template_29q6cd5",
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

  return (
<div className={styles.stickyhome}>
            {isOpen && <Backdrop onClick={() => {
        setOpen(false)}}
        />}
      <div className={styles.welcomeapply}>
      <h1>
        Be A Part of Something Bigger
      </h1>
      </div>
      <img src="pemmcoshop.jpeg" className={styles.vid} />
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
      <div className={styles.career}>
        <h1 data-aos="fade-right">Career Opportunities</h1>
        <p>
          Pemmco Mfg. is the premier CNC machining supplier in the Southeast and
          one of the fastest growing private companies in North Carolina. PEMMCO
          Mfg. provides precision CNC Milling, CNC Turning and Assembly work for
          many different industries. Located in the Asheboro, North Carolina, we
          are able to offer quick lead times, low cost and exceptional quality
          from our 50,000 sq. ft. facility built in 2011.
        </p>
        <img src='slope.jpeg' />
      </div>
      <div className={styles.app}>
        <div className={styles.appbkg} />
        <h1 data-aos="fade-up">Start a Career At <span className={styles.pemmco} data-aos="fade-up">PEMMCO</span></h1>
        <div className={styles.wrap}>
        <form ref={form} onSubmit={sendEmail}>
          <div className={styles.name}>
            <label>Full Name</label>
            <input type='text' name="from_name"/>
          </div>
          <div className={styles.date}>
            <label>Date</label>
            <input type='text' name="date"/>
          </div>
          <div className={styles.address}>
            <label>Address</label>
            <input type='text' name="address"/>
          </div>
          <div className={styles.city}>
            <label>City</label>
            <input type='text' name="city"/>
          </div>
          <div className={styles.state}>
            <label>State</label>
            <input type='text'name="state"/>
          </div>
          <div className={styles.zip}>
            <label>Zip</label>
            <input type='text' name="zip"/>
          </div>
          <div className={styles.home}>
            <label>Home Phone</label>
            <input type='text' name="home_phone"/>
          </div>
          <div className={styles.mobile}>
            <label>Mobile Phone</label>
            <input type='text' name="mobile_phone"/>
          </div>
          <div className={styles.emailapp}>
            <label>Email</label>
            <input type='text' name="email"/>
          </div>
          <div className={styles.employment}>
            <label>Employment Desired</label>
            <input list='type' type='text' name="e_des"/>
            <datalist id='type'>
              <option value='Full-Time'/>
              <option value='Part-Time'/>
              <option value='Part-Time OR Full-Time'/>
            </datalist>
          </div>
          <div className={styles.type}>
            <label>Position Desired</label>
            <input type='text' name="p_des"/>
          </div>
          <div className={styles.shift}>
            <label>Shift Desired</label>
            <input type='text' name="s_des"/>
          </div>
          <div className={styles.salary}>
            <label>Salary Desired</label>
            <input type='text' name="sal_desired"/>
          </div>
          <div className={styles.date2}>
            <label>Date</label>
            <input type='text' name="date_2"/>
          </div>
          <div className={styles.legal}>
            <label>Are you legally authorized to work in the United States?</label>
            <div>
            <input list='type1' type='text' name="yes1"/>
            <datalist id='type1'>
              <option value='Yes'/>
              <option value='No'/>
            </datalist>
            </div>
          </div>
          <div className={styles.age}>
            <label>Are you 18 years of age or older?</label>
            <div>
            <input list='type2' type='text' name="yes2"/>
            <datalist id='type2'>
              <option value='Yes'/>
              <option value='No'/>
            </datalist>
            </div>
          </div>
          <div className={styles.document}>
            <label>If hire, can you provide documents required to establish your eligibility to work in the US?</label>
            <div>
            <input list='type3' type='text' name="yes3"/>
            <datalist id='type3'>
              <option value='Yes'/>
              <option value='No'/>
            </datalist>
            </div>
          </div>
          <div className={styles.referred}>
            <label>How were you referred to PEMMCO Mfg.?</label>
            <input type='text' name="refer"/>
          </div>
          <div className={styles.convict}>
            <label>Have you ever been convicted of, or pled guilty or no contest to, a crime other than a minor traffic violation?</label>
            <div>
            <input list='type4' type='text' name="yes4"/>
            <datalist id='type4'>
              <option value='Yes'/>
              <option value='No'/>
            </datalist>
            </div>
          </div>
          <h5 className={styles.record}>Record Of Employment</h5>
          <div className={styles.employer}>
            <label>Employer</label>
            <input type='text' name="employer1"/>
          </div>
          <div className={styles.employern}>
            <label>Phone Number</label>
            <input type='text' name="phone2"/>
          </div>
          <div className={styles.address2}>
            <label>Address</label>
            <input type='text' name="address2"/>
          </div>
          <div className={styles.position}>
            <label>Position Title</label>
            <input type='text' name="position2"/>
          </div>
          <div className={styles.supervisor}>
            <label>Supervisor</label>
            <input type='text' name="supervisor"/>
          </div>
          <div className={styles.start}>
            <label>Start Date</label>
            <input type='text' name="start"/>
          </div>
          <div className={styles.end}>
            <label>End Date</label>
            <input type='text' name="end"/>
          </div>
          <div className={styles.salary1}>
            <label>Beginning Salary</label>
            <input type='text' name="beginsal"/>
          </div>
          <div className={styles.salary2}>
            <label>Ending Salary</label>
            <input type='text' name="endsal"/>
          </div>
          <div className={styles.duties}>
            <label>Duties</label>
            <input type='text' name="duties"/>
          </div>
          <div className={styles.leave}>
            <label>Reason For Leaving</label>
            <input type='text' name="reason"/>
          </div>
          <div className={styles.employersec}>
          <div className={styles.employer2}>
            <label>Employer</label>
            <input type='text' name="employer2"/>
          </div>
          <div className={styles.employern1}>
            <label>Phone Number</label>
            <input type='text' name="phone3"/>
          </div>
          <div className={styles.addresss}>
            <label>Address</label>
            <input type='text' name="address3"/>
          </div>
          <div className={styles.position2}>
            <label>Position Title</label>
            <input type='text' name="position3"/>
          </div>
          <div className={styles.supervisor3}>
            <label>Supervisor</label>
            <input type='text' name="supervisor1"/>
          </div>
          <div className={styles.start1}>
            <label>Start Date</label>
            <input type='text' name="start1"/>
          </div>
          <div className={styles.end1}>
            <label>End Date</label>
            <input type='text' name="end1"/>
          </div>
          <div className={styles.salary3}>
            <label>Beginning Salary</label>
            <input type='text' name="beginsal1"/>
          </div>
          <div className={styles.salary4}>
            <label>Ending Salary</label>
            <input type='text' name="endsal1"/>
          </div>
          <div className={styles.duties1}>
            <label>Duties</label>
            <input type='text' name="duties1"/>
          </div>
          <div className={styles.leave1}>
            <label>Reason For Leaving</label>
            <input type='text' name="reason1"/>
          </div>
          <div className={styles.resume1}>
            <label>Attach Resume</label>
            <input type='file' name="resume"/>
          </div>
          </div>
          <div className={styles.education}>
          <h5 className={styles.educationhead}>Education</h5>
          <h5 className={styles.educationapp1}>High School or Last Grade Completed</h5>
          <div className={styles.address3}>
            <label>Name & Address of School</label>
            <input type='text' name="school"/>
          </div>
          <div className={styles.position1}>
            <label>Course Of Study</label>
            <input type='text' name="course"/>
          </div>
          <div className={styles.supervisor1}>
            <label>Years Completed</label>
            <input type='text' name="year"/>
          </div>
          <div className={styles.diploma}>
            <label>Diploma/Degree</label>
            <input type='text' name="degree"/>
          </div>
          </div>
          <div className={styles.education2}>
          <h5 className={styles.educationapp}>College or Technical School</h5>
          <div className={styles.address3}>
            <label>Name & Address of School</label>
            <input type='text' name="school1"/>
          </div>
          <div className={styles.position1}>
            <label>Course Of Study</label>
            <input type='text' name="course1"/>
          </div>
          <div className={styles.supervisor1}>
            <label>Years Completed</label>
            <input type='text' name="years1"/>
          </div>
          <div className={styles.diploma}>
            <label>Diploma/Degree</label>
            <input type='text' name="degree1"/>
          </div>
          </div>
          <div className={styles.education3}>
          <h5 className={styles.educationapp}>Other Schooling or Training</h5>
          <div className={styles.address3}>
            <label>Name & Address of Scho</label>
            <input type='text' name="school2"/>
          </div>
          <div className={styles.position1}>
            <label>Course Of Study</label>
            <input type='text' name="course2"/>
          </div>
          <div className={styles.supervisor1}>
            <label>Years Completed</label>
            <input type='text' name="years2"/>
          </div>
          <div className={styles.diploma}>
            <label>Diploma/Degree</label>
            <input type='text' name="degree2"/>
          </div>
          </div>
          <div className={styles.military}>
          <h5 className={styles.educationhead}>Military Experience</h5>
          <div className={styles.address3}>
            <label>Branch of Service</label>
            <input type='text' name="service"/>
          </div>
          <div className={styles.position1}>
            <label>Rank/Type of Service</label>
            <input type='text' name="rank"/>
          </div>
          <div className={styles.supervisor1}>
            <label>Years in Service</label>
            <input type='text' name="yearly"/>
          </div>
          <div className={styles.diploma}>
            <label>Special Training/Experience</label>
            <input type='text' name="experience"/>
          </div>
          <button onClick={sendEmail} className={styles.submit}>Submit</button>
          </div>
          <div className={styles.statement}>
            <h6>
              Statement
            </h6>
            <div className={styles.statementpar}>
            <p>(Please read this statement carefully before signing this application)</p>
            <p>
              I understand that employment with PEMMCO Mfg. (the Company) is at-will, meaning that I or the Company may terminate my employment at any time, or for any reason consistent with applicable state or federal law.
            </p>
            <p>I authorize the Company to conduct a thorough background investigation of my work and personal history, and verify all data given on this application and during interviews. I hereby release the Company, and its representatives or agents, from any liability that might result from such an investigation. I authorize all individuals, schools, and firms named to provide any requested information and release them from all liability for providing the requested information.
            </p>
            <p>I understant that the company requires the successful completion of a drug and/or alcohol test as a condition of employment</p>
            <p><b>I Understand this application will be active for a period of 90 days; after that time, if I wish to be considered for employment, I must submit a new application. I certify that all the statements in this completed application are true and understand that any falsification or willful omission shall be sufficient cause for dismissal or refusal to hire.</b></p>
            </div>
            <div className={styles.signature}>
            <label>Digital Signature</label>
            <input type='text' name="signature"/>
          </div>
          <div className={styles.signed}>
            <label>Date Signed</label>
            <input type='text' name="date_signed"/>
          </div>
          </div>
        </form>
        </div>
      </div>
      <div className={styles.applyffoot}>
                <Footer />
                <Social />
          </div>
    </div>
  );
};

export default ContactUs;


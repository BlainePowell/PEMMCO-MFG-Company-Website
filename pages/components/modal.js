import Link from 'next/link';
import styles from "/styles/Home.module.css";

function Modal() {

    return (
        <div className={styles.modal}>
            <div className={styles.homebtn}>
            <Link href="/">
            <h1>Home</h1>
            </Link>
            </div>
            <div className={styles.servicebtn}>
            <Link href="/services">
            <h2>Services</h2>
            </Link>
            </div>
            <div className={styles.applybtn}>
            <Link href="/apply">
            <h3>Apply</h3>
            </Link>
            </div>
            <div className={styles.contactbtn}>
            <Link href="/certifications">
            <h3>Certifications</h3>
            </Link>
            </div>
            <div className={styles.newsbtn}>
            <Link href="/contact">
            <h3>Contact Us</h3>
            </Link>
            </div>
            <div className={styles.quotebtn}>
            <Link href="/news">
            <h3>News</h3>
            </Link>
            </div>
            <div className={styles.certbtn}>
            <Link href="/quote">
            <h3>Quote Request</h3>
            </Link>
            </div>
        </div>
    )
}

export default Modal;
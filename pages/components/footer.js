import Link from "next/link";
import styles from "/styles/Home.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <Link href='/'>
                <p>Home</p>
            </Link>
            <Link href='/services'>
                <p>Services</p>
            </Link>
            <Link href='/certifications'>
                <p>Certifications</p>
            </Link>
            <Link href='/apply'>
                <p>Apply</p>
            </Link>
            <Link href='/quote'>
                <p>Quote Request</p>
            </Link>
            <Link href='/contact'>
                <p>Contact Us</p>
            </Link>
        </div>
    )
}

export default Footer;
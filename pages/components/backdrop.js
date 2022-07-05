import styles from "/styles/Home.module.css";

function Backdrop(props) {
    return <div className={styles.backdrop} onClick={props.onClick} /> 
}

export default Backdrop;
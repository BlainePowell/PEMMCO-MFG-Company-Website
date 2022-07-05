import styles from "/styles/Home.module.css";

function Social() {

    return (
        <div className={styles.social}>
            <img src="facebook.png" 
             onClick={() => {
             window.location.href = "https://www.facebook.com/PemmcoManufacturingInc/";
              }} />
              <img src="tiktok.png" 
           onClick={() => {
             window.location.href = "https://www.tiktok.com/t/ZTdond8QL/";
              }} />
              <img src="linkedin.png" 
               onClick={() => {
                 window.location.href = "https://www.linkedin.com/company/pemmco-manufacturing-inc-/mycompany/";
               }} />
        </div>
    )
}

export default Social
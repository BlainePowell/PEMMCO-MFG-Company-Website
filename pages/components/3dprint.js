import styles from "/styles/Home.module.css";
import { useState, useEffect } from 'react'
import '@google/model-viewer'
import dynamic from 'next/dynamic'

function Three() {
    const [ thre, setThree ] = useState(false)
    
    dynamic(
        {ssr: false}
    )

    var wind = 1000

    useEffect(() => {
    if (wind <= 815) {
        setThree(true)
    } else {
        setThree(false)
    }
    }, [100]);

    return (
        <div className={styles.jet}>
            <h1>3D Printing</h1>
            <p style={{
                fontSize: thre ? '70%' : '60%',
                lineHeight: '200%',
                width: thre ? '100%' : '50%'
            }}>One of the most important factors with our ability to satisfy our customers is the engraving
                of our own parts. We have two Telesis Laser engravers on the shop floor which allows us
                to cut out the middle man with parts that need to be engraved. This allows us to get
                you your parts faster, while also allowing for a smaller margin of error!
            </p>
            <model-viewer
                    src="horse.glb"
                    ios-src=""
                    poster="pemmcomfg-removebg-preview.png"
                    alt="A 3D model of an astronaut"
                    shadow-intensity="1"
                    camera-controls
                    disable-zoom
                    auto-rotate
            />
        </div>
    )
}

export default Three;

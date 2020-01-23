import React from 'react';
import styles from '../SectionFive/SectionFive.module.css'
import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}
const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
}

const Sectionfive = (props) => (
    <>
        <Desktop>
            <div class="container" id="sectionFive">
                <div className={styles.bg} >
                    <div className="row"> 
                        <div className="col-lg-6 nopadding"></div>
                                
                        <div className="col-lg-6 nopadding">
                            <div className="container" id={styles.text}>
                                <h2 className={styles.header}>Lorem ipsum</h2>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                    quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                    voluptates placeat.
                                </p>
                                <button 
                                    type="button" 
                                    className="btn btn-dark" 
                                    style={{
                                        backgroundColor:"#FF8C00", 
                                        border:"none", 
                                        borderRadius:"2px",
                                    }}
                                >
                                    BUTTON BUTTON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Desktop>

        <Tablet>
            <div className="container">
                <div className={styles.bg} >
                    <div class="row">
                        <div class="col-lg-6 nopadding">
                            <div class="container" id={styles.text} style={{width:"500px"}}>
                                <h2 className={styles.header} style={{ fontSize:"25px"}}>Lorem ipsum</h2>
                                <p style={{ backgroundColor: "rgba(0,0,0,.6)", color: "#fff", fontSize: "15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                    quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                    voluptates placeat.
                                </p>
                                <button 
                                    type="button" 
                                    className="btn btn-dark" 
                                    style={{
                                        backgroundColor:"#FF8C00", 
                                        border:"none", 
                                        borderRadius:"2px",
                                        fontSize:"10px",
                                        widht: "300px"
                                    }}
                                >
                                    BUTTON BUTTON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Tablet>

        <Mobile>
            <div className="container">
                <div className={styles.bg} >
                    <div class="row">
                        <div class="col-lg-6 nopadding">
                            <div class="container" id={styles.text} style={{width:"300px"}}>
                                <h2 className={styles.header} style={{ fontSize:"25px"}}>Lorem ipsum</h2>
                                <p style={{ backgroundColor: "rgba(0,0,0,.6)", color: "#fff", fontSize: "15px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                    quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                    voluptates placeat.
                                </p>
                                <button 
                                    type="button" 
                                    className="btn btn-dark" 
                                    style={{
                                        backgroundColor:"#FF8C00", 
                                        border:"none", 
                                        borderRadius:"2px",
                                        fontSize:"10px",
                                        widht: "300px"
                                    }}
                                >
                                    BUTTON BUTTON
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Mobile>
    </>
)

export default Sectionfive;
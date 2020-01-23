import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from '../SectionThree/SectionThree.module.css'

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

class SectionTwo extends Component {
    render() {
        return (
            <>
                <Desktop>
                    <div className="container">
                        <div className={styles.bg} >
                            <div class="row">
                                <div class="col-lg-6 nopadding">
                                    <div class="container" id={styles.text}>
                                        <h2 className={styles.header}>Lorem ipsum</h2>
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
                                    <div class="container" id={styles.text}>
                                    <h2 className={styles.header} style={{fontSize:"25px"}}>Lorem ipsum</h2>
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
                        <div className={styles.bgMobile} >
                            <div class="row">
                                <div class="col-lg-6 nopadding">
                                    <div class="container" id={styles.text}>
                                    <h2 className={styles.header} style={{fontSize:"25px"}}>Lorem ipsum</h2>
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
    }
}

export default SectionTwo;
import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from '../Header/Header.module.css';
import Typical from 'react-typical';
import logo from '../../image/logo-white.svg'

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

class Header extends Component {
    render () {
        return(
            <>
                <Desktop>
                    <div className="container">
                        <div className={styles.bg} >
                            <div className={styles.image}>
                                <img  src={logo} alt="Logo"/>
                            </div>
                
                            <div>
                                <h1 className={styles.main}>Welcome to</h1> <br></br>
                                <p style={{ fontFamily: "Space Mono", color: "#fff", fontSize: "30px"}}>
                                    <Typical
                                        loop={true}
                                        wrapper="b"
                                        steps={[
                                            'Rooster Grin'
                                        ]}
                                    />
                                </p>
                            </div>
                            
                            <button type="button" className="btn btn-dark" id={styles.headerButton} > BUTTON BUTTON</button>
                        </div>
                    </div>
                </Desktop>

                <Tablet>
                    <div className="container">
                        <div className={styles.bg} style={{height: "400px"}} >
                            <div className={styles.image} style={{width: "250px"}}>
                                <img  src={logo} alt="Logo"/>
                            </div>
                
                            <div>
                                <h1 className={styles.main} style={{fontSize: '30px', padding: "100px 0px 5px 0px"}}>Welcome to</h1> <br></br>
                                <p style={{ fontFamily: "Space Mono", color: "#fff", fontSize: "20px"}}>
                                    <Typical
                                        loop={true}
                                        wrapper="b"
                                        steps={[
                                            'Rooster Grin'
                                        ]}
                                    />
                                </p>
                            </div>
                            
                            <button 
                                type="button" 
                                className="btn btn-dark" 
                                id={styles.headerButton} 
                                style={{width: "150px", fontSize: "10px"}} 
                            > 
                                BUTTON BUTTON
                            </button>

                        </div>
                    </div>
                </Tablet>

                <Mobile>
                    <div className="container">
                        <div className={styles.bg} style={{height: "300px"}} >
                            <div className={styles.image} style={{width: "200px"}}>
                                <img  src={logo} alt="Logo"/>
                            </div>
                
                            <div>
                                <h1 className={styles.main} style={{fontSize: '20px', padding: "50px 0px 5px 0px"}}>Welcome to</h1> <br></br>
                                <p style={{ fontFamily: "Space Mono", color: "#fff", fontSize: "15px"}}>
                                    <Typical
                                        loop={true}
                                        wrapper="b"
                                        steps={[
                                            'Rooster Grin'
                                        ]}
                                    />
                                </p>
                            </div>
                            
                            <button 
                                type="button" 
                                className="btn btn-dark" 
                                id={styles.headerButton} 
                                style={{width: "100px", fontSize: "8px"}} 
                            > 
                                BUTTON BUTTON
                            </button>

                        </div>
                    </div>
                </Mobile>
            </>
        );
    }
}

export default Header;
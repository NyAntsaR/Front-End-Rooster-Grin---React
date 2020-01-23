import React from 'react';
import styles from '../Header/Header.module.css';
import Typical from 'react-typical';
import logo from '../../image/logo-white.svg'

const Header = (props) => (
    <>
    <div className="container">
        <div className={styles.bg} >
            <div className={styles.image}>
                <img  src={logo} alt="Logo" />
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

    </>
)

export default Header;
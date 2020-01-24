import React, { Component } from 'react';
import styles from '../Footer/Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container" id={styles.footerContent}>
                    <p style={{marginTop: "10px"}}> Follow Us: </p>
                    <a href="https://www.facebook.com/RoosterGrin/"><i class="fab fa-instagram" style={{fontSize: "48px", color:"#663399"}}></i></a>
                    <a href="https://www.facebook.com/RoosterGrin/"><i class="fab fa-facebook-square" style={{fontSize: "48px", color:"#663399"}}></i></a>
                </div>

            </footer>
        )
    }
}

export default Footer;
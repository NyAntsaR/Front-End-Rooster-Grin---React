import React from 'react';
import styles from '../SectionTwo/SectionTwo.module.css';
import { useMediaQuery } from 'react-responsive';
import image from '../../image/img-1.jpg'

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


const SectionTwo = props => (
    <>
        <Desktop>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container" id={styles.text}>
                            <h2 className={styles.header}>Lorem ipsum</h2>
                            <p className={styles.paragraph}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                voluptates placeat.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Laborum voluptatibus eaque dignissimos voluptates incidunt quam saepe aspernatur 
                                neque voluptatem, sint tempore tenetur consectetur itaque culpa cumque. 
                                Harum minima magnam a.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 nopadding">
                        <img id={styles.imgSection} src={image} alt="sunset-team" />
                    </div>
                </div>
            </div>
        </Desktop>

        <Tablet>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container" style={{margin: "20px", padding: "20px"}}>
                            <h2 className={styles.header} style={{fontSize: "25px"}}>Lorem ipsum</h2>
                            <p className={styles.paragraph} style={{fontSize: '15px'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                voluptates placeat.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Laborum voluptatibus eaque dignissimos voluptates incidunt quam saepe aspernatur 
                                neque voluptatem, sint tempore tenetur consectetur itaque culpa cumque. 
                                Harum minima magnam a.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Quod voluptates temporibus, autem impedit consequatur beatae animi a dolor quidem 
                                corrupti aliquid sunt! Laudantium, facilis soluta est quo necessitatibus libero ad.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 nopadding">
                        <img id={styles.imgSection} src={image} alt="sunset-team" />
                    </div>
                </div>
            </div>
        </Tablet>

        <Mobile>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="container" style={{margin: "10px", padding: "20px"}}>
                            <h2 className={styles.header} style={{fontSize: "20px"}}>Lorem ipsum</h2>
                            <p className={styles.paragraph}> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                voluptates placeat.
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Laborum voluptatibus eaque dignissimos voluptates incidunt quam saepe aspernatur 
                                neque voluptatem, sint tempore tenetur consectetur itaque culpa cumque. 
                                Harum minima magnam a.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 nopadding">
                        <img id={styles.imgSection} src={image} alt="sunset-team" />
                    </div>
                </div>
            </div>
        </Mobile>
    </>
)

export default SectionTwo;
import React, { Component } from 'react';
import styles from '../SectionSix/SectionSix.module.css'
import { useMediaQuery } from 'react-responsive';
import SimpleSlider from './CarouselSlide';

// import CarouselSlide from './CarouselSlide';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

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


class SectionSix extends Component {

    render () {
        return (
            <>
                <Desktop>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <div className="container" id={styles.text}>
                                    <h2 className={styles.header}>Lorem ipsum <br></br> dolor sit amet</h2>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                </div>
                            </div>

                            <div class="col-lg-6 nopadding">

                                {/* <CarouselSlide /> */}
                                <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </Desktop>

                <Tablet>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <div className="container" id={styles.textTable}>
                                    <h2 className={styles.header}>Lorem ipsum <br></br> dolor sit amet</h2>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                </div>
                            </div>

                            <div class="col-lg-6 nopadding">

                                {/* <CarouselSlide /> */}
                                <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </Tablet>

                <Mobile>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 nopadding">
                                <div className="container" id={styles.textMobile}>
                                    <h2 className={styles.header}>Lorem ipsum <br></br> dolor sit amet</h2>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                    <span className="fa fa-star" id={styles.checked}></span>
                                </div>
                            </div>

                            <div class="col-lg-6 nopadding">

                                {/* <CarouselSlide /> */}
                                <SimpleSlider />
                            </div>
                        </div>
                    </div>
                </Mobile>
            </>
        )
    }
}

export default SectionSix;
import React from "react";
import Slider from "react-slick";
import styles from './SectionSix.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';


// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, <i class="fa fa-arrow-right"></i> }}
//         onClick={onClick}
//       />
//     );
// }


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

class SimpleSlider extends React.Component {
  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true
        // nextArrow: '<i class="fa fa-arrow-right"></i>',
        // prevArrow: '<i class="fa fa-arrow-left"></i>'
    };

    return (
    <>
            <Desktop>
                <Slider{...settings}>
                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div> 
                </Slider>
            </Desktop>
            
            <Tablet>
                <Slider{...settings}>
                    <div className="carousel-item active" id={styles.bulletTablet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>
                    
                </Slider>
            </Tablet>

            <Mobile>
                <Slider{...settings}>
                    <div className="carousel-item active" id={styles.bulletMobile}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div>

                    <div className="carousel-item active" id={styles.bullet}>
                        <p className={styles.pColor}>John Doe 08/08/2019</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Nobis quis deserunt eligendi error similique obcaecati animi 
                            nam eum laborum a nostrum, ullam, at ab dolorem veritatis 
                            vel blanditiis. Est, voluptates?
                        </p>
                    </div> 
                </Slider>
            </Mobile>
        </>
    );
  }
}

export default SimpleSlider;
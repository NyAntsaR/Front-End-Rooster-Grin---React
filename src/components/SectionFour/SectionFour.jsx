import React, { Component } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import ReadMore from '../SectionTwo/ReadMore'
import styles from '../SectionFour/SectionFour.module.css'
import image1 from '../../image/home-expertise.svg'
import image2 from '../../image/home-hygiene.svg'
import image3 from '../../image/home-lab.svg'
import image4 from '../../image/home-retention.svg'

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

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

class SectionFour extends Component {
    constructor(){
        super();
        this.state = {
            name: 'React'
        };
    }
    
    componentDidMount() {
        console.log('mounted width - ');
      }
    
    getWrapperWidth () {
        if (this.wrapper) {
          console.log('get wrapper width');
        } else {
          console.log('get wrapper - no wrapper');
        }
    }

    render() {
        return (
            <>
                <Desktop>
                    <div className="container" style={{height: "400px"}}>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="container" id={styles.text}>
                                    <h2 className={styles.header}>Lorem ipsum <br></br> dolor sit amet</h2>

                                    <ReadMore 
                                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                        quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                        voluptates placeat.
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Laborum voluptatibus eaque dignissimos voluptates incidunt quam saepe aspernatur 
                                        neque voluptatem, sint tempore tenetur consectetur itaque culpa cumque. 
                                        Harum minima magnam a.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quod voluptates temporibus, autem impedit consequatur beatae animi a dolor quidem 
                                        corrupti aliquid sunt! Laudantium, facilis soluta est quo necessitatibus libero ad."
                                        numberOfLines={4}
                                        lineHeight={1.4}
                                        showLessButton={true}
                                        onContentChange={this.getWrapperWidth}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 nopadding">
                                <div className={styles.bg}>
                                    <div className="row">
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image1} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image2} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>

                                        <div class="w-100"></div>

                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image3} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image4} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </Desktop>

                <Tablet>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="container" id={styles.text} style={{height: "250px", width: "600px"}}>
                                    <h2 className={styles.header} style={{fontSize:"25px"}}>Lorem ipsum <br></br> dolor sit amet</h2>

                                    <ReadMore 
                                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                        quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                        voluptates placeat.
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Laborum voluptatibus eaque dignissimos voluptates incidunt quam saepe aspernatur 
                                        neque voluptatem, sint tempore tenetur consectetur itaque culpa cumque. 
                                        Harum minima magnam a.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quod voluptates temporibus, autem impedit consequatur beatae animi a dolor quidem 
                                        corrupti aliquid sunt! Laudantium, facilis soluta est quo necessitatibus libero ad."
                                        numberOfLines={4}
                                        lineHeight={1.4}
                                        showLessButton={true}
                                        onContentChange={this.getWrapperWidth}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 nopadding">
                                <div className={styles.bg}>
                                    <div className="row">
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image1} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image2} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>

                                        <div class="w-100"></div>
                                        
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image3} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image4} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Tablet>

                <Mobile>
                <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="container" id={styles.text} style={{height: "330px", width: "400px"}}>
                                    <h2 className={styles.header} style={{fontSize:"25px"}}>Lorem ipsum <br></br> dolor sit amet</h2>

                                    <ReadMore 
                                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, 
                                        quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam 
                                        voluptates placeat.
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                        Laborum voluptatibus eaque dignissimos voluptates incidunt quam saepe aspernatur 
                                        neque voluptatem, sint tempore tenetur consectetur itaque culpa cumque. 
                                        Harum minima magnam a.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Quod voluptates temporibus, autem impedit consequatur beatae animi a dolor quidem 
                                        corrupti aliquid sunt! Laudantium, facilis soluta est quo necessitatibus libero ad."
                                        numberOfLines={4}
                                        lineHeight={1.4}
                                        showLessButton={true}
                                        onContentChange={this.getWrapperWidth}
                                    />
                                </div>
                            </div>

                            <div className="col-lg-6 nopadding">
                                <div className={styles.bg}>
                                    <div className="row">
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image1} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image2} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>

                                        <div class="w-100"></div>
                                        
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image3} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
                                        <div className="col">
                                            <div className={styles.icon}>
                                                <Bounce><img className={styles.iconImg} src={image4} alt="sunset-team"/></Bounce>
                                            </div>
                                            <h6>Lorem</h6>
                                        </div>
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

export default SectionFour;
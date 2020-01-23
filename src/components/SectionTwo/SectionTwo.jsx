import React from 'react';
import styles from '../SectionTwo/SectionTwo.module.css';
import image from '../../image/img-1.jpg'


const SectionTwo = props => (
    <>
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
    </>
)

export default SectionTwo;
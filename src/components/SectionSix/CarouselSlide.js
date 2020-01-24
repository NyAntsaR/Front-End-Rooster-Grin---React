import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

const content = [
    {
        title: "Julia Micheal 10/10/2019",
        description:
            "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis."
    },
    {
        title: "John Doe 08/08/2019",
        description:
            "Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam voluptates placeat."
    },
    {
        title: "Capucine Aurane 01/01/2020",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam vel voluptatum, porro neque error, nemo unde odio aspernatur, quae ad corrupti minima maiores? Deserunt id rem inventore laboriosam voluptates placeat."
    },
  ];

  const CarouselSlide = () => (
    <div>
        <Slider className="slider-wrapper">
        {content.map((item, index) => (
            <div
            key={index}
            className="slider-content"
            style={{ background: `url('${item.image}') no-repeat center center` }}
            >
            <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </div>
            </div>
        ))}
        </Slider>
    </div>
  )

  export default CarouselSlide;
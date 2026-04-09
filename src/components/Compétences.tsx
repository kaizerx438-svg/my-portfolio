'use client';

import Image from "next/image";
import htmlIcon from "./assets/img/HTML5.svg";
import cssIcon from "./assets/img/css3.svg";
import jsIcon from "./assets/img/JavaScript.svg";
import reactIcon from "./assets/img/React.svg";
import phpIcon from "./assets/img/PHP.svg";
import laravelIcon from "./assets/img/Laravel.svg";
import mysqlIcon from "./assets/img/MySQL.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "./assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
     
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Mes compétences me permettent de concevoir et développer des projets web modernes et performants</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <Image src={htmlIcon} alt="HTML5" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <Image src={cssIcon} alt="CSS3" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <Image src={jsIcon} alt="JavaScript" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <Image src={reactIcon} alt="React" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <Image src={phpIcon} alt="PHP" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <Image src={laravelIcon} alt="Laravel" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <Image src={mysqlIcon} alt="MySQL" />
                                <h5>MySQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <Image className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
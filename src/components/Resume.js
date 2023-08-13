import meter1 from "../assets/images/meter1.svg";
import meter2 from "../assets/images/meter2.svg";
import meter3 from "../assets/images/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/images/color-sharp.png"
import resumePDF from "../assets/resume.pdf"

export const Resume = () => {
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
    <section className="resume" id="resume">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="resume-bx wow zoomIn">
                        <h2>Resume</h2>
                        <a href={resumePDF} download>Download PDF</a>
                        <p>- - - - - - - - - - - - -</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme resume-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Front End</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Database</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Back End</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import image1 from "./HCL (1).png"
import image3 from "./image3.jpg"
import hclimage from "./hclimage.jpg"
import "./home.css"


function Home() {
  return (
    <div className='home'>
      <div>
      <Carousel fade>
      <Carousel.Item>
        <img src={image1} width="100%" height={502}></img>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={image3} width="100%" height={502}></img>
        <Carousel.Caption>
          <h1>HCL INSTITUTE</h1>
          <p>Transform into a new-age tech professional</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <div className='home2'>
        <div className='home21'>
          <h1>Kick Start Your Career With Our</h1>
          <h1 id='h1'> Software Development</h1>
          <h1> Up-Skilling Courses In Indore</h1>
          <p>Learn from the experts through personalized sessions and become a Pro in Coding & Software Development</p>
        </div>
        <div>
          <img src={hclimage} height={500} width={450}></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
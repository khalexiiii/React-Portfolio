import image from "../assets/image.png"
import Button from 'react-bootstrap/Button';


const Hero = () => {
  return (
    <div className="home-banner">
      <div className="navigation-wrapper">
        <div className="home-banner-text">
          <h4>Hi, I'm</h4>
          <h1>Alexandrite Llarenas</h1>
          <p>Civil Engineer</p>
          <div className="button">
            <Button variant="danger" className="danger">EXPLORE</Button>{' '}
            <Button variant="danger" className="danger">HIRE ME</Button>{' '}
          </div>
        </div> 
        <img src={image} alt="" />       
      </div>
    </div>   
  )
}

export default Hero
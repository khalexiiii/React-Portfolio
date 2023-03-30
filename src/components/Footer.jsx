import logo2 from "../assets/logo2.png"

const Footer = () => {
  return (
    
    <footer className="footer-distributed">

        <div className="footer-left">
            <img src={logo2} alt="" />

            <p className="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Projects</a>
                |
                <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">Copyright © 2023 <strong>Alexandrite Llarenas</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>San Manuel, Pangasinan</span>
                    Philippines</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>(+63) 969-519-1508</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="#">alexandrite.llarenas@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About</span>
                <strong>Alexandrite Llarenas</strong> is a Youtube channel where you can find more creative CSS Animations
                and
                Effects along with
                HTML, JavaScript and Projects using C/C++.
            </p>
        </div>
    </footer>

  )
}

export default Footer
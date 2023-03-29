import logo2 from "../assets/logo2.png"

const Footer = () => {
  return (
    
    <footer class="footer-distributed">

        <div class="footer-left">
            <img src={logo2} alt="" />

            <p class="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About</a>
                |
                <a href="#">Projects</a>
                |
                <a href="#">Contact</a>
            </p>

            <p class="footer-company-name">Copyright © 2023 <strong>Alexandrite Llarenas</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
            <div>
                <i class="fa fa-map-marker"></i>
                <p><span>San Manuel, Pangasinan</span>
                    Philippines</p>
            </div>

            <div>
                <i class="fa fa-phone"></i>
                <p>(+63) 969-519-1508</p>
            </div>
            <div>
                <i class="fa fa-envelope"></i>
                <p><a href="#">alexandrite.llarenas@gmail.com</a></p>
            </div>
        </div>
        <div class="footer-right">
            <p class="footer-company-about">
                <span>About</span>
                <strong>Alexandrite Llarenas</strong> is a Youtube channel where you can find more creative CSS Animations
                and
                Effects along with
                HTML, JavaScript and Projects using C/C++.
            </p>
            <div class="footer-icons">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-github"></i></a>
            </div>
        </div>
    </footer>

  )
}

export default Footer
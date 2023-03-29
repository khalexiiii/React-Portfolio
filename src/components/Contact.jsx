import divider from "../assets/divider-paper.png"
import dividerline from "../assets/divider.png"

const Contact = () => {
  return (
    <section className="contact">
      <img className="divider" src={divider} alt="" />
      <img className="divider-line" src={dividerline} alt="" />
      <h1>Contact</h1>
      <img className="divider-line invert" src={dividerline} alt="" />
      <div className="navigation-wrapper">
      <div class="container">
      <div class="contact-wrapper">
        <div class="title"><h6>How can I help you?</h6></div>
        <form action="#">
          <div class="dbl-field">
            <div class="field">
              <input type="text" placeholder="Name" />
              <i class="fas fa-user"></i>
            </div>
            <div class="field">
              <input type="text" placeholder="Email" />
              <i class="fas fa-envelope"></i>
            </div>
          </div>
          <div class="dbl-field">
            <div class="field">
              <input type="text" placeholder="Phone" />
              <i class="fas fa-phone-alt"></i>
            </div>
          </div>
          <div class="message">
            <textarea placeholder="Write your message"></textarea>
            <i class="fa-solid fa-comments"></i>
          </div>
          <div class="button-area">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div> 
      </div>
    </section>
  )
}

export default Contact
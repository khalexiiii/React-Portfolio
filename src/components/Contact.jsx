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
        <div className="container">
          <div className="contact-wrapper">
            <div className="title"><h6>How can I help you?</h6></div>
            <form action="#">
              <div className="dbl-field">
                <div className="field">
                  <input type="text" placeholder="Name" />
                  <i className="fas fa-user"></i>
                </div>
                <div className="field">
                  <input type="text" placeholder="Email" />
                  <i className="fas fa-envelope"></i>
                </div>
              </div>
              <div className="dbl-field">
                <div className="field">
                  <input type="text" placeholder="Phone" />
                  <i className="fas fa-phone-alt"></i>
                </div>
              </div>
              <div className="message">
                <textarea placeholder="Write your message"></textarea>
                <i className="fa-solid fa-comments"></i>
              </div>
              <div className="button-area">
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
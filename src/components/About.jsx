import picture from "../assets/picture.png"
import divider from "../assets/divider-paper.png"
import dividerline from "../assets/divider.png"

const About = () => {
  return (
    <section className="about">
      <img className="divider" src={divider} alt="" />
      <img className="divider-line" src={dividerline} alt="" />
      <h1>About Me</h1>
      <img className="divider-line invert" src={dividerline} alt="" />
      <div className="navigation-wrapper">
        <img src={picture} alt="" />
        <div className="about-text">
          <p>Hi, I'm Alexandrite M. Llarenas, 29 years old. I graduated at Pangasinan State University Urdaneta with a degree of Bachelor of Science in Civil Engineering. Professionally licensed with a 3+ year working experince in building and construction industry. Experienced in cost planning and control. Skilled in monitoring and supervising residential projects. I'm into online games like Genshin Impact, Call of Duty and Mobile Legends. I also like reading and collecting books.</p>
        </div>
      </div>
    </section>
  )
}

export default About
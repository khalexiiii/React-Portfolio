import divider from "../assets/divider-paper.png"
import dividerline from "../assets/divider.png"
import charm from "../assets/charm.png"
import vine from "../assets/vine.png"
import hill from "../assets/hill.png"
import bloom from "../assets/bloom.png"

const Project = () => {
  return (
    <section className="project">
      <img className="divider" src={divider} alt="" />
      <img className="divider-line" src={dividerline} alt="" />
      <h1>Projects</h1>
      <img className="divider-line invert" src={dividerline} alt="" />
      <grid-carousel class="product_carousel">
            <div id="formList">
               <div id="list">
                 <div className="item">
                   <div className="card" id="card">
                      <img src= {charm} class="card-img-top" alt="" />
                      <div className="card-header">Charm Residences</div>
                      <div className="card-body">
                        <h5>Location: Cainta, Rizal</h5> 
                      </div>
                      <div class="card-footer justify-content-end">
                        <button
                          href="#"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#book1"
                      >
                          View More
                        </button>
                      </div>
                  </div>    
               </div>
               <div class="item">
                   <div class="card" id="card">
                      <img src={vine} class="card-img-top" alt="" />
                      <div class="card-header">Vine Residences</div>
                      <div class="card-body">
                        <h5>Location: Novaliches, Quezon City</h5>   
                      </div>
                      <div class="card-footer justify-content-end">
                        <button
                          href="#"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#book1"
                      >
                          View More
                        </button>
                      </div>
                  </div>    
               </div>
               <div class="item">
                   <div class="card" id="card">
                      <img src={hill} class="card-img-top" alt="" />
                      <div class="card-header">Hill Residences</div>
                      <div class="card-body">
                        <h5>Location: Novaliches, Quezon City</h5> 
                      </div>
                      <div class="card-footer justify-content-end">
                        <button
                          href="#"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#book1"
                      >
                          View More
                        </button>
                      </div>
                  </div>    
               </div>
               <div class="item">
                   <div class="card" id="card">
                      <img src={bloom} class="card-img-top" alt="" />
                      <div class="card-header">Bloom Residences</div>
                      <div class="card-body">
                        <h5>Location: Sucat, Parañaque</h5>  
                      </div>
                      <div class="card-footer justify-content-end">
                        <button
                          href="#"
                          class="btn btn-secondary"
                          data-bs-toggle="modal"
                          data-bs-target="#book1"
                      >
                          View More
                        </button>
                      </div>
                  </div>    
               </div>
             </div>
           </div> 
      </grid-carousel>
    </section>
          
    
  )
}

export default Project
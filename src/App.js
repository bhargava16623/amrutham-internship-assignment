import './App.css';
import Navbar from './Components/Navbar';
import picsart1 from '../src/assets/picsart1.png';
import picsart2 from '../src/assets/picsart2.png';
import picsart3 from '../src/assets/picsart3.png';
import picsart4 from '../src/assets/picsart4.png';
import page2 from '../src/assets/page2.png';
import logo1 from '../src/assets/logo1.png';
import logo2 from '../src/assets/logo2.png';
import logo3 from '../src/assets/logo3.png';
import logo4 from '../src/assets/logo4.png';
import logo5 from '../src/assets/logo5.png';
import logo6 from '../src/assets/logo6.png';
import sloka from '../src/assets/sloka.png';
import img1 from '../src/assets/img1.png'; 
import img2 from '../src/assets/img2.png';  
import img3 from '../src/assets/img3.png';
import page4wallpaper from '../src/assets/page4wallpaper.png';  
import step1 from '../src/assets/step1.png'; 
import step2 from '../src/assets/step2.png';  
import step3 from '../src/assets/step3.png';
import step4 from '../src/assets/step4.png';
import stars from '../src/assets/stars.png';
import doc from '../src/assets/doc.png';
import rating from '../src/assets/rating.png';
import exp from '../src/assets/exp.png';
import rem from '../src/assets/Remove-bg.ai_1713720032063.png';
import googleplay from '../src/assets/googleplay.png';
import mobilepic from '../src/assets/mobilepic.png';
import social from '../src/assets/socials.png';
import { useEffect } from 'react';
import gplay from '../src/assets/gplay.png';

function App() {
  useEffect(() => {

      function loaderAnimation() {
        var loader = document.querySelector("#loader")
        setTimeout(function () {
            loader.style.top = "-100%";
        }, 4200)
      }
      loaderAnimation();
    const menu = document.querySelector("#navbar h3");
    const full = document.querySelector("#full-scr");
    const navimg = document.querySelector("#navbar img");
    var flag=0;
    if (menu && full) {
      menu.addEventListener("click", function() {
        if(flag===0)
        {
          navimg.style.opacity=0;
          full.style.top = "0";
          flag=1;
        }
        else{
          navimg.style.opacity=1;
          full.style.top = "-100%";
          flag=0;
        }
        
      });
    }
  }, []); 
  return (
    <>
      <div id='loader'>
        <h1>WELLNESS</h1>
        <h1>HEALTH</h1>
        <h1>LIFE-STYLE</h1>
      </div>
      <div id="full-scr">
      <div id="full-div1">
        <div id='sml-nav'>
             <h2><a href="/">Home</a></h2>
             <h2><a href="/">Find Doctors</a></h2>
             <h2><a href="/">About us</a></h2>
             <button>Login</button>
             <button>Sign-up</button>
         </div>
      </div>
      </div>
      <div className="main">  
      <div id="page1">
         <Navbar/>
         <div id="center">
                <div id="left">
                  <h2 id='welmsg'>Namaste, Welcome to Amrutham</h2>
                </div>
                <div id="right">
                   
                </div>
          </div>
          <div id='welmsg2'>
              <h1>Step into holistic healing with <u>Ayurveda</u></h1>
              <h1>Book Consultation with Certified Experts.</h1>
              <div id='smltext'>
                 <h3>Dive into the world of ayurveda and experience personalized health solutions and</h3>
                 <h3>Holistic guidance from trusted ayurvedic doctors anytime, anywhere.</h3>
              </div>
              <button>BOOK AN APPOINTMENT</button>
          </div>
      </div>
      <div id='strip'>
            <div id="feature">
              <div id="picsart">
                <img src={picsart1} alt="picsart1" />
              </div>
              <div id='striptext'>
                 <h2>Convenient Online &<br/>In-clinic Consultations</h2>
              </div>
            </div> 
            <div id="feature">
              <div id="picsart">
                <img src={picsart2} alt="picsart2" />
              </div>
              <div id='striptext'>
                 <h2>Safe and Effective<br/>Treatment</h2>
              </div>
            </div>
            <div id="feature">
              <div id="picsart">
                <img src={picsart3} alt="picsart3" />
              </div>
              <div id='striptext'>
                 <h2>Experienced Ayurvedic<br/>Practitioners</h2>
              </div>
            </div>
            <div id="feature">
              <div id="picsart">
                <img src={picsart4} alt="picsart4" />
              </div>
              <div id='striptext'>
                 <h2>Personlized Treatment<br/>Plans & Guidance</h2>
              </div>
            </div>   
          </div>
      <div id="page2">
          <div id="head">
            <h1>Discover Ayurveda's Magic With Us</h1>
            <h4>Ayurvedic treatment aims to balance your body and mind, bringing harmony<br/>
            and vitality. It's like a journey to better health using ancient wisdom,<br/>
            a totally effective approach for a better life.</h4>
          </div>
          <div id='cont'>
             <div id="grid1">
              <div id='page2features'>
                 <div id='text'>
                     <h2>Personalized Wellness</h2>
                     <h3>
                        Get treatments made just for you<br/>
                        based on your individual doshas.<br/>
                        |body type|

                     </h3>
                 </div>
                 <div>
                  <img src={logo1} alt="logo 1" />
                 </div>
              </div>
              <div id='page2feature2'>
                 <div id='text'>
                     <h2>Focus on prevention</h2>
                     <h3>
                        Stop problems even<br/>
                        before they start.
                     </h3>
                 </div>
                 <div>
                  <img src={logo2} alt="logo 2" />
                 </div>
              </div>
              <div id='page2feature3'>
                 <div id='text'>
                     <h2>Mind-Body Connection</h2>
                     <h3>
                        Keep your mind and body in sync<br/>
                       for a happy life

                     </h3>
                 </div>
                 <div>
                  <img src={logo3} alt="logo 3" />
                 </div>
              </div>
             </div>
             <div id="grid2">
               <img src={page2} alt="yoga pic" />
             </div>
             <div id="grid3">
                <div id='page2feature4'>
                 <div>
                  <img src={logo4} alt="logo 4" />
                 </div>
                 <div id='text'>
                     <h2>Holistic Healing</h2>
                     <h3>
                        Fix the root problem for<br/>
                       long-lasting health.
                     </h3>
                 </div>
                </div>
                <div id='page2feature5'>
                 <div>
                  <img src={logo5} alt="logo 5" />
                 </div>
                 <div id='text'>
                     <h2>Natural Remedies</h2>
                     <h3>
                        Using herbs and natural<br/>
                       therapies for healing.
                     </h3>
                 </div>
                </div>
                <div id='page2feature6'>
                 <div>
                  <img src={logo6} alt="logo 6" />
                 </div>
                 <div id='text'>
                     <h2>Boosting Immunity</h2>
                     <h3>
                        Stay strong and healthy for life,<br/>
                       not just for today.
                     </h3>
                 </div>
                </div>
             </div>
          </div>
      </div>
      <div id="page3">
        <div id="head">
          <h1 id='page3-title'>What sets Ayurvedic consultations apart?</h1>
        </div>
        <div id='line1'>
            <div id='box1'>
                <img src={sloka} alt="sloka" />
                <h3>[ Meaning: The Goal of Ayurveda is to maintain the<br/>
                    health of a healthy person and to cure the disease of a <br/> diseased person. ]
                </h3>
            </div>
            <span>
              <img id='bimg' src={img1} alt="woman 1" />
            </span>
            <div id="box2">
              <h1>Precise Diagnosis</h1>
              <h2>Ayurveda's core principles<br/>
                  revolve around Vata, Pitta,<br/>
                  and Kapha doshas, guiding<br/>
                  you with precise diagnosis<br/>
                  and treatment.
              </h2>
            </div>
        </div>
        <div id='line2'>
            <div id="box3">
              <h1>Zero side-effects</h1>
              <h2>Ayurvedic treatments are<br/>
                  devoid of chemicals, and<br/>
                  are based completely on<br/>
                  natural herbs.
              </h2>
            </div>
            <span>
              <img id='line2img' src={img2} alt="products" />
            </span>
            <div id="box4">
              <h1>Individual Treatment</h1>
              <h2>All Treatments are<br/>
                  personalized based on a<br/>
                  person's unique constitution<br/>
                  and health concerns.
              </h2>
            </div>
            <span>
              <img id='line2img' src={img3} alt="woman 2" />
            </span>
        </div>
      </div>
      <div id="page4">
         <img src={page4wallpaper} alt="wallpaper products" height="100%" width="100%"/>
         <section>
            <h1>Ready to restore harmony in<br/> your mind, body and spirit?</h1>
            <button>Book a Consultation</button>
         </section>
      </div> 
      <div id="page5">
          <div id="head">
            <h1>Our Ayurvedic Approach</h1>
            <h4>At Amrutham we follow a unique and personalized approach to healing. Our expert<br/>
             practitioners begin each treatment process by conducting a thorough analysis of the<br/>
            patient's body type, medical history and current health conditions.</h4>
          </div>
          <div id="steps">
            <div id="step1">
              <img src={step1 } alt="step 1" />
              <h1>Make Appointment</h1>
              <h2>You must make make an<br/>appointment in advance, to<br/>choose the service and date.</h2>
            </div>
            <div id="step1">
              <img src={step2} alt="step 2" />
              <h1>Consultations</h1>
              <h2>The next stage involves a<br/>thorough consultation with<br/>an Ayurveda practitioner.</h2>
            </div>
            <div id="step1">
              <img src={step3} alt="step 3" />
              <h1>Treatment Planning</h1>
              <h2>The Ayurvedic practitioner<br/>creates a personalized<br/>treatment plan for you.</h2>
            </div>
            <div id="step1">
              <img src={step4} alt="step 4" />
              <h1>Maintenance</h1>
              <h2>These visits allow for<br/>assessment of progress,<br/>adjustments to the<br/>treatment.</h2>
            </div>
          </div>
          <div id='steps-sml'>
          <div id="carouselExampleIndicators3" className="carousel slide is-paused">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="2" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" >
                <div id="step1">
                  <img src={step1 } alt="step 1" />
                  <h1>Make Appointment</h1>
                  <h2>You must make make an<br/>appointment in advance, to<br/>choose the service and date.</h2>
                </div>
              </div>
              <div className="carousel-item">
                  <div id="step1">
                    <img src={step2} alt="step 2" />
                    <h1>Consultations</h1>
                    <h2>The next stage involves a<br/>thorough consultation with<br/>an Ayurveda practitioner.</h2>
                 </div>
              </div>
              <div className="carousel-item">
                <div id="step1">
                  <img src={step3} alt="step 3" />
                  <h1>Treatment Planning</h1>
                  <h2>The Ayurvedic practitioner<br/>creates a personalized<br/>treatment plan for you.</h2>
                </div>
              </div>
              <div className="carousel-item">
                <div id="step1">
                  <img src={step4} alt="step 4" />
                  <h1>Maintenance</h1>
                  <h2>These visits allow for<br/>assessment of progress,<br/>adjustments to the<br/>treatment.</h2>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" id='boxbtn'  type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id='boxbtnright' type="button" data-bs-target="#carouselExampleIndicators3" data-bs-slide="next">
              <span className="carousel-control-next-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          </div>
      </div>
      <div id='page6'>
          <div id="head">
            <h1>Stories from our valued customers!</h1>
          </div>
          <div  id='customers'>
            <div id="carouselExampleIndicators" className="carousel slide is-paused">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <div id="review1">
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                 <div id="review1">
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                 <div id="review1">
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
            <button className="carousel-control-prev" id='boxbtn'  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id='boxbtnright' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
          <div  id='customers-sml'>
            <div id="carouselExampleIndicators4" className="carousel slide is-paused">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <div id="review1">
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
                 <div id="review1">
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                 <div id="review1">
                  <div id='customer'>
                    <div id="b0">
                       <h3>Consulted for skin</h3>
                    </div>
                    <div id="b1">
                      <div id='profile'></div>
                      <div id='name'>
                        <h2>Sophie Moore</h2>
                        <h4>Chennai</h4>
                      </div>
                      <div id='date'>
                        <h3>17/02/24</h3>
                      </div>
                    </div>
                    <img src={stars} alt='stars' />
                    <div id="b2">
                      <h1>"One of a kind service"</h1>
                      <h6>Lorem ipsum dolor sit amet consectetur elit.<br/> Ullam , expedita animi dolorem ipsa eaque,<br/> labore at  voluptatum mollitia!</h6>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
            <button className="carousel-control-prev" id='boxbtn'  type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id='boxbtnright' type="button" data-bs-target="#carouselExampleIndicators4" data-bs-slide="next">
              <span className="carousel-control-next-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
      </div>
      <div id="page7">
          <div id="head">
            <h1>Meet our Ayurveda Experts</h1>
          </div>
          <div id='doctors'>
            <div id="carouselExampleIndicators2" className="carousel slide is-paused">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <div id="review1">
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
              <div id="review1">
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div id="review1">
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" id='boxbtn'  type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id='boxbtnright' type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide="next">
              <span className="carousel-control-next-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
          <div id='doctors-sml'>
            <div id="carouselExampleIndicators5" className="carousel slide is-paused">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item">
                <div id="review1">
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item active">
              <div id="review1">
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div id="review1">
                  <div id='doctor'>
                      <div id="d1">
                        <div>
                          <img  src={doc} alt="doctor"/>
                        </div>
                        <div id='rating'>
                           <img src={rating} alt="rating"/>
                        </div>
                      </div>
                      <div id="d2">
                        <h2>Dr. Vaishali Sharma</h2>
                        <h4>Ayurveda Practitioner (BAMS,MD)</h4>
                        <h3><img src={exp} alt="experince"/>25 years of experience</h3>
                      </div>
                      <div id="d3">
                         <h3><img src={rem} alt="medicine"/>Skin specialist</h3>
                      </div>
                      <div id="d4">
                         <h3>Book a session</h3>
                      </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" id='boxbtn'  type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" id='boxbtnright' type="button" data-bs-target="#carouselExampleIndicators5" data-bs-slide="next">
              <span className="carousel-control-next-icon" id='btn' aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
            </div>
          </div>
          <div id='pgbtn'>
            <button>Find More Experts </button>
          </div>
      </div>
      <div id="page8">
            <div id='a1'>
               <h1>Amrutham Home App</h1>
               <h5>The Amrutham Home App is your one-stop app for all things Ayurveda! Apart<br/>from mmimicking the significant characteristics of our website, this app offers a<br/>wide range of additional features.</h5>
            </div>
            <div id='a2'>
              <img src={mobilepic} alt="Mobile"/>
            </div>
            <div id='a3'>
                <h2 id='comt'>Get a Diet & Lifestyle Consultation with<br/>Ayurvedic Experts across the Globe</h2>
                <h3>Get The App Now</h3>
                <div id="gplay">
                   <img src={googleplay} alt="googleplay and app store"/>
                </div>
                <div id="gplay-sml">
                  <img src={gplay} alt="googleplay and app store"/>
                </div>
            </div>
      </div>
      <div id='footer'>
           <div id="touch">
                 <h3>Get in touch</h3>
                 <h5>support@amrutham.co.in</h5>
                 <h4>Amrutham Pharmaceuticals Pvt Ltd.,<br/>chitragupt ganj, Nai Sadak, Lashkar,<br/> Gwalior - 474001</h4>
                 <h4>+91 9713171999</h4>
                 <img src={social} alt='social'/>
           </div>
           <div id="inform">
              <h3>Information</h3>
              <div><a href='/'>About Us</a></div>
              <div><a href='/'>Terms and Conditions</a></div>
              <div><a href='/'>Privacy Policy</a></div>
              <div><a href='/'>Privacy Policy for Mobile Apps</a></div>
              <div><a href='/'>Shipping and returns Policy</a></div>
              <div><a href='/'>Internal Delivery</a></div>
              <div><a href='/'>For Businesses, Hotels and Resorts</a></div>
           </div>
           <div id="subscribe">
            <h3>Subscribe to our Newsletter and join<br/> Amrutham Family today!</h3>
            <input type="email" placeholder="Your Email Address" autoComplete="on" id='email'/>
            <button>Subscribe</button>
           </div>
      </div>
      </div>
    </>
  );
}

export default App;

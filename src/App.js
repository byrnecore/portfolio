import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <span className="logo">Shaun Byrne</span>
          </div>
          <div className="header-right">
            <a className="icon" target="_blank" href="https://www.linkedin.com/in/byrneshaun/">
              <img src={require('./img/icon_linkedin.svg')} alt="" />
            </a>
            <a className="icon" target="_blank" href="https://twitter.com/byrnecore">
              <img src={require('./img/icon_twitter.svg')} alt="" />
            </a>
            <a className="icon" target="_blank" href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I found your portfolio">
              <img src={require('./img/icon_email.svg')} alt="" />
            </a>
          </div>
        </div>

      </header>
      <section className="intro">
        <div className="container reveal">
          <h1>Shaun Byrne</h1>
          <h2>Product Designer & Leader</h2>
          <img className="divider" src={require('./img/divider.png')} width="72" alt="divider" alt="" />
          <p>Hi, I’m a data informed product design leader experienced in helping growing companies make better decisions, faster.</p>
          <a className="button" target="_blank" href="#recent">Recent work</a>
          <a className="button tertiary" target="_blank" href="https://www.dropbox.com/s/ykj9nxgvgtifbxb/Resume%20-%20Shaun%20Byrne.pdf?dl=0">My resume</a>
        </div>
      </section>
      <div className="section-wrapper">
        <section className="recent" id="recent">
          <div className="container reveal">
            <h1 className="reveal">My Recent Work</h1>
            {/* <img className="divider" src={require('./img/divider.png')} width="72" alt="divider" alt="" /> */}
            <div className="workcontainer reveal">
              <div className="workcolumns description">
                <div className="label">
                  <div className="label_name">Leadership & Strategy</div>
                </div>
                <h2>Openpay Consumer & Merchant Product Strategy</h2>
                <p>I led the consumer and merchant product strategy through facilitated design thinking workshops which generated quantified business opportunities and targets. This was a strategic initiative to enable better autonomy to teams to deliver and measure their success, but also give space for designers to solve problems end to end. </p>
                <p><a href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I saw your case studies">Contact me</a> to learn more</p>

              </div>
              <div className="workcolumns image">
                <img className="card" src={require('./img/02_main01.jpg')} alt="" />
                <div className="secondary_images">
                  <div className="image"><img className="card" src={require('./img/02_support02.jpg')} alt="" /></div>
                  <div className="image"><img className="card" src={require('./img/02_support03.jpg')} alt="" /></div>
                </div>
              </div>
            </div>
            <div className="workcontainer reveal">
              <div className="workcolumns description">
                <div className="label">
                  <div className="label_name">Leadership & Strategy</div>
                </div>
                  <h2>Openpay Product Team Strategy</h2>
                  <p>Transformed Openpay’s team structure from a traditional software development model into a cross functional product centric model through inclusive collaboration and C-level engagement.</p>
                  <p><a href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I saw your case studies">Contact me</a> to learn more</p>
                </div>
                <div className="workcolumns image">
                  <div className="card"><img className="lrg" src={require('./img/01_main.jpg')} alt="" /></div>
                </div>
            </div>

            <div className="workcontainer reveal">
              <div className="workcolumns description">
                <div className="label">
                  <div className="label_name">Product Design</div>
                </div>
                <h2>Openpay App Onboarding</h2>
                <p>Reimagined the Openpay app onboarding experience to reduce friction to access. Through the employment of subtle gamification and more focused steps, I was able to significantly increase the success of onboarding. </p>
                <p><a href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I saw your case studies">Contact me</a> to learn more</p>
              </div>
              <div className="workcolumns image">
                <img className="card" src={require('./img/03_main01.jpg')} alt="" />
                <div className="secondary_images">
                  <div className="image"><img className="card" src={require('./img/03_support02.jpg')} alt="" /></div>
                  <div className="image"><img className="card" src={require('./img/03_support03.jpg')} alt="" /></div>
                </div>
              </div>
            </div>
            <div className="workcontainer reveal">
              <div className="workcolumns description">
                <div className="label">
                  <div className="label_name">Product Design</div>
                </div>
                <h2>Openpay Experience Audit</h2>
                <p>Audited and consolidated the product design suite to adhere to understood design & usability patterns and WCAG AA accessibility standards that aligned with branding.</p>
                <p><a href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I saw your case studies">Contact me</a> to learn more</p>
              </div>
              <div className="workcolumns image">
                <img className="card" src={require('./img/04_main01.jpg')} alt="" />
              </div>
            </div>
            <div className="workcontainer reveal">
              <div className="workcolumns description">
                <div className="label">
                  <div className="label_name">Product Design</div>
                </div>
                <h2>Scaling Redbubble search filtering</h2>
                <p>To cater for the growth of Redbubble's search filtering capability, I led a design track to reimagine filtering and make it scale long into the future.</p>
                <p><a href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I saw your case studies">Contact me</a> to learn more</p>
              </div>
              <div className="workcolumns image">
                <div className="video">
                  <video autoPlay muted loop>
                    <source src={require('./img/video_rb-searchmenu.mp4')} type="video/mp4" alt="" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            {/*<div className="workcontainer reveal">
              <div className="workcolumns description">
                <div className="label">
                  <div className="label_name">Product Design & Strategy</div>
                </div>
                <h2>Redbubble Search Engagement Strategy</h2>
                <p>More content than this</p>
              </div>
              <div className="workcolumns image">
                <img className="card" src={require('./img/04_main01.jpg')}>
              </div>
            </div>
            */}
          </div>
        </section>

        <section className="worked-with">
          <div className="container reveal">
            <h1 className="reveal">I've worked with some of the worlds most recognised brands and tech giants. </h1>
            {/*<img className="divider" src={require('./img/divider.png')} width="72" alt="divider">*/}
            <div className="brand-list reveal">
              <div className="brand"><img src={require('./img/brand.redbubble.svg')} alt="Redbubble" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.openpay.svg')} alt="Openpay" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.news.svg')} alt="News Corp" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.zendesk.svg')} alt="Zendesk" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.dribbble.svg')} alt="Dribbble" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.philips.svg')} alt="Philips" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.pepsico.svg')} alt="Pepsico Aust." alt="" /></div>
              <div className="brand"><img src={require('./img/brand.canon.svg')} alt="Canon" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.bosch.svg')} alt="Bosch" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.rockport.svg')} alt="Rockport" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.adidas.svg')} alt="Adidas" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.taf.svg')} alt="The Athlete's Foot" alt="" /></div>
              <div className="brand"><img src={require('./img/brand.parmalat.svg')} alt="Parmalat" alt="" /></div>
            </div>
          </div>
        </section>

        <section className="recommendations">
          <div className="container reveal">
            <h1 className="reveal">Testimonials</h1>
            {/* <img className="divider" src={require('./img/divider.png')} width="72" alt="divider"> */}
            <div className="testimonials">
              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-stewart_boon.jpg')} alt="Stewart Boon: Head of Product at Oculo" alt="" />
                <div className="name"> <span className="author">Stewart Boon</span><span className="position">Head of Product at Oculo • Prev. Openpay, Seek, Envato</span></div>
                <div className="quote">
                  <p>During my time working with Shaun, he displayed many of the attributes of great design leadership: very supportive of his team, proficient across the spectrum of product discovery research through to on the tools UX and UI designs, very collaborative, a real champion of agile ways of working and most of all - always had the best interests of the business and his team at heart. I'd gladly work with Shaun again</p>
                </div>
              </blockquote>
              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-katrina.jpg')} alt="Katrina Burke: Chief Information Officer at Openpay" alt="" />
                <div className="name"> <span className="author">Katrina Burke</span><span className="position">Chief Information Officer at Openpay • Prev. SAP</span></div>
                <div className="quote">
                  <p>Shaun has been a massive contributor to the growth of the Openpay business and to the overall ways of working within the Technology Team. He demonstrated tenacity and focus on a cultural delivery approach as the business came to grow in the agile/product design space. Under his direction the UX grew in size and maturity. Shaun has a passion for learning and sharing that knowledge across the business with a real focus on connection with people, not their role or job title.</p>
                </div>
              </blockquote>

              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-jacob.jpg')} alt="Jacob Christophersen: Software Development Lead at Openpay" alt="" />
                <div className="name"> <span className="author">Jacob Christophersen</span><span className="position">Development Lead at Openpay • Prev. Microsoft, Skype</span></div>
                <div className="quote">
                  <p>I treasure my time working with Shaun at Openpay, where he had a massive impact on transforming the culture to be more product and customer-focused. He is extremely personable and collaborative. While building his design team he also educated and encouraged the rest of the company's growth and ways of working. From my experience with Shaun, I have no doubt he will have a huge positive influence and impact in any endeavour he tackles.</p>
                </div>
              </blockquote>
              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-emy_alegre.jpg')} alt="Emy Alegre: UX Lead at Redbubble" alt="" />
                <div className="name"> <span className="author">Emy Alegre</span><span className="position">UX Lead at Redbubble • Prev. REA</span></div>
                <div className="quote">
                  <p>Shaun's a fantastic product designer, highly conceptual and detail oriented. He's a unique hybrid with many years of experience working with qualitative and quantitative data, gathering and analyzing customer insights, and developing holistic customer experiences.</p>
                </div>
              </blockquote>
              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-james_mansfield.jpg')} alt="James Mansfield: Head of Design at Amplified" alt="" />
                <div className="name"> <span className="author">James Mansfield</span><span className="position">Head of Design at Amplified • Prev. REA, 99 Designs, Cogent</span></div>
                <div className="quote">
                  <p>Shaun is a talented designer and a sincere team player. He’s a real asset with a broad skill set, from research through to prototyping, but it’s his humility that I really like. He constantly collaborates with the other designers at Redbubble, as well as within his product team, and broadens everyone's understanding of the problem they’re solving.</p>
                </div>
              </blockquote>
              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-siavash_shabanipour.jpg')} alt="Siavash Shabanipour: Senior iOS Designer at iFlix" alt="" />
                <div className="name"> <span className="author">Siavash Shabanipour</span><span className="position">Product Designer at CoinJar • Prev. iFlix, Seek, REA, 99 Designs, Redbubble</span></div>
                <div className="quote">
                  <p>Shaun’s the kind of guy you poke fun at him face to face but you talk highly of him behind his back. He’s easy going and has a great work attitude. He leaves his ego behind and instead puts forward insights from research and data when making decisions. He’s in the smaller majority of designers that go far beyond pixels and view product design holistically.</p>
                </div>
              </blockquote>
              <blockquote className="testimonial reveal">
                <img className="avatar" src={require('./img/referee-joe_nguyen.jpg')} alt="Joe Nguyen: iOS Director at Fuzz" alt="" />
                <div className="name"> <span className="author">Joe Nguyen</span><span className="position">iOS Director at Fuzz • Prev. General Assembly, Hollerback</span></div>
                <div className="quote">
                  <p>Shaun truly has a knack for all things related to UX and design. He is able to envision ideas and communicate them to all levels of a business. In various projects we've worked on, he is able to quickly demonstrate creative solutions to problems both in design and product.</p>
                </div>
              </blockquote>
            </div>
            <a className="button reveal dark" target="_blank" href="https://www.linkedin.com/in/byrneshaun">View more on Linkedn</a>
          </div>

        </section>
        <section className="contact" id="contact">
          <div className="container reveal">
            <div className="content">
              <h2>Interested in a chat?</h2>
              <p>I've usually got time for a ☕️ or 💬. Get in contact if you want to learn more about me, my work, or you want really good Melbourne café suggestions. </p><a className="button dark" target="_blank" href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I found your portfolio">Contact me</a>
            {/* <div className="card_bg" style="background-image: url(&quot;http://redbubble.design/static/media/ds-illustration-wallart-1x.cda44af6.png&quot;);"></div> */}
            </div>
            <div className="image">
              <img src={require('./img/icon_send-mail.svg')} height="150" width="150" alt="" />
            </div>
          </div>
        </section>
      </div>
      <section className="footer">
         <div className="container">
          <div className="links">
            <a target="_blank" href="mailto:byrnecore+portfolio@gmail.com?subject=Hi, I found your portfolio" className="footerlink">Email</a>
            <a target="_blank" href="https://www.linkedin.com/in/byrneshaun/" className="footerlink">LinkedIn</a>
            <a target="_blank" href="https://twitter.com/byrnecore" className="footerlink">Twitter</a>
            <a target="_blank" href="https://www.dropbox.com/s/ykj9nxgvgtifbxb/Resume%20-%20Shaun%20Byrne.pdf?dl=0" className="footerlink">My Resume</a>
          </div>
          <div>
            <p>Designed & built in Melbourne , 🇦🇺, 🌏.  Shaun Byrne © 2020</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

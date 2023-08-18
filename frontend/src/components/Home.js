import React, { useState } from 'react';
import {call, cu,hero, gwork, gb, gr, boi, rya, dgr, syp, gyl, prplimg } from '../images/images.js';
import {WestIcon, EastIcon, RestaurantIcon, TourIcon, ConstructionIcon, AddShoppingCartIcon, CheckroomIcon, SchoolIcon, MedicationLiquidIcon, HomeWorkIcon, AppleIcon, CampaignOutlinedIcon, InfoOutlinedIcon, GroupsTwoToneIcon, TelegramIcon, ExpandMoreOutlinedIcon, QueryStatsIcon, LanguageIcon, InstagramIcon, AdsClickIcon, TravelExploreIcon, DriveFileRenameOutlineIcon, DesignServicesIcon, ViewArrayIcon} from '../icons/iconImports.js';
import { LeftImage, RightImage } from '../templates/LRimage'
import West from '@mui/icons-material/West.js';
import Slider from '../templates/slider.js';
import TestimonialsSlider from '../templates/slider.js';
import Footer from './Footer.js';


const Home = () => {
  // marketing form
  const [marketing_form, setMarketing_form] = useState({
    MarketingEmail:"", 
    MarketingPhone:""
  })
  let name, value;
  const handleMarketingForm = (e) =>{
    name = e.target.name
    value = e.target.value
    setMarketing_form({...marketing_form, [name]:value})
  }

  // contact form
  const [contactForm, setContactForm] = useState({
    contactFirstname:"",
    contactLastname: "",
    contactPhone: "",
    contactEmail: "",
    contactService: "",
    contactMessage: ""
  });
  
  const handleContactForm = (e) => {
    name = e.target.name
    value = e.target.value
    setContactForm({...contactForm, [name]:value})
  }

  return(
  <>
  <body>
    <div className='container hero-sec'>
      <div className="row">
        <div className='col-md-6 col1'>
          <h1>Platform for Grow</h1>
          <p>Our passionate team of experts is committed to crafting dynamic campaigns that captivate audiences, build meaningful connections, and propel businesses to new heights. Through a blend of data-driven insights and creative prowess, we navigate the ever-evolving digital landscape, ensuring your brand stands out in a crowded marketplace. Partner with us today and unleash the true potential of your online presence.</p>
            <button className='orng-btn'>Get free groth plan</button>
            <button className='prpl-btn'>Watch video</button>
        </div>
        <div className='col-md-6 col2'>
          <img className='hero-img' src={hero}/>
        </div>
      </div>
    </div>
    

    <div className='container'>
      <div className="row">
        <div className='col1 col-md-6'>
          <span className='clr-span'>Benefits of working with us</span>
          <h3>Why Choose Us</h3>
        </div>
        <div className='col-md-6 col2'>
          <button className='prpl-btn'>Get in touch</button>
        </div>
      </div>
    

    
      <div className="row ch-4cols">
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          
          <CampaignOutlinedIcon style={{fontSize:40}}/>
          <span className='bold-span'>Result-Driven Marketing</span>
          <p>We provide marketing services that drive practical results.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          
          <InfoOutlinedIcon style={{fontSize:40}}/>
          <span className='bold-span'>Detailed Reporting</span>
          <p>Receive a detailed monthly report that outlines stats and progress.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          
          <GroupsTwoToneIcon style={{fontSize:40}}/>
          <span className='bold-span'>Expert Team</span>
          <p>Our in-house marketing team is well-versed in growing businesses.</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          
          <TelegramIcon style={{fontSize:40}}/>
          <span className='bold-span'>Increased Brand Awareness</span>
          <p>Let more people know about your business and services.</p>
        </div>
      </div>
    </div>


    <div className='container'>
      <div className="row">
        <div className='col-md-6 gw-col1'>
          <img className='hero-img' src={gwork}/>
        </div>
        <div className='col-md-6 gw-col2'>
          <span className='clr-span'>Reach Your Ideal Customers</span>
          <h3>Your Great Work Deserves Great Marketing</h3>
          <p>We have a great team of experts that are ready to help you with your marketing needs. We will work with you to create a marketing strategy that helps you reach your goals. Torque Digital marketing agency in the USA helps you increase brand visibility with digital marketing campaigns. We will design, manage, and execute a winning digital marketing strategy to put your services in front of your target audience. Get a custom-tailored plan from us today!</p>
          <button className='orng-btn' style={{width:150}}>Get in touch</button>
        </div>
      </div>
    </div>


    <div className='container sec3'>
      <div className="row">
        <div className='col-md-6 gb-col1'>
          <span className='clr-span'>A Complete Package</span>
          <h3>Grow Your Business in 3 Steps</h3>
          <p style={{marginBottom:40}}>From branding and web development to SEO and social media management, we can create a tailored digital marketing strategy for your company that will help bring in more customers and make more profits.</p>
          
          <p>
          <a className='clps-tag' data-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapseExample"><ExpandMoreOutlinedIcon/>
            We’ll Design & Create Your Website
            </a>
          </p>
          <div className="collapse" id="collapse1">
            <div className="card card-body">
              From branding and web development to SEO and social media management, we can create a tailored digital marketing strategy for your company that will help bring in more customers and make more profits.
            </div>
          </div>

          <p>
          <a className='clps-tag' data-toggle="collapse" href="#collapse2" role="button" aria-expanded="false" aria-controls="collapseExample"><ExpandMoreOutlinedIcon/>
          We’ll Create Unique Branding For Your Business
            </a>
          </p>
          <div className="collapse" id="collapse2">
            <div className="card card-body">
              From branding and web development to SEO and social media management, we can create a tailored digital marketing strategy for your company that will help bring in more customers and make more profits.
            </div>
          </div>

          <p>
          <a className='clps-tag' data-toggle="collapse" href="#collapse3" role="button" aria-expanded="false" aria-controls="collapseExample"><ExpandMoreOutlinedIcon/>
          We’ll 5x Your Profits
            </a>
          </p>
          <div className="collapse" id="collapse3">
            <div className="card card-body">
              From branding and web development to SEO and social media management, we can create a tailored digital marketing strategy for your company that will help bring in more customers and make more profits.
            </div>
          </div>

          <button className='orng-btn clps-btn' style={{width:150}}>Get started</button>
        </div>
        <div className='col-md-6 gb-col2'>
          <img className='hero-img' src={gb}/>
        </div>
      </div>
    </div>


    <div className="container">
        <div className="row">
          <div className='col1 col-md-6'>
            <span className='clr-span'>We Cater to All Your Business Needs</span>
            <h3>Our Services</h3>
            <p>We use all channels of digital marketing to ensure your business stands out from the competition. Rise to the top of your industry by using our digital marketing services.</p>
          </div>
          <div className='col-md-6 col2'>
            <button className='prpl-btn'>Read more</button>
          </div>
        </div>
        
        <div className="row ch-4cols">
          <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
            <QueryStatsIcon style={{fontSize:40}}/>
            <p>Search Engine Optimization</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
            <LanguageIcon style={{fontSize:40}}/>
            <p>Web Design & Development</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
            <InstagramIcon style={{fontSize:40}}/>
            <p>Social Media Marketing</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
            <AdsClickIcon style={{fontSize:40}}/>
            <p>Pay-Per-Click Ads</p>
          </div>
        </div>

      <div className="row ch-4cols">
          <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          <TravelExploreIcon style={{fontSize:40}}/>
          <p>Local SEO</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          <DriveFileRenameOutlineIcon style={{fontSize:40}}/>
          <p>Content Writing</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          <DesignServicesIcon style={{fontSize:40}}/>
          <p>Graphic Designing</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-6 ch-col">
          <ViewArrayIcon style={{fontSize:40}}/>
          <p>UI/UX Design</p>
        </div>
      </div>
    </div>
    

    <div className="container">
        <div className="row">
          <div className='col1 col-md-6'>
            <span className='clr-span'>Why Us?</span>
            <h3>Our Achievements</h3>
            <p>Here’s why Torque Digital is the best choice to grow and flourish your business. Get in touch today and give your business a boost to the top of your industry.</p>
            <button className='prpl-btn'>Contact us</button>
          </div>

          <div className='col-md-6 col2'>
            <div className='div-8'>
              <div className='row1'>
                <div className='inner-4divs col-md-3'>.........</div>
                <div className='inner-8divs col-md-3'><h4>100%</h4><span>Satisfaction Rate</span></div>
                <div className='inner-4divs col-md-3'>.........</div>
                <div className='inner-8divs col-md-3'><h4>50+</h4><span>Projects Done</span></div>
              </div>
              <div className='row2'>
                <div className='inner-8divs col-md-3'><h4>5+</h4><span>Glorious Years</span></div>
                <div className='inner-4divs col-md-3'>.........</div>
                <div className='inner-8divs col-md-3'><h4>50+</h4><span>Active Clients</span></div>
                <div className='inner-4divs col-md-3'>.........</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      

    <LeftImage 
      ImageLink = {gr} 
      Heading="Rank #1 on Google With Torque Digital SEO Services" 
      BtnText="Get started" 
      Parag="We’re here to help your business grow by providing you with the tools and services you need
      for success. With our result-driven Torque SEO services, we can help your business become
      #1 on Google and get more leads from the traffic. To stay in business, you need visibility.
      Torque Digital will help you rank #1 on Google for the keywords that matter most to your
      business so you can reach more customers and increase profits."
    />
    <RightImage 
      ImageLink = {boi} 
      Heading="Build Your Online Identity" 
      BtnText="Get started" 
      Parag="Build your online identity! With Torque Digital Marketing Services, you can create a
      website that people want to see. We’ll help you build an online presence that stands out
      and doesn’t look like everyone else’s results page. Digitally branded businesses can
      stand out from the competition and attract new clients. With our unique branding and
      web development services, you’ll be the first on your customers’ minds."
    />
    <LeftImage
      ImageLink = {rya} 
      Heading="Resonate With Your Audience" 
      BtnText="Get started" 
      Parag="Exciting new businesses are built around social media, so why not get in on the action? The
      team at Torque Digital can help you manage your presence and increase profits through
      effective ad strategies and marketing. Get more shares, clicks and leads with our social
      media management services that help you resonate with your audience."
    />
    <RightImage 
      ImageLink = {dgr} 
      Heading="Dominate Google Results Using GBP" 
      BtnText="Get started" 
      Parag="With Google Business Profile (GBP), create an online identity and connect with the world
      like never before. Customers search for businesses by name on Google. Get top
      rankings on Google Search, Maps, and see your business details listed on the search
      results page. We’ll create an attractive Google Business Profile for your business."
    />
    <LeftImage 
      ImageLink = {syp} 
      Heading="Secure Your Profits" 
      BtnText="Get started" 
      Parag="Just like a wrench tightens bolts on a car, we’ll secure your profits in place by driving
      people towards your business. We’ll take care of marketing while you focus on doing
      what you do best: providing excellent services to your customers. Gain an edge over your
      competitors using digital marketing services."
    />
    <RightImage 
      ImageLink = {gyl} 
      Heading="Get Found in Your Locality" 
      BtnText="Get started" 
      Parag="Your business is local—let Torque Digital help you reach your local audience!
      Digital marketing services that focus on local SEO help your potential
      customers find your business in your specific area. Is your business in
      Sacramento? We’ll make sure you rank on top there!"
    />


      <div className="container">
        <div className="row">
          <div className='col-md-6 col1'>
            <span className='clr-span'>We Cater to the Following Industries</span>
            <h3>Industries</h3>
            <p>Our professional digital marketing company caters to many different industries. Can’t see your business industry? Contact us, and we’ll customize a marketing plan for you.</p>
            <button className='prpl-btn'>Read more</button>
          </div>
          <div className='col-md-6 col2'>
            <div className="row ch-4cols">
              <div className="col-4 ch-col">
                <RestaurantIcon style={{fontSize:30}}/>
                <p>Restaurants</p>
              </div>
              <div className="col-4 ch-col">
              <TourIcon style={{fontSize:30}}/>
                <p>Tourism</p>
              </div>
              <div className="col-4 ch-col">
                <ConstructionIcon style={{fontSize:30}}/>
                <p>Auto Repair</p>
              </div> 
            </div>
          </div>
        </div>
        <div className="ch-4cols">
              <div className="col-2 ch-col">
                <AddShoppingCartIcon style={{fontSize:30}}/>
                <p>E-Commerce</p>
              </div>
              <div className="col-2 ch-col">
                <CheckroomIcon style={{fontSize:30}}/>
                <p>Fashion</p>
              </div>
              <div className="col-2 ch-col">
                <SchoolIcon style={{fontSize:30}}/>
                <p>Ed-Tech</p>
              </div>
              <div className="col-2 ch-col">
                <MedicationLiquidIcon style={{fontSize:30}}/>
                <p>Healthcare</p>
              </div>
              <div className="col-2 ch-col">
                <HomeWorkIcon style={{fontSize:30}}/>
                <p>Real Estate</p>
              </div>
              <div className="col-2 ch-col">
                <AppleIcon style={{fontSize:30}}/>
                <p>Brand</p>
              </div>
            </div>
      </div>

      <div className="container">
        <div className="row">
          <div className='col-md-6 col1'>
            <span className='clr-span'>What Makes Torque Digital the Right Choice</span>
            <h3>Testimonials</h3>
            <p>Here’s what our customers think of Torque Digital. Their feedback matters to us, so we can strive to improve!</p>
            <div className='test-div'>
            <button className='prpl-btn'>Read more</button>
            </div>
          </div>
          <div className='col-md-6 col1'><TestimonialsSlider/></div>
        </div>
      </div>
      
    <section className='container prpl-div'>
      <div className='col-md-6'><h3 className='prplr-txt'>Get Your Custom</h3><h3 className='prplr-txt'> Marketing</h3><h3 className='prplr-txt'>Strategy Today!</h3>
      </div>
      <div className='col-md-6 prpl-inner'>
        <div className='col-md-6'>
          <form className='prple-form'>
            <input type="text" id="email" name="MarketingEmail" placeholder='Email address' required
            value = {marketing_form.MarketingEmail}
            onChange={handleMarketingForm}
            />
            <input type="email" id="phone" name="MarketingPhone" placeholder='Phone Number' required
            value = {marketing_form.MarketingPhone}
            onChange={handleMarketingForm}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className='col-md-6'><img src={prplimg} className='prplimg'/></div>
      </div>
    </section>

    <div className="container">
        <div className="row">
          <div className='col-md-6 col1'>
            <span className='clr-span'>Let’s answer some of the most asked questions.</span>
            <h3>FAQs</h3>
            <div className='test-div'>
            </div>
          </div>
          <div className='col-md-6 col2'>
            <button className='prpl-btn'>Contact us</button>
            </div>
        </div>
    </div>
      

    <div className='container faqs'>
      <div className="row faqs-row">
        <div className='col-md-6 gb-col1'>
        </div>
        <div className='col-md-12'>
        <div id="accordion">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link faq-btn" data-toggle="collapse" data-target="#1" aria-expanded="false" aria-controls="collapseOne">
                    How can I use your digital marketing services?
                  </button>
                </h5>
              </div>
              <div id="1" class="collapse collapsed" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                Utilizing our digital marketing services is a seamless process. We begin by understanding your goals and crafting a customized strategy. Our team implements and monitors campaigns while providing transparent reports. With continuous optimization and collaboration, we ensure your business achieves impactful results.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed faq-btn" data-toggle="collapse" data-target="#2" aria-expanded="false" aria-controls="collapseTwo">
                    What are your most requested marketing services?
                  </button>
                </h5>
              </div>
              <div id="2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                Search Engine Optimization (SEO): Elevate your online visibility through strategic website optimization, attracting valuable organic traffic and potential customers.

                <br/>Social Media Marketing: Engage and connect with your audience across platforms, utilizing tailored content and ads to drive brand loyalty and conversions.

                <br/>Pay-Per-Click (PPC) Advertising: Achieve targeted outreach and high ROI with precise ads on platforms like Google Ads and social media networks.

                <br/>Content Marketing: Showcase your expertise and engage users with valuable blogs, videos, and infographics, establishing thought leadership and driving traffic.

                <br/>Email Marketing: Foster relationships and drive sales through personalized email campaigns, delivering relevant content and promotions.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed faq-btn" data-toggle="collapse" data-target="#5" aria-expanded="false" aria-controls="collapseThree">
                    How long does it take for SEO services to show results?
                  </button>
                </h5>
              </div>
              <div id="5" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                The timeline for SEO results varies depending on factors such as your industry, website's current state, and strategies applied:

                <br/>Initial Weeks to 2 Months: In this phase, initial technical fixes and on-page optimizations can lead to better indexing and minor keyword movements.

                <br/>3 to 6 Months: As search engines assess your optimized content, you might notice improvements in keyword rankings and organic traffic.

                <br/>6 Months to 1 Year+: Over time, the effects of consistent efforts compound, resulting in more significant jumps in rankings, traffic, and engagement.

                <br/>Content and Backlinks: Creating high-quality content and building authoritative backlinks contribute to long-term growth.

                <br/>Ongoing Efforts: SEO is continuous; consistent monitoring and adjustments are vital to maintain and enhance your search position.

                <br/>Industry Factors: Competition and keyword difficulty can influence the pace of results.

                <br/>Patience Pays Off: While early gains are encouraging, lasting SEO success often requires patience and commitment.

                <br/>Professional Guidance: Working with experts helps tailor strategies, manage expectations, and navigate the evolving SEO landscape.
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed faq-btn" data-toggle="collapse" data-target="#3" aria-expanded="false" aria-controls="collapseThree">
                    Do you provide domain and hosting for websites?
                  </button>
                </h5>
              </div>
              <div id="3" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  We don't provide services directly, but I can certainly offer information. Many web development companies, hosting providers, and domain registrars offer domain and hosting services for websites. 
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link collapsed faq-btn" data-toggle="collapse" data-target="#4" aria-expanded="false" aria-controls="collapseThree">
                    How much do your digital marketing services cost?
                  </button>
                </h5>
              </div>
              <div id="4" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  Digital marketing service costs vary widely based on factors like the scope of services, the size of your business, the level of competition in your industry, and the goals you aim to achieve. Here's a general breakdown:

                  <br/>SEO: Monthly costs can range from a few hundred to several thousand dollars, depending on the complexity of your website and the competitiveness of your target keywords.

                  <br/>PPC Advertising: For platforms like Google Ads or social media ads, costs depend on your budget, bidding strategy, and the popularity of your keywords or audience.

                  <br/>Social Media Marketing: Monthly management fees can vary, typically starting from a few hundred dollars, especially if you require content creation, scheduling, and engagement services.

                  <br/>Content Marketing: Costs depend on the type and volume of content you need. Blog posts, videos, infographics, and other content formats have varying production costs.

                  <br/>Email Marketing: Expenses include email platform fees and possibly content creation costs.

                  <br/>Influencer Marketing: Costs depend on the influencer's reach and engagement rate, ranging from free products to several thousand dollars per post.

                  <br/>Agency vs. Freelancer: Hiring an agency usually involves higher costs but offers a wider range of services and expertise. Freelancers might be more budget-friendly for specific tasks.

                  <br/>Custom Solutions: Some companies offer packages tailored to your needs, while others charge based on hourly rates.

                  It's important to consult with potential digital marketing providers, discuss your goals and requirements, and get detailed quotes based on your specific situation. Keep in mind that investing in quality digital marketing can yield significant returns over time, so consider it an investment in your business's growth.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <section className='container con-sec'>
      <div className='row'>
        <div className='col-md-6'>
          <h3 className='form-h3'>Contact Us</h3>
          <form className='contact-form'>
            <div class="mb-3">
              <label for="firstName" className="form-label">First Name<span class="required">*</span></label>
              <input type="text" className="form-control custom-input" id="firstName" 
              name="contactFirstname" required
              value = {contactForm.contactFirstname}
              onChange={handleContactForm}
              />
            </div>
            <div className="mb-3">
              <label for="lastName" className="form-label">Last Name<span class="required">*</span></label>
              <input type="text" className="form-control custom-input" id="lastName" 
              name="contactLastname" required
              value = {contactForm.contactLastname}
              onChange={handleContactForm}
              />
            </div>
            <div className="mb-3">
              <label for="phoneNumber" className="form-label">Phone Number<span class="required">*</span></label>
              <input type="tel" className="form-control custom-input" id="phoneNumber" 
              name="contactPhone" required
              value = {contactForm.contactPhone}
              onChange={handleContactForm}
              />
            </div>
            <div className="mb-3">
              <label for="email" className="form-label">Email Address<span class="required">*</span></label>
              <input type="email" className="form-control custom-input" id="email" 
              name="contactEmail" required
              value = {contactForm.contactEmail}
              onChange={handleContactForm}
              />
            </div>
            <div className="mb-3">
              <label for="selecter" className="form-label">Select Services<span class="required">*</span></label>
              <select className="form-select custom-input" id="selecter" 
              name="contactService" required
              value = {contactForm.contactService}
              onChange={handleContactForm}
              >
                <option selected>Select services</option>
                <option>SEO</option>
                <option>PPC Advertising</option>
                <option>Social Media Marketing</option>
                <option>Content Marketing</option>
                <option>Email Marketing</option>
                <option>Influencer Marketing</option>
                <option>Custom Solutions</option>
                
              </select>
            </div>
            <div className="mb-3">
              <label for="message" className="form-label">Message:</label>
              <textarea className="form-control custom-input" id="message" 
              name="contactMessage" rows="4" required
              value = {contactForm.contactMessage}
              onChange={handleContactForm}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-btn">Submit</button>
          </form>
        </div>
        <div className='col-md-6 con-col2'>
          <h4>Get in Touch</h4>
          <p>Ask a question, and we’ll get back to you as soon as possible!</p>
          <img src={cu}/>
        </div>
      </div>
    </section>

    <section className='container call-sec'>
      <div className='row call-row'>
        <div className='col-md-4 call-col1'>
          <div>
            <img src={call} className='call-img'/>
          </div>
          <div className='call-col2'>
            <p>Let’s connect you with an expert! Give us a ring!</p>
            <h4>(917) 920-6645</h4>
          </div>
          
        </div>
        <div className='col-md-8 call-3divs'>
          <div className='col-md-3 divs3'>
            <h4>100+</h4>
            <p>Satisfied Customers</p>
          </div>
          <div className='col-md-3 divs3'>
            <h4>99%</h4>
            <p>Retention Rate</p>
          </div>
          <div className='col-md-3 divs3'>
            <h4>1,000+</h4>
            <p>Cups of Coffee</p>
          </div>
        </div>
      </div>
    </section>

    <Footer/>


    


  </body>
</>
    
    
  )
}
export default Home
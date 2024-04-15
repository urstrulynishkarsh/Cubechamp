import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import star1 from '../assets/Star 2.svg'
import star2 from '../assets/Star 3.svg'
import star3 from '../assets/Star 4.svg'
import { BsArrowRight } from 'react-icons/bs';
import star5 from '../assets/Star 11.svg'
import Footer from '../components/Footer'
import serviceimage1 from "../assets/serviceimage1.jpg"
import serviceimage2 from '../assets/serviceimage2.jpg'
import serviceimage3 from '../assets/serviceimage3.jpg'
import serviceimage4 from '../assets/service image4.jpg'
import serviceimage from '../assets/Services/olav-ahrens-rotne-4Ennrbj1svk-unsplash 1price (1).png'


function Pricing() {
  const navigate = useNavigate();
  const handleClick2 = () => {
    navigate('/service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick5= () => {
    navigate('/demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (





<div>
   


<div className='bgimage '>
    <div className='w-12/12 max-w-screen-xl flex flex-row new-service-col gap-28 mx-auto px-4'>
      <div className='flex flex-col relative '>
      <img src={star1} className='w-[49.46px] h-[43px] absolute right-0 mt-5 star1'/>
      <h1 className='pricingsection1heading mt-14'>Affordable Price
<br></br><span>Best Teaching </span></h1>
                <div className=' flex flex-row relative gap-x-16 mt-7'>
                    <img src={star1} className='w-[49.46px] h-[43px] absolute left-6 top-3'/>
                    <img src={star2} className='w-[28.54px] h-[24.81px] '/>
                    <img src={star3} className='w-[28.64px] h-[24.81px] absolute top-10'/>
                    <h1 className='pricingsection1heading2 '><span>Professional</span> and <span>Certified</span><br></br>coaches for your kids </h1>
                </div>
                <div className='flex flex-row services-button   gap-16 px-24 mt-16'>
                <Link to='/demo' onClick={handleClick5 } className='enroll-button z-[1000] '><h1>Enroll Now</h1></Link>
                <Link to='/service' onClick={handleClick2 } className='our-service-button'><h1>Our Services</h1></Link>
                </div>

      </div>
      <div >
                 
          
        <div className='relative flex'>
              <img className='service-image8' loading='lazy' src={serviceimage} />
                <Link to='/demo' onClick={handleClick5 } className='rectangle9'><h1 className='boxcontent'>START <span>$50</span>/mo <span className=''><BsArrowRight className='text-[3rem] text-center mx-auto'/></span></h1> </Link>
                <div className='flex-col flex relative'>
                <div className='rectangle2'></div>
                 <div className='rectangle3'></div>
                  <div className='rectangle4'></div>
                  <div className='rectangle5'></div>
                  <div className='rectangle6'></div>
                  <div className='rectangle7'></div>

                </div>
        </div>
        
      </div>
    </div>


</div>

<div className='w-11/12 max-w-screen-xl  mt-10 gap-y-10 gap-16 mx-auto px-4'>
          <div className='pricing-service mb-16  gap-6 flex'>
          <div className='service-image-1 w-full'><img src={serviceimage1} className='ok' /></div>
          
          <div className='flex flex-col gap-4 w-full  relative'>
          

            <h1 className='service-grid-heading'>PRODIGY <span>Unleash Your Inner Genius</span></h1>
            <h4 className='objective'>Objective</h4>
            <p className='objectivep'>To introduce basic concepts and techniques for solving the Rubik's cube, build foundational skills in problem-solving and critical thinking, and help students to gain confidence in their abilities.</p>
            <h4 className='objective'>Timing goal (for solving 3x3x3 rubik’s cube)</h4>
            <p className='objectivep'> No specific timing goal for this level.</p>
            <h4 className='objective'>Schedule</h4>
            <p className='objectivep'> Weekly 2 sessions of 45 minutes duration each</p>
            <h4 className='objective'> Group Size</h4>
            <p className='objectivep'>up to 2-3 Kids</p>
            <h4 className='objective'>Pricing</h4>
            <p className='objectivep'>USD 55 per month</p>
            <div className='service-book mx-auto'>
            <a href='/demo' target='_blank' onClick={handleClick5 }  className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
            </div>
          </div>
          </div>
          <div className='pricing-service1 mb-16 gap-6 flex'>
          <div className='flex flex-col gap-4  relative'>
            <h1 className='service-grid-heading'>CUBER   <span>Solve Like a Pro</span></h1>
            <h4 className='objective'>Objective</h4>
            <p className='objectivep'>To improve speed and efficiency in solving the 3x3x3 cube, as well as to learn algorithms and advanced solving methods.</p>
            <h4 className='objective'>Timing goal </h4>
            <p className='objectivep'> To solve the 3x3x3 cube in under 1 minute 30 seconds. </p>
            <h4 className='objective'>Schedule</h4>
            <p className='objectivep'> Schedule Weekly 2 sessions of 45 minutes duration each </p>
            <h4 className='objective'>Group Size</h4>
            <p className='objectivep'>up to 2-3 Kids</p>
            <h4 className='objective'>Pricing</h4>
            <p className='objectivep'>USD 60 per month</p>
            <div className='service-book mx-auto'>
            <a href='/demo' target='_blank' onClick={handleClick5 } className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
            </div>
          </div>

          <div className='service-image-1'><img src={serviceimage2} /></div>
          </div>

    
          <div className='pricing-service mb-10 gap-6 flex'>
          <div className='service-image-1'><img src={serviceimage3} /></div>


<div className='flex flex-col gap-4  relative'>
  <h1 className='service-grid-heading'>MASTERMIND  <span>Be the Master of Your Cube</span></h1>
  <h4 className='objective'>Objective</h4>
  <p className='objectivep'> To refine and perfect techniques to achieve expert-level proficiency in solving the Rubik's cube.</p>
  <h4 className='objective'>Timing goal </h4>
  <p className='objectivep'> To solve the 3x3x3 cube under 50 seconds.</p>
  <h4 className='objective'>Schedule</h4>
  <p className='objectivep'> Weekly 2 sessions of 45 minutes duration each</p>
  <h4 className='objective'>Group Size</h4>
  <p className='objectivep'>up to 2-3 Kids</p>
  <h4 className='objective'>Pricing</h4>
  <p className='objectivep'>USD 70 per month</p>
  <div className='service-book mx-auto'>
  <a href='/demo' target='_blank' onClick={handleClick5 } className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
  </div>
</div>
</div>
<div className='pricing-service1 mb-16 gap-6 flex'>
<div className='flex flex-col gap-4 relative'>
            <h1 className='service-grid-heading'>SPEEDSTER  <span> Solve at Lightning Speed</span></h1>
            <h4 className='objective'>Objective</h4>
            <p className='objectivep'>To attain the highest level of speedcubing proficiency, including mastery of advanced algorithms and solving methods.</p>
            <h4 className='objective'>Timing goal </h4>
            <p className='objectivep'>  To solve the 3x3x3 cube in under 15 seconds.</p>
            <h4 className='objective'>Schedule</h4>
            <p className='objectivep'> Weekly 2 sessions of 45 minutes duration each</p>
            <h4 className='objective'>Group Size</h4>
            <p className='objectivep'>up to 2-3 Kids</p>
            <h4 className='objective'>Pricing</h4>
            <p className='objectivep'>USD 75 per month</p>
            <div className='service-book mx-auto'>
            <a href='/demo' target='_blank' onClick={handleClick5 } className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
            </div>
          </div>

          <div className='service-image-1'><img src={serviceimage4} /></div>
          </div>
</div>

  {/* <div className='rectanglegreen mt-10'></div>
  <div className='rectangleblue mt-10'></div>
  <div className='rectanglegreen2 mt-[-7rem]'></div>
  <div className='rectangleblue mt-[63rem]'></div> */}
    
<Footer/>

</div>

  )
}

export default Pricing
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import star1 from '../assets/Star 2.svg'
import star2 from '../assets/Star 3.svg'
import star3 from '../assets/Star 4.svg'
import pricingimage from '../assets/Services/SERVICES.png'
import demoimage1 from '../assets/Services/photo1683548932.svg'
import demoimage2 from '../assets/Services/photo1683548932-_1_.svg'
import demoimage3 from '../assets/Services/men-couple-sitting-on-a-table-talking-about-business.svg'

import { BsArrowRight } from 'react-icons/bs';
import star5 from '../assets/Star 11.svg'
import Footer from '../components/Footer'


function Services() {
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
         <h1 className='pricingsection1heading mt-14'>Your kids are <br></br><span>in good hands</span></h1>
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
                 <img className='service-image8 z-10' loading='lazy' src={pricingimage} />
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
   <div className='w-11/12 max-w-screen-xl  mt-10  service-grid gap-16 mx-auto mb-16 px-4'>
   <div className='pricing-service mb-16  gap-6 flex'>
             <div className='service-image-1 w-full'><img loading='lazy' src={demoimage1} /></div>
             <div className='flex flex-col gap-4 w-full  relative'>
               <h1 className='demo'>DEMO <span>CLASS</span></h1>
                <p className='demopara'>Our academy offers a free 30-minute demo class for kids aged 5-15 who are interested in learning the art of solving Rubik's Cube.<br></br><br></br>
    During this session, our experienced and enthusiastic trainers will provide an overview of our teaching methodology, demonstrate some basic solving techniques. Our goal is to give your child a glimpse into the exciting world of Rubik's Cube, Whether your child is a complete beginner or has some experience with the cube, we welcome them to join us for a fun and informative session.<br></br><br></br>
    After the completion of demo class, our trainers will assess the child's abilities based on their performance, then recommend whether you should go with group class or one-on-one sessions for better learning.<br></br><br></br>
    Sign up for our demo class today and let your child discover the joy of solving Rubik's Cube!</p>
             
               <div className='service-book mx-auto'>
               <a href='/demo' target='_blank' onClick={handleClick5 }  className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
               </div>
             </div>
  </div>
  <div className='pricing-service1 mb-16 gap-6 flex'>
               <div className='flex flex-col gap-4 w-full  relative'>
                <h1 className='demo'>GROUP <span>CLASS</span></h1>
                <p className='demopara'>Our group classes are engaging live sessions where our expert trainers introduce Rubik's Cube solving concept and provide materials. The classes are designed to be interactive and collaborative, allowing students to share their understanding of the concept, apply it to solve the cube and ask questions. Our trainers provide personalized feedback and guidance to help students improve their solving skills and achieve their goals.<br></br><br></br>
    Here are few benefits of joining group class: -<br></br><br></br>
   <span>Self-confidence and self-esteem</span> : As students grow in their understanding and mastery of Rubik's Cube, they will have the opportunity to present their solving techniques to the group, which can boost their self-esteem and confidence in their abilities.<br></br><br></br>
   <span>Interactivity</span> : Our group classes are interactive live sessions where students can observe and learn from each other's problem-solving techniques, enhancing their understanding of Rubik's Cube.<br></br><br></br>
   <span>Positive interdependence</span> : Our group classes teach students the importance of interdependence and accountability. They will learn how their actions and behavior can affect the group's progress and success.<br></br><br></br>
    Join our group classes today and experience the thrill of learning and solving Rubik's Cube.</p>
             
    <div className='service-book mx-auto'>
               <a href='/demo' target='_blank' onClick={handleClick5 }  className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
               </div>
   
              </div>
              <div className='service-image-1 w-full'><img loading='lazy' src={demoimage2} /></div>
              </div>
  <div className='pricing-service mb-16  gap-6 flex'>
              <div className='service-image-1 w-full'><img loading='lazy' src={demoimage3} /></div>
   
   
              <div className='flex flex-col gap-4 w-full  relative'>
              <h1 className='demo'>ONE ON ONE <span>CLASS</span></h1>
               <p className='demopara'>Our one-on-one class is a private class.<br></br> <br></br> During the session, our experienced trainer will introduce a Rubik's Cube solving concept and provide materials that aligns with the student's level and pace.<br></br> <br></br> The student will have the opportunity to present their understanding, apply the concept, and ask questions in a personalized and focused environment.</p>
             
    <div className=' service-book mx-auto'>
               <a href='/demo' target='_blank' onClick={handleClick5 }  className='lining flex justify-center mt-1  gap-2 ' ><h1 className='bookheading mt-2'>Book Now</h1> <img src={star5}/></a>
               </div>
   
              
               </div>
               </div>
   
            
   
             
   </div>
   
   
   <Footer/>
   
   </div>
  )
}

export default Services
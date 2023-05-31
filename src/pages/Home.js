import React from 'react'
import rubix from '../assets/Home/pngimg.com-rubik_cube_PNG20 (1).webp'
import headingimage from '../assets/Home/pngimg.com - rubik_cube_PNG50.webp'
import right1 from '../assets/Home/pngkey.com-twist-png-3697683.webp'
import headingimage2 from '../assets/Home/thinking-brain-png-transparent-thinking-brain-16.webp'
import right2 from '../assets/Home/pngimg.com - rubik_cube_PNG9.webp'
import photo1 from '../assets/Home/photo1685014578 (1).webp'
import photo2 from '../assets/Home/photo1685014578 (3).webp'
import photo3 from '../assets/Home/photo1685014578 (2).webp'
import { AiFillStar } from 'react-icons/ai'
import Footer from '../components/Footer'
import cubeicon from '../assets/cubechampsofficiallogo\ 2.svg'
import whyus from '../assets/Home/cubes_question_mark.png'
import { Link } from 'react-scroll'
import Typed from '../components/Typed'
import Types from '../components/types'

function Home() {
  const questionList = [
    {description: '•	United States registered academy committed to provide the highest quality of Rubik’s cube training.', key: 0},
    {description: '•	Our Objective is not only to train kids to solve the cube but also to assist them in developing important skills like critical thinking, problem solving and perseverance.', key: 1},
    {description: '•	Associated with highly dedicated and passionate trainers.', key: 2},
    {description:'•	Emphasizing the training of the Rubik’s cube in a more interesting and attractive for kids ',key:3},
    
  ];
  
  const questionList2 = [
    {description: '•	 Experienced, Enthusiastic and Energetic trainers.', key: 0},
    {description: '•	Dedicated, Dynamic, Development-based course modules for Rubik’s Cube.', key: 1},
    {description: '•	Videos and written materials provided for better practice.', key: 2},
    {description:'•	Students will receive certificate after successful completion of each level. ',key:3},
  ];

  const reviews=[
    {
          photo:photo1,
          name:"Shraddha Goel, India",
          review:"Cube Champs is an excellent institute for Rubik's cube enthusiasts. Their team of hardworking and supportive teachers is truly outstanding. My daughter had the privilege of being taught by one of their talented instructors, Vikash and it made all the difference in her success. Thanks to the exceptional teaching methods and dedication of the Cube Champs team, my daughter was able to win the Rubik's cube championship. I am forever grateful to them for their guidance and support. I highly recommend Cube Champs to anyone looking to improve their skills in this exciting and challenging activity.",
    },
    {
      photo:photo2,
      name:"Marcos Condori, USA",
      review:"Cube Champs is a fantastic Rubik's Cube tutoring service! My child has been with them for over a year, and we have seen incredible progress in their speedcubing abilities thanks to their unique methods and tricks. Their team is also knowledgeable about local Rubik's Cube competitions and has recommended some great events to us. We are grateful for their support and highly recommend Cube Champs to anyone looking to improve their speedcubing skills!",

    },
    {
      photo:photo3,
      name:"Shreyansh, India",
      review:"Cube Champs is an awesome institute for Rubik’s Cube. Their instructor, Vikash throws good insight on how to solve speed cube and help my son to improve his speed sub20sec in 3x3 cube."

    },
  ]
 
  function scrollToHeading() {
    const headingElement = document.getElementById('my-heading');
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: 'smooth' });
    }
  }




  return (
    <div >
          <div className='relative w-12/12  max-w-[1280px] mx-auto mt-16 '>
                 <div className='flex flex-row homepage-icon relative '>
          
                      {/* gradient */}
                      <div class="ellipse "></div>

                    


                      {/* Rotate Fingers */}
                  <div className='flex flex-col w-[50%] relative mobile'>

                              {/* first line of heading */}
                              <div className='flex relative'>
                                {/* <p className='heading'><span className='text-[#325DEB]'>Rotate </span>Fingers </p> */}
                                <Typed/>
                                <img className='headingimage1' loading='lazy' src={rubix}/>
                              </div>

                                {/* 2nd line of heading */}
                                <div className='flex relative'>
                                  <img className='headingimage2' loading='lazy' src={headingimage2}/>
                                  <Types/>
                                  {/* <p className='heading'><span className='text-[#325DEB]'>Activate </span>  Brain </p> */}
                                </div>

                                  <p className='subheading'>We at Cube Champs would train the kids in such a way that they enjoy the art of rotating and solving cubes.</p>

                                  <div className='mt-16 registerbuttoncss'>
  <a href="/demo" target='_blank' className='z-[9999] inline-block w-[307.36px] h-[90px] bg-[#5274E3] rounded-[30px] text-white text-center font-bold text-lg leading-[90px] font-open-sans font-normal font-semibold text-3xl leading-14 tracking-wide uppercase'  style={{ position: 'relative' }}>
    REGISTER TODAY
  </a>
</div>
<div className='mt-16 mx-auto mediabuttonphone'>
  <a href="/demo" target='_blank' className='z-[9999] inline-block w-[150px] h-[41px] bg-[#5274E3] rounded-[30px] text-white text-center font-bold text-[15px] leading-[35px] font-open-sans    tracking-wide uppercase '  style={{ position: 'relative' }}>
    REGISTER TODAY
  </a>
</div>






                               
                  </div>
        <div className='flex mx-auto w-[50%] relative'>
          <img className='ball1 ' loading='lazy' src={right1}/>
          <img className='ball2'  loading='lazy' src={headingimage}/>
          <img className='ball3' loading='lazy' src={right2}/>
        </div>

      </div>
      </div>
      <div className='container-image '>
      <div className='relative w-11/12 max-w-[1280px] flex flex-row section2  mx-auto pt-[10rem] gap-16   pb-[6rem]' >
              <div className=''  id="my-heading">
              <img className='w-[592px] h-[221.38px]' loading='lazy' src={cubeicon}/>
              </div>
              <div className='flex flex-col w-[50%] text-content1  relative'>
               <h1 className='aboutus'><span className='text-[#325DEB]'>About</span> us</h1>
                <ol className='orderedlist'>
                {questionList.map(question => {
                return (
                <li  key={question.key}>{question.description}</li>
                );
                  })}
                </ol>
              </div>

      </div>

      {/* 2nd section */}
     
      <div className='relative w-11/12 max-w-[1280px] flex flex-row whyus mx-auto  pb-[6rem]'>
          
        <div className='flex flex-col w-[50%]  text-content1 relative'>
            <h1 className='aboutus'>Why <span className='text-[#325DEB]'>us</span></h1>
            <ol className='orderedlist'>
            {questionList2.map(question => {
              return (
            <li  key={question.key}>{question.description}</li>
              );
            })}
            </ol>

        </div>
        {/* className='aboutimage' */}
          <div className='w-[50%] mx-auto' >
            <img loading='lazy' src={whyus} />
          </div>
      </div>
      {/* transform -translate-x-1/2 -translate-y-1/2 */}
      {/* <div className='w-11/12 max-w-[1280px] flex flex-col mx-auto relative gap-16'>
            <div className='canopy '>Canopy <span>of </span>Cubes</div>
      </div> */}
     
     <div className='w-12/12 max-w-[1280px] flex flex-col mx-auto relative gap-32'>
  <div className='canopy'>Kids <span>Loves </span>Us <span>Parent </span>Admire <span>Us </span></div>
  <div className='flex flex-row relative mx-auto pb-11 gap-16 flex-wrap'>
    {
      reviews.map((element, index) => {
        return (
          <div className='flex flex-col relative mx-auto'>
            <div className='image-border z-50 mx-auto' key={index}>
              <img className='w-[180px] h-[180px] flex mx-auto mt-[10px] rounded-full' src={element.photo} alt={`Review ${index + 1}`} />
            </div>
            <div className='review-card flex-col text-center p-8 -z-10 -mt-28'>
              <div className='flex gap-4 justify-center mt-28'>
                <AiFillStar className='text-[yellow] w-[31.61px] h-[32.5px]' />
                <AiFillStar className='text-[yellow] w-[31.61px] h-[32.5px]' />
                <AiFillStar className='text-[yellow] w-[31.61px] h-[32.5px]' />
                <AiFillStar className='text-[yellow] w-[31.61px] h-[32.5px]' />
                <AiFillStar className='text-[yellow] w-[31.61px] h-[32.5px]' />
              </div>
              <div className='flex items-center justify-center mt-4 review-name'>
                {element.name}
              </div>
              <div className='flex items-center justify-center mt-4 reviews pl-3 w-[90%]' style={{ overflowWrap: 'break-word' }}>
                {element.review}
              </div>
            </div>
          </div>
        )
      })
    }
  </div>
</div>

      
    
    
    </div>
    <Footer/>
    </div>
  )
}

export default Home
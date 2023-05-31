import React from 'react'
import cube from '../assets/Contact Us/rubiks-cube-g752935e61_1920-removebg-preview (1).png'
import Logo1 from '../assets/Contact Us/Shape.jpg'
import Logo2 from '../assets/Contact Us/Path.jpg'
import Logo3 from '../assets/Contact Us/apple 1.jpg'
import Logo4 from '../assets/Contact Us/Instagram.jpg'
import Footer from '../components/Footer'
import { FaWhatsapp } from 'react-icons/fa'
import { IoCall, IoLocationSharp } from 'react-icons/io5'
import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
function Contact() {
  const address=[
    {
      Logo:<IoLocationSharp/>,
      heading: "30 North Gould Street, Suite R,Sheridan, Wyoming 82801,United States",
    },
    {
      Logo:<IoCall/>,
      heading: "+1 (307) 696-2504",
    },
    {
      Logo:<AiOutlineMail/>,
      heading: "support@cubechamps.com",
    },
    {
      Logo:<BsInstagram/>,
      heading: "@cubechamps",
    },
  ]
  return (
    <div >
    <div className='background-contact '>
      <div className='w-12/12 max-w-[1280px] flex relative contact-mobile  px-4'>
          <div className='contactmobile2' >
              <img src={cube} className='w-[800px] h-[400px] ok'/>
          </div>
          <div className='flex flex-col relative mx-auto contactmobile2 '>
            <h1 className='contact-us mx-auto lining'>CONTACT US</h1>
            <div className='contact-box flex flex-col p-10 mt-10 mx-auto'>
                 {
                  address.map((element,index)=>{
                    return (
                      <div className='flex gap-5' key={index}>
                          <div>
                          {element.Logo}
                          </div>
                          <div >
                            <h2 className='contact-heading'>{element.heading}</h2>

                          </div>
                      </div>

                    )
                  })
                 } 
            </div>

          </div>
      </div>
      <div className='w-12/12 max-w-[1280px]  relative mx-auto  px-4'>
        <a href="https://api.whatsapp.com/send?phone=13076962504" target='_blank' className='w-[578px] whatsappbox gap-5 mx-auto items-center justify-center h-[104px] flex bg-[rgba(217,217,217,0.65)] border-2 mt-10'>
            <div>
                <FaWhatsapp className='text-[green] w-[70px] h-[70px]'/>
            </div>
            <div>
              <div   className='chat'>Chat us on Whatsapp</div>
            </div>
        </a>
              
      </div>
                
    </div>
     <Footer/>
     </div>
  )
}

export default Contact
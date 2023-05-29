import React from 'react'
import { HiComputerDesktop, HiDesktopComputer, HiUserGroup } from 'react-icons/hi';
import {SiIconify} from 'react-icons/si';
import { HiCube } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import {GrCubes} from 'react-icons/gr'
import Footer from '../components/Footer';
import { CiPlay1 } from 'react-icons/ci';

function Faq() {
  return (
    <div>
    <div className='background-contact1'>
    
              <div className='relative w-11/12 bgimage2  max-w-[1280px] mx-auto h-full '>
              
                    <div className='flex flex-col mt-5 '>
                  
                    <p className='text-center not-italic font-semibold text-[57.3px] '> FAQs</p>
                    <p className='text-center not-italic font-normal text-[29.71px] leading-[22px]'>Have any questions? We're here to assist you.</p>
                    </div>

              </div>
    

              <div className='relative w-11/12 max-w-[1280px] mx-auto h-full '>
              {/* 2nd section */}
                    <div className='grid grid-cols-3 gridcheck relative mt-16 py-2 gap-y-16 gap-x-10'>
                    {/* first col */}
                          <div className='flex flex-col gap-y-5 '>
                                      <div className='w-[35.3px] h-[35.3px] bg-[#FFE6D9] rounded-full flex items-center justify-center'>
                                        <HiCube className='justify-center text-center items-center flex mx-auto ' />
                                      </div>
                                      <div className='font-medium not-italic text-[14.7088px] leading[22px]'>What is Rubik’s Cube?</div>
                                      <div className='text-[#53686A] not-italic font-semibold text-[13.767px] leading-[18px] '>Rubik’s cube is a 3-D combination puzzle originally invented in 1974 by Hungarian sculptor and Professor of architect Sir Erno Rubik. And over his name this 3-D masterpiece named. Initially it was known as the magic cube.</div>
                          </div>
                    {/* 2nd col */}
                          <div className='flex flex-col gap-y-5'>
                          <div className='w-[35.3px] h-[35.3px] bg-[#FFE6D9] rounded-full flex items-center justify-center'>
                                        <GrCubes className='justify-center text-center items-center flex mx-auto ' />
                                      </div>
                                <div className='font-medium not-italic text-[14.7088px] leading[22px]'>What are different types of cube?</div>
                                <div className='text-[#53686A] not-italic font-semibold text-[13.767px] leading-[18px]'>The standard 3×3×3 cube, 2×2×2 (Pocket/Mini Cube), the 4×4×4 (Rubik's Revenge/Master Cube), and the 5×5×5 (Professor's Cube) are the most well-known , apart from these there are more than 15+ forms of cube, with different shapes and color scheme. Some such shapes include the Pyraminx, the Skweb, the Megaminx, and the Mirror cube.</div>

                          </div>
                    {/* 3rd col */}
                          <div className='flex flex-col gap-y-5'>
                          <div className='w-[35.3px] h-[35.3px] bg-[#FFE6D9] rounded-full flex items-center justify-center'>
                                        <CiPlay1 className='justify-center text-center items-center flex mx-auto text-[black]' />
                                      </div>
                                <div className='font-medium not-italic text-[14.7088px] leading[22px]'>Essentials needed to start a Rubik’s cube training.</div>
                                <div className='text-[#53686A] not-italic font-semibold text-[13.767px] leading-[18px]'>Initially kid need only the standard 3×3×3 cube to start its journey of learning, once kid become proficient in solving this cube, we introduce other forms of cubes later on.</div>

                          </div>
                    {/* first col */}
                          <div className='flex flex-col gap-y-5'>
                          <div className='w-[35.3px] h-[35.3px] bg-[#FFE6D9] rounded-full flex items-center justify-center'>
                                        <HiDesktopComputer className='justify-center text-center items-center flex mx-auto ' />
                                      </div>
                            <div className='font-medium not-italic text-[14.7088px] leading[22px]'>What is our mode of providing training?</div>
                            <div className='text-[#53686A] not-italic font-semibold text-[13.767px] leading-[18px] '>At cube champs, we provide training through live, online classes conducted by experienced trainers. These classes are interactive and allow students to learn and practice in a collaborative environment. We also provide videos and written materials for better practice. Apart from that students can reach out to their trainers for additional support outside of class time.</div>
                          </div>
                    {/* second col */}
                          <div className='flex flex-col gap-y-5'>
                          <div className='w-[35.3px] h-[35.3px] bg-[#FFE6D9] rounded-full flex items-center justify-center'>
                                        <HiUserGroup className='justify-center text-center items-center flex mx-auto ' />
                                      </div>
                            <div className='font-medium not-italic text-[14.7088px] leading[22px]'>Which type of cubes training do we provide?</div>
                            <div className='text-[#53686A] not-italic font-semibold text-[13.767px] leading-[18px] '>Initially at the basic level we train kids to solve the standard 3×3×3 cube, once speed and confidence of kid boosted, we introduce other giant forms of cubes mentioned above.</div>
                          </div>
                    {/* third col */}
                          <div className='flex flex-col gap-y-5'>
                          <div className='w-[35.3px] h-[35.3px] bg-[#FFE6D9] rounded-full flex items-center justify-center'>
                                        <SiIconify className='justify-center text-center items-center flex mx-auto ' />
                                      </div>
                            <div className='font-medium not-italic text-[14.7088px] leading[22px]'>Essentials needed to start a Rubik’s cube training.</div>
                            <div className='text-[#53686A] not-italic font-semibold text-[13.767px] leading-[18px] '>Initially kid need only the standard 3×3×3 cube to start its journey of learning, once kid become proficient in solving this cube, we introduce other forms of cubes later on.</div>
                          </div>
                  </div>
                  <div className='flex flex-row justify-between mt-10'>
                <div>
                  <p className='font-medium not-italic text-[14.7088px] leading[22px]'>Still have questions?</p>
                  <p className='font-normal not-italic text-[13.2379px] leading[2rem]'>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                </div>
                <Link to='/contact' className='button  '>
                  Get in Touch
                </Link>

              </div>
              </div>
       
        </div>

      

    
 <Footer/>
   
   
    </div>
   
    
    
  )
}

export default Faq
import React from 'react'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoLocationSharp} from "react-icons/io5"
import { CiFacebook} from 'react-icons/ci'
import { FiInstagram, FiYoutube } from 'react-icons/fi'
import { AiOutlineGooglePlus} from 'react-icons/ai'
import { Link,useHistory } from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import myLogo from '../assets/Contact Us/White Logo.png';
// import { SocialIcon } from 'react-social-icons';

function Footer() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick2 = () => {
    navigate('/privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick3 = () => {
    navigate('/service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const location = useLocation();
  function scrollToHeading() {
    const headingElement = document.getElementById('my-heading');
    if (headingElement) {
      headingElement.scrollIntoView({top: 0, behavior: 'smooth' });
    }
  }
  function handleAboutClick() {
    if (location.pathname === '/') {
      scrollToHeading();
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToHeading();
      }, 300);
    }
  }
  return (
    <div>
    <footer className="bg-[#6674cc] relative">
      <div className="relative flex flex-row w-11/12 footer-col max-w-[1280px] gap-10 mx-auto ">
        <div className="flex flex-col mx-auto  mt-20">
          <div className="flex flex-row gap-6 mb-10 addressmedia">
            
            
               <IoLocationSharp className="w-[28px] h-[28px]" />
           
            <p className="footer-location  footer-location6  ">
              30 North Gould Street, Suite R, Sheridan, Wyoming 82801, United States
            </p>
          </div>
          <div className="flex flex-row relative object addressmedia  gap-6">
            <BsTelephoneFill className="w-[28px] h-[28px]" />
            <p className="select-none footer-location footer-location6">+1 (307) 696-2504</p>
          </div>
          <img className='footer-image bg-[#6674cc] h-48 mx-auto' src={myLogo}/>
        </div>
        <div className="flex flex-col relative social-media-queries mt-20">
          <div className="flex justify-end socialcolumn gap-8 mb-10">
            <p className="menu-text mt-1 lining">Social Media</p>
            <div className="flex gap-8">
              <a
                href="https://www.facebook.com/profile.php?id=100092532316785"
                target="_blank"
              >
                <CiFacebook className="w-[28px] h-[28px]" />
              </a>
              <a
                href="https://www.instagram.com/cubechamps/?igshid=NGExMmI2YTkyZg%3D%3D"
                target="_blank"
              >
                <FiInstagram className="w-[28px] h-[28px]" />
              </a>
            </div>
          </div>
  
          <div className="flex flex-row social-media navlinksfooter gap-16">
            <p id="menu-text" className="menu-text">
              MENU
            </p>
            <Link to="/" onClick={handleAboutClick} className="social-icon cursor-pointer lining">
              ABOUT US
            </Link>
            <Link to="/contact" onClick={handleClick} className="social-icon cursor-pointer lining">
              CONTACT US
            </Link>
            <Link to="/privacy" onClick={handleClick2} className="social-icon cursor-pointer lining">
              PRIVACY POLICY
            </Link>
            <Link to="/service" onClick={handleClick3} className="social-icon cursor-pointer">
              SERVICES
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[3px] bg-[#b5cec5] mt-10 w-[1280px] mx-auto"></div>
      <div className="relative flex flex-row w-12/12 max-w-[1280px] mx-auto pb-5">
        <p className="mx-auto mt-6 footer-location footer-location2">
          Copyright © 2023 CubeCHamp.
          All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
  
  )
}

export default Footer
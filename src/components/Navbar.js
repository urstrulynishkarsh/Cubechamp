import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import myLogo from '../assets/cubechampsofficiallogo 1.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Close the menu when the route changes
    setIsOpen(false);
  }, [useLocation()]);

  function scrollToHeading() {
    const headingElement = document.getElementById('my-heading');
    if (headingElement) {
      headingElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const location = useLocation();
  const navigate = useNavigate();

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

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const handleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick1= () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick2 = () => {
    navigate('/service');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick3 = () => {
    navigate('/pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick4 = () => {
    navigate('/faq');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleClick5= () => {
    navigate('/demo');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClick6 = () => {
    navigate('/hiring');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div class="mb-[8rem] ">
    <div className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        {/* logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={myLogo} className="logo" alt="Logo" />
          </Link>
        </div>

        {/* list */}
        <div className="navbar-links fontproperty ">
          <Link to="/" onClick={handleClick}>
            <p className="navbar-link hidden lg:block">Home</p>
          </Link>

          <Link onClick={handleAboutClick} to="/">
            <p className="navbar-link lining hidden lg:block">About us</p>
          </Link>

          <Link to="/service" onClick={handleClick2 }>
            <p className="navbar-link hidden lg:block">Services</p>
          </Link>

          <Link to="/pricing" onClick={handleClick3}>
            <p className="navbar-link hidden lg:block">Pricing</p>
          </Link>

          <Link to="/faq" onClick={handleClick4}>
            <p className="navbar-link hidden lg:block">FAQ</p>
          </Link>

          <Link to="/contact" onClick={handleClick1}>
            <p className="navbar-link lining hidden lg:block">Contact us</p>
          </Link>

          <Link to="/hiring" onClick={handleClick6}>
            <p className="navbar-link hidden lg:block">HIRING!</p>
          </Link>
        </div>

        <div className="navbar-box box hidden lg:block">
          <Link to="/demo" onClick={handleClick5}>
            <p className="navbar-demo">BOOK FREE<br /> DEMO CLASS</p>
          </Link>
        </div>

        {/* Mobile responsive menu */}
        <div className="navbar-hamburger">
          <IconContext.Provider value={{ className: 'text-2xl' }}>
            {!isOpen ? (
              <FaBars onClick={() => setIsOpen(true)} />
            ) : (
              <FaTimes onClick={() => setIsOpen(false)} />
            )}
          </IconContext.Provider>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="navbar-mobile-menu fontproperty">
          <Link to="/" onClick={() => { handleClick(); setIsOpen(false); }}>
            <p className="navbar-link ">Home</p>
          </Link>

          <Link to="/" onClick={() => { handleAboutClick(); setIsOpen(false); }}>
            <p className="navbar-link ">About us</p>
          </Link>

          <Link to="/service" onClick={() => { handleClick2(); setIsOpen(false); }}>
            <p className="navbar-link">Services</p>
          </Link>

          <Link to="/pricing" onClick={() => { handleClick3(); setIsOpen(false); }}>
            <p className="navbar-link">Pricing</p>
          </Link>

          <Link to="/faq" onClick={() => { handleClick4(); setIsOpen(false); }}>
            <p className="navbar-link">FAQ</p>
          </Link>

          <Link to="/contact" onClick={() => { handleClick1(); setIsOpen(false); }}>
            <p className="navbar-link">Contact us</p>
          </Link>

          <Link to="/hiring" onClick={() => { handleClick6(); setIsOpen(false); }}>
            <p className="navbar-link">HIRING!</p>
          </Link>

          <Link to="/demo" onClick={() => { handleClick5(); setIsOpen(false); }}>
            <p className="navbar-link ">BOOK FREE DEMO CLASS</p>
          </Link>
        </div>
      )}
    </div>
    </div>
  );
}

export default Navbar;

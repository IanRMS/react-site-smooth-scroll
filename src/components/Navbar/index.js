import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavBarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./styles";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavBarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              ianRMS
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                  to="about"
                >
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                  to="discover"
                >
                  Discover
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                  to="services"
                >
                  Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                  to="signup"
                >
                  Sign Up
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

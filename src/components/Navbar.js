import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import styled from 'styled-components'
import {TiFeather} from 'react-icons/ti'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'


const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks to="/experience">Experience</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/resume">Resume</NavLinks>
              </NavItem> */}
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar

export const Nav = styled.nav`
  background: ${({ active }) => active ? "#051318;": "transparent"};
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  height: 3rem;
  right:0;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;

  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(NavLink)`
  color:#C4C4C4 ;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  // align-items: center;
  // left:0;
`

export const NavIcon = styled(TiFeather)`
  margin: 1.5rem 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
  display: none;
  left: 0;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  float: right;
  align-items: right;
  list-style: none;
  text-align: right;
  right:0;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
      opacity: 1;
      transition: all 0.2s ease;
      background: #fff;
  }
`

export const NavItem = styled.li`
  height: 80px;
  justify-content: space-between;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(NavLink)`
  color: #C4C4C4;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem;
  height: 100%;
  font-size: 14px;
  font-family: "Ubuntu", sans-serif;
  &:hover {
     color: #1DF098;
     text-decoration: none;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`

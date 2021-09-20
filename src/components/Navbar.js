import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import styled from 'styled-components'
import {TiFeather} from 'react-icons/ti'
import {NavLink} from 'react-router-dom'


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
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
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


// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import {Link} from 'gatsby'
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import './navbar.scss';
// import {FaAlignCenter, FaAlignRight} from 'react-icons/fa'
// import styled from 'styled-components'
// import { createTheme } from '@material-ui/core/styles';


// const theme = createTheme({
//   palette: {
//     primary: {
//       light: '#000000',
//       main: '#000000',
//       dark: '#002884',
//       contrastText: '#000000',
//     },
//     secondary: {
//       light: '#ff7961',
//       main: '#f44336',
//       dark: '#ba000d',
//       contrastText: '#000',
//     },
//   },
// });


// const useStyles = makeStyles((theme) => ({
//     root: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginRight: theme.spacing(2),
//         color: 'black'
//     },
//     title: {
//         flexGrow: 1,
//         color: 'black'
//     },
//     appBarTransparent: {
//         backgroundColor: 'transparent'
//     },
//     appBarSolid: {
//         backgroundColor: '#1e1e2f'
//     }
// }));

// export default function ButtonAppBar() {
//     const classes = useStyles();

//     const [navBackground, setNavBackground] = useState('appBarTransparent')
//     const navRef = React.useRef()
//     navRef.current = navBackground
//     useEffect(() => {
//         const handleScroll = () => {
//             const show = window.scrollY > 310
//             if (show) {
//                 setNavBackground('appBarSolid')
//             } else {
//                 setNavBackground('appBarTransparent')
//             }
//         }
//         document.addEventListener('scroll', handleScroll)
//         return () => {
//             document.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//       // <div className="format-sticky">

//         <div className={classes.root}>
//             <AppBar elevation={0} position="fixed" className={classes[navRef.current]}>
//             {/* <Breadcrumbs aria-label="breadcrumb">
//                 <Link color="inherit" href="/">
//                   Material-UI
//                 </Link>
//                 <Link color="inherit" href="/getting-started/installation/" >
//                   Core
//                 </Link>
//                 <Typography color="textPrimary">Breadcrumb</Typography>
//               </Breadcrumbs> */}
//               <div className="navbar">
//                 <nav className="navbar">
//                    <div className="nav-center">
//             <div className="nav-header">
//               <button
//                 type="button"
//                 className="nav-btn"

//               >
//                 <FaAlignCenter className="nav-icon" />
//               </button>
//             </div>
//             <ul>
//             <Breadcrumbs aria-label="breadcrumb">d
//                 <Link to="/getting-started/installation/" >
//                   Home
//                 </Link>
//                 <Link to="/about" >
//                   About
//                 </Link>
//                 <Link to="/experience" >
//                   Experience
//                 </Link>
//                 <Link to="/resume" >
//                   Resume
//                 </Link>
//                 </Breadcrumbs>  
//             </ul>
//           </div>
//         </nav>
//         </div>
//             </AppBar>
//         </div >

//       // </div>
//     );
// }
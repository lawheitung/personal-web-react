import React from 'react'
import './hero.scss'
import {IoMdPin} from 'react-icons/io'
import {FaEnvelope, FaFonticons} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {IoLogoGithub} from 'react-icons/io'
import { Linebreaker, Pace, WindupChildren, Pause, useWindupString } from 'windups'

const MyName = () => {
    return (
        <WindupChildren>
        
          <Pace ms={80}>
            <p>
              {"Hey there! I'm"}
              <Pause ms={5} />
            </p>
          </Pace>
          <Pace ms={150}>
            <h1>
              <em>{"Tiffany Law"}</em>
            </h1> 
          </Pace>
        
        </WindupChildren>
    );
}  

export default function Hero ({img,max}) {
        return (
            <>
            <div>
                <div class="hero">
                <ul class="hero-social">
                  <li>
                      <a class="hero-social-icon twitter" href="#"><FaTwitter/><span>Twitter</span></a>
                  </li>
                  <li>
                    <a class="hero-social-icon github" href="#"><IoLogoGithub/><span>Github</span></a>
                  </li>
                  <li>
                    <a class="hero-social-icon linkedin" href="#"><FaLinkedinIn/><span>LinkedIn</span></a>
                  </li>
                  <li>
                    <a class="hero-social-icon email" href="#"><FaEnvelope/><span>Email</span></a>
                  </li>
                  <li>
                      <a class="navtext" href="#">
                          <span>Contact us</span>
                      </a>
                  </li>
              </ul>
                <div class="contact-line" />
                <div class="sectionHeader2">
                <div class="titlecontainer1">
                    <div class="titlecontainer2">
                        <MyName/>
                    </div>  

                        {/* <button class="button button-green button-outline">
                            More About Me
                        </button>
                    
                        <button class="button button-green button-outline">
                            My Experience
                        </button> */}
                    </div>


                    

                    <div class="scroll-down-for-more">

                    </div>

                </div>
                </div>
            </div>


            
            </>
        );
    
}

// const HeroWrapper = styled.div`
//     text-align:center;
//     font-family:$title;
//     display:flex;
//     align-items:center;
//     justify-content:center;
//     min-height: ${props =>props.max?'100vh':'65vh'}; 
//     color: white;
//     transform: matrix(-1, 0, 0, 1, 0, 0);
//     background: url(${props => props.img}) center/cover no-repeat;
   
// `
// Hero.defaultProps ={
//     img:BCG
// }

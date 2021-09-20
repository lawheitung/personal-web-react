import React, { useEffect} from 'react'
import IntroLine from "../intro"
import './fencing.scss'
// import {useInView} from 'react-intersection-observer';
// import {motion, useAnimation} from 'framer-motion';


export default function Fencing () {
	return (
	  <>
	  	<div class='component-container'>
			<IntroLine title="Fencing" description="I'm intrigued by weapons, foil in particular"/>
			<div className='center-content'>
			<div className="content">
				<p>Fencing has improved me as a person in most ways... except flexibility.
				It connects me to the world with an iterative cycle of improvements and a decade of friendships. Had been a student athlete since 15, or in a more immature level since 13. Those years had been a constant debate of sufficient rest, grades, performance and a social life. Regrets? Not a bit. It exercised my creative muscles for game strategies, strengthen my tolerance to adversity and taught me the importance of passion. I have transformed that grind and take it to my professional career. While the love for the sport remains, I decided it’s time to give back – coach the younger generations! </p>
			</div>

			<section className="fencinglist">

				< FencingPhoto
				img = {"fencing1.jpg"} title={"Beginner"} description={"Picked up a foil at 8, fell in love ever since"}  
				/>
				< FencingPhoto
				img = {"fencing2.jpg"} title={"Passion"} description={"Advanced the journey to a pro through high school and college"} 
				/>
				< FencingPhoto
				img = {"fencing4.jpg"} title={"Giving Back"} description={"Continuing the journey in the community inspiring the younger generations"}
				/>

			</section>

			</div>


		</div>
	</>
	)
}



const FencingPhoto = ( {img, title, description} ) =>{
	return (
	  <>
	    <div data-sal="slide-up" className="container">
	    	<div className="hovereffect">    
                        <img className="img-responsive" src={img}alt=""/>
                            <div className="overlay">
                                <h2>{title}</h2>
                                <p>{description}</p>
                            </div>

                    </div>             
            </div>
	  
	  </>
	)
      }
     

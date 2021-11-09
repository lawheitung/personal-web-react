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
	    <div data-aos="fade-up" className="container">
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
     




// import React, { Component, useEffect } from 'react'
// import './fencinglist.scss'
// // import FencingComp from '../FencingComp/FencingComp'
// import {fencingDatas} from '../../fencingData'
// import {motion, useAnimation} from 'framer-motion';
// import {useInView} from 'react-intersection-observer';



// export default function FencingList () {

//         // console.log(this.state.journeys)

//         const {ref, inView} = useInView({
//             threshold : 0.3
//         });

//         useEffect (() => {
//             if (inView){
//                 animation.start({
//                     y:0,
//                     transition: {
//                         type: 'spring',
//                         duration: 2,
//                         bounce: 0.3
//                     }
//                 });
//             }

//             if(!inView){
//                 animation.start({y: '-500vw'})
//             }
//         }, [inView]);

//         const animation = useAnimation();

//         return (
//             <div className="backgroundColor3">
//                 <div class="sectionHeader3">
//                     <span class="header3 ver3">
//                         <strong>I'm intrigued by weapons, foil in particular</strong>
//                     </span>
// 		        </div>
//                 <div className="content">
//                     <p>Fencing has improved me as a person in most ways... except flexibility.
//                         It connects me to the world with an iterative cycle of improvements and a decade of friendships. </p>
//                 </div>

//                 <div>


//                     <section className="fencinglist">
//                         {/* {
//                             fencingcomps.map(fencingcomp => (<FencingComp key= { fencingcomp.id } fencingcomp = { fencingcomp } />))
//                         } */}

//                             {
//                                 fencingDatas.map( (fencingData) => {
//                                     return(
//                                         <FencingComp key= { fencingData.id } {...fencingData} />
//                                     );
//                                 })}
                        


//                     </section>

//                 </div>
//             </div>
            
//         );

// }


// function FencingComp ({title,img,description}) {


//     // const { title, description, img } = props.fencingData;

//     return (
//             <div className="container">
//                 <div className="hovereffect">
//                     <img className="img-responsive" src={img}alt=""/>
//                         <div className="overlay">
//                             <h2>{title}</h2>
//                             <p>{description}</p>
//                         </div>

//                 </div>
            
//             {/* <div className="container">
//                 <article className="fencingcomp">
//                     <div className="fencingcomp-info">
//                         <p>{description}</p>
//                         <p> {title} </p>
//                         <div className="img-container">
//                             <img src={img} alt="fencing" />
//                         </div>
//                     </div>
//                 </article>
//             </div> */}
            
//         </div>
//     )
// }



import * as React from "react"
import IntroLine from "../intro"
import './gameplan.scss'


const Gameplan = ({ max}) =>{
	return (
	<>
		<div class="bg">
			<img class="gamebg-1" src="kiefer.jpg"/>
			<img class="gamebg-2" src="markzuckerberg.jpg"/>
			<img class="gamebg-3" src="kobe.jpg"/>
			<img class="gamebg-4" src="warrenbuffet.jpg"/>
			<img class="gamebg-5" src="churchill.jpg"/>
			<div class="wrap">
			<IntroLine title="Game Plan" description="My A game that takes me through all the challenges in life" />
			<div className="content">
			<section className="qualitylist">
				<Qualities quote={'Don\'t take your shots, take lots of shots'} link={'https://www.forbes.com/sites/donyaeger/2020/01/27/keep-shooting-your-shot-a-kobe-bryant-memory-and-a-lesson-in-greatness/#7a6cb6384458'}/>
				<Qualities quote={'Be crafty and take actions'} link={'https://www.motivateamazebegreat.com/2014/05/steve-jobs-stanford-university.html'}/>
				<Qualities quote={'Trust your teammates'} link={'https://youexec.com/book-summaries/the-five-dysfunctions-of-a-team'}/>
				<Qualities quote={'Seek to understand, then to be understood'} link={'https://www.franklincovey.com/habit-5/'}/>
				<Qualities quote={'Learn everyday'} link={'https://www.coursera.org/learn/mlops-fundamentals/'}/>

                	</section>
			</div>
			</div>
			




		</div>
	</>
	)
}


export default Gameplan


const Qualities = ({ quote, link} ) => {
        return (
            <session data-aos="fade-up" className="quality-info">
                <button className="quality-links">

			<a className='quality-link' href = {link} target="_blank">{quote}</a>

		    </button>
            </session>
        )
    }

// import React, { Component } from 'react'
// import './qualitylist.scss'
// // import Qualities from '../Qualities/Qualities'
// import {qualityDatas} from '../../qualityDatas'


// export default function QualityList () {

//         return (
//             <div className="backgroundColor2">
//                 <div className="qualitylist">
//                     <div class="sectionHeader2">
//                         <span class="header2 ver1">
//                             <strong>My game plan</strong>
//                         </span>
// 		            </div>
//                 </div>
                
//                 <section className="qualitylist">
//                 {
//                     qualityDatas.map( (qualityData) => {
//                         return (
//                             <Qualities key= { qualityData.id } {...qualityData } />
//                         );
//                     })
//                 }
                
//                 </section>
//             </div> 
            
//         )
//     }


// function Qualities ({ id, quote, link} ) {
//         return (
//             <session className="quality-info">
//                 <div className="quality-links">
//                     <a className='quality-link' href = {link} target="_blank">{quote}</a>
//                 </div>
//             </session>
//         )
//     }

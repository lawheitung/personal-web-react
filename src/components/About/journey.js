import * as React from "react"
import IntroLine from "../intro"
import './journey.scss'
// import sal from 'sal.js'
// import AOS from 'aos';
// import { Watch } from 'scrollmonitor-react';

const Journey = () =>{


	return (
	  <>
		<IntroLine title="About Me" description="My journey to adulting so far"/>
		<div className='content'>
		{/* <div class='center-content'> */}
			<div   data-sal-threshold="0.1" class="container">
			<div class="timeline">
				<JourneyDetail color={"timeline-container warning"} title={"University of Hong Kong"} time={"Sept 2014 - June 2019"} img={"../../hkulogo.png"} location = {"Hong Kong"} description = {"Diversity of experience and critical thinking are the best qualities HKU has offered me. From being a student athlete, volunteering abroad and living with different people in the dorm. HKU flooded me with a wealth of inspiring peers and phenomenal professors across disciplines and boarders. It’s a five-year exploration (because I did a co-op) of self, life, relationships, career and freedom."}/>
				<JourneyDetail color={"timeline-container info"}title={"UberEATS"} time={"Sept 2016 - Dec 2016"} img={"../../ubereats.jpg"} location = {"Hong Kong"} description = {"First ever job! It was an incredible experience in a vibrant fast-paced environment. I’m grateful for the opportunity to be a part of its market launch in HK where I get to learn a lot from other functions and the business itself. Having to see it’s go-to-market strategies and campaigns, operation models and great management. This workplace bootcamp of six months allowed me to osmose bits of wisdom from the devoted customer service team, high-flying sales rep and creative marketer."}/>
				<JourneyDetail color={"timeline-container success"} title={"AIESEC Volunteering"} time={"July 2016 - Aug 2016"} img={"../../hksi_logo.jpg"} location = {"Hong Kong"} description = {"Going abroad wasn’t just something I’ve always been curious about – the culture and history is calling for me. My experience volunteering with AIESEC showed me the power of empathetic leadership and expanded my comfort zone. Even until today, some of the kids I met would still hit me up for a lil’ online game from time to time. The impact I’ve made not only humbled me to adjust my worldview, but also quench my thirst to become a global citizen. This has marked the start of a self-exploration journey with solo travelling in the few forward years."}/>
			</div>
			</div>
		{/* </div> */}
		</div>
		
	</>
	)
}



const JourneyDetail = ({color, img, time, title, location, description}) => {
	return(
		<>
		<div data-sal="slide-up" class={color}>
                    <div class="timeline-icon">
                        <i class="far fa-grin-wink">
				{/* <img src={img} alt="experience" /> */}
			</i>
                    </div>
                    <div class="timeline-body">
                        <h4 class="timeline-title"><span class="badge">{title}</span></h4>
                        <p class="timeline-subtitle">{time} | {location}</p>
                        <p> {description} </p>
                    </div>
                </div>
		</>
	)
}

export default Journey
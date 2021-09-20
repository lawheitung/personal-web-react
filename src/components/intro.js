import * as React from "react"
import './intro.scss'



const IntroLine = ( {title,description} ) =>{
	return (
	  <>
                <div class="sectionHeader">

			<div class="titlecontainer">
				<p> {title} </p>
			</div>
			<h2> {description} </h2>    
		</div>
	  </>
	)
      }
      
export default IntroLine

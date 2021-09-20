import * as React from "react"
import IntroLine from "../intro"
// import './journey.scss'
import sal from 'sal.js'
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import './skills.scss';
import {Card} from 'react-bootstrap'; 
// import {Button} from 'react-bootstrap';
// import {ProgressBar} from 'react-bootstrap';


export default function Skills () {
	return (
	  <>
	  	<div class='component-container'>
			<IntroLine title="My Skills" description="What I can contribute "/>
			<div className="container-col">
				<div class="col">
				<Card style={{ width: '98%', background: 'black' }}>
					<Card.Header>Machine Learning Skills</Card.Header>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
								</div>
						</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
								</div>
						</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row"/> 
 				</Card>

				</div>
				<div class="col">
				<Card style={{ width: '98%', background: 'black' }}>
					<Card.Header>Machine Learning Skills</Card.Header>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
								</div>
						</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
								</div>
						</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row"/> 
 				</Card>

				 <div class="progress-row"/> 

				 <Card style={{ width: '98%', background: 'black' }}>
					<Card.Header>Machine Learning Skills</Card.Header>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
								</div>
						</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
								</div>
						</div>
						</div>	
					 </div>
					 <div class="progress-row">
						<div class="progress-title">
							<h3>HTML</h3>
							<div class="skill-bar-percent">65%</div>
							<div class="progress">
								<div class="progress-bar">
							</div>
							</div>
						</div>	
					 </div>
					 <div class="progress-row"/> 
 				</Card>
				</div>
				</div>
			</div>
	  </>
	)
}


// <div className="container-col">
// 				<div class="col">
// 				<Card style={{ width: '100%', background: 'black' }}>
// 					<Card.Body>
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					</Card.Body>
// 					<Card.Body>
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					</Card.Body>
// 					<Card.Body>
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					</Card.Body>	
// 				</Card>
// 				</div>
// 				<div class="col">
// 				<Card style={{ width: '90%', background: 'black', justifyContent: 'center' }}>
// 					<Card.Body>
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					<Card.Title>Python</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>	
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					<Card.Title>Python</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>	
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					<Card.Title>Python</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>	

					
// 					</Card.Body>
// 				</Card>
// 				<Card style={{ width: '90%', background: 'green' }}>
// 					<Card.Body>
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					<Card.Title>Python</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>	
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					<Card.Title>Python</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>	
// 					<Card.Title>VBA</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>
// 					<Card.Title>Python</Card.Title>
// 					<ProgressBar now={60} ainmated={true}/>	
					
// 					</Card.Body>
// 				</Card>	
// 				</div>
// 			</div>
		
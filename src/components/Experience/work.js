import * as React from "react"
import IntroLine from "../intro"
// import './journey.scss'
import sal from 'sal.js'
import AOS from 'aos';
import classNames from 'classnames';
import { Watch } from 'scrollmonitor-react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './work.scss'

function TabPanel(props) {
	const { children, value, index, ...other } = props;
      
	return (
	  <div
	    role="tabpanel"
	    hidden={value !== index}
	    id={`vertical-tabpanel-${index}`}
	    aria-labelledby={`vertical-tab-${index}`}
	    {...other}
	  >
	    {value === index && (
	      <Box p={3} class="tab-panel">
		<Typography>{children}</Typography>
	      </Box>
	    )}
	  </div>
	);
      }
      
      TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
      };
      
      function a11yProps(index) {
	return {
	  id: `vertical-tab-${index}`,
	  'aria-controls': `vertical-tabpanel-${index}`,
	};
      }
      
      const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	  backgroundColor:  "#09161d",
	//   backgroundColor: 'white',
	  borderRight: `1px solid white`,
	  display: 'flex',
	  height: `60vh`,
	},
	// tabs: {
	//   borderLeft: `1px solid #616771;`,
	// },
      }));

const Work = () =>{
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
      
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};

	return (
	  <>
		<IntroLine title="Work Experience" description="Things I do and learn on a daily basis"/>
		<div className='content'>
		<div class='center-content'>

			<div className={classes.root}>
				<Tabs
					orientation="vertical"
					// variant="scrollable"
					value={value}
					onChange={handleChange}
					aria-label="Vertical tabs example"
					className={classes.tabs}
					TabIndicatorProps={{
						style:{
							backgroundColor:"#1df098",
							left:0,
						},
					}}
				>
					<Tab label="NetApp" {...a11yProps(0)} />
					<Tab label="IBM" {...a11yProps(1)} />
					<Tab label="ZA Bank" {...a11yProps(2)} />
					<Tab label="PrimeCredit Limited" {...a11yProps(3)} />
					<Tab label="Hang Seng Bank" {...a11yProps(4)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<div class='experience'>
					<h4>AI Solutions Architect @ <a href="www.netapp.com">NetApp </a></h4>
					<h6>Sep 2020 - Present</h6>
					<p class='introduction'>NetApp is a a software company with its dedication to promote its cloud business. While expanding its hardware partnership with NVIDIA to sell DGX. To expand its reach in the AI market</p>
					<p class='achievement'>
					Built and shared a MLOps playbook to help sales, PS and SE globally understand the values of MLOps solutions and CI/CD/CD tools such as Kubeflow </p>
					<p class='achievement'> Expanded NetApp’s reach in the local AI market from zero presence to an established brand partnering with regional and local BD to ensure stable growth through enabling resell partners and SEs to deliver demos, building labs and webinar sessions</p>
					<p class='achievement'>Translated business requirements into technical solutions for enterprise Financial Services/Aviation/Enterprise clients with $6M on system integration, architecture and infrastructure to build their hybrid cloud strategy </p>
					</div>
					{/* Item One */}
				</TabPanel>
				<TabPanel value={value} index={1}>
					<div class='experience'>
						<h4>AI Solutions Architect @ <a href="www.netapp.com">NetApp </a></h4>
						<h6>Sep 2020 - Present</h6>
						<p class='introduction'>NetApp is a a software company with its dedication to promote its cloud business. While expanding its hardware partnership with NVIDIA to sell DGX. To expand its reach in the AI market</p>
						<p class='achievement'>
						Built and shared a MLOps playbook to help sales, PS and SE globally understand the values of MLOps solutions and CI/CD/CD tools such as Kubeflow </p>
						<p class='achievement'> Expanded NetApp’s reach in the local AI market from zero presence to an established brand partnering with regional and local BD to ensure stable growth through enabling resell partners and SEs to deliver demos, building labs and webinar sessions</p>
						<p class='achievement'>Translated business requirements into technical solutions for enterprise Financial Services/Aviation/Enterprise clients with $6M on system integration, architecture and infrastructure to build their hybrid cloud strategy </p>
					</div>
					{/* Item Two */}
				</TabPanel>
				<TabPanel value={value} index={2}>
					<div class='experience'>
						<h4>AI Solutions Architect @ <a href="www.netapp.com">NetApp </a></h4>
						<h6>Sep 2020 - Present</h6>
						<p class='introduction'>NetApp is a a software company with its dedication to promote its cloud business. While expanding its hardware partnership with NVIDIA to sell DGX. To expand its reach in the AI market</p>
						<p class='achievement'>
						Built and shared a MLOps playbook to help sales, PS and SE globally understand the values of MLOps solutions and CI/CD/CD tools such as Kubeflow </p>
						<p class='achievement'> Expanded NetApp’s reach in the local AI market from zero presence to an established brand partnering with regional and local BD to ensure stable growth through enabling resell partners and SEs to deliver demos, building labs and webinar sessions</p>
						<p class='achievement'>Translated business requirements into technical solutions for enterprise Financial Services/Aviation/Enterprise clients with $6M on system integration, architecture and infrastructure to build their hybrid cloud strategy </p>
					</div>
					{/* Item Three */}
				</TabPanel>
				<TabPanel value={value} index={3}>
					<div class='experience'>
						<h5>AI Solutions Architect <h5 class="highlight">@</h5> <a href="https://www.netapp.com" target="_blank" rel="noopener norefferer">NetApp </a></h5>
						<p class="period">Sep 2020 - Present</p>
						<p class='introduction'>NetApp is a a software company with its dedication to promote its cloud business. While expanding its hardware partnership with NVIDIA to sell DGX. To expand its reach in the AI market</p>
						<ul>
						<li>
							
						Built and shared a MLOps playbook to help sales, PS and SE globally understand the values of MLOps solutions and <p class='highlight'>CI/CD/CD</p>tools such as <p class='highlight'>Kubeflow</p></li>
						<li> Expanded NetApp’s reach in the local AI market from zero presence to an established brand partnering with regional and local BD to ensure stable growth through enabling resell partners and SEs to deliver demos, building labs and webinar sessions</li>
						<li>Translated business requirements into technical solutions for enterprise Financial Services/Aviation/Enterprise clients with $6M on system integration, architecture and infrastructure to build their hybrid cloud strategy </li>
					</ul>
					</div>
				</TabPanel>
				<TabPanel value={value} index={4}>
					<div class='experience'>
						<h4>AI Solutions Architect @ <a href="www.netapp.com">NetApp </a></h4>
						<h6>Sep 2020 - Present</h6>
						<p class='introduction'>NetApp is a a software company with its dedication to promote its cloud business. While expanding its hardware partnership with NVIDIA to sell DGX. To expand its reach in the AI market</p>
						<p class='achievement'>
						Built and shared a MLOps playbook to help sales, PS and SE globally understand the values of MLOps solutions and CI/CD/CD tools such as Kubeflow </p>
						<p class='achievement'> Expanded NetApp’s reach in the local AI market from zero presence to an established brand partnering with regional and local BD to ensure stable growth through enabling resell partners and SEs to deliver demos, building labs and webinar sessions</p>
						<p class='achievement'>Translated business requirements into technical solutions for enterprise Financial Services/Aviation/Enterprise clients with $6M on system integration, architecture and infrastructure to build their hybrid cloud strategy </p>
					</div>
				</TabPanel>
				</div>	
			</div>
		</div>
		
	</>
	)
}

export default Work
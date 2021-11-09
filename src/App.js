import React, {useState, useEffect} from 'react'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'
import Contact from './Pages/ContactP'
import Experience from './Pages/Experience'
import {Route, Switch} from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader"; 
import { css } from "@emotion/react";

const override = css`
position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
width: 100px;
height: 100px;
`;

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },8000)
  }, [])

  return (
      <div>
      {
        loading? (
        <ScaleLoader size={250} height={55} width={5} radius={2} margin={4} css={override} color={"#1df098"} loading={loading}/>
       ) : (
      <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      </div>
       )
    }
    </div>
  )}
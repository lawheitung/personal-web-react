import React, { Component } from 'react'
// import './projectdetails.scss'
import { Link } from 'react-router-dom';



export default class Project extends Component {
    render() {
        const { id, name , img, date, link, language, lib, tools } = this.props.project;
        return (
            <article className="projectdetails">
                <div className="img-container2">
                    <img src={img} alt="projecttype" />
                </div>
                <div className="projectdetails-info">
                    <h2><b>{name}</b></h2>
                    <p><a href={link} target="_blank">{link}</a></p>
                    <div className="pj-details">
                        <p>&#128467; {date} </p>
                        <h1> {language}  |  {lib}  |  {tools}</h1>
                    </div>
                    
                </div>
            </article>
        )
    }
}

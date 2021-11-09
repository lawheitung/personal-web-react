import React, { Component } from 'react'
import './projectlist.scss'
// import '../Projectdetails/projectdetails.scss'
// import Project from '../Projectdetails/Projectdetails'
import {projectDatas} from '../../projectDatas'

export default function Projectlist () {
        return (
            <div className="backgroundColor1">
                <section className="projectlist">
                <div class="sectionHeader">
                    <span class="header ver2">
                        <strong>What I have created</strong>
                    </span>
		        </div>
                    {
                        projectDatas.map( (projectData) => {
                            return (
                                <Project key= { projectData.id } {...projectData } />    
                            );
                        })
                    }
                
                </section>
            </div>
            
        );
    }




function Project ({ id, name , img, date, link, language, lib, tools }) {
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


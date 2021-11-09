import React from 'react';
import Hero from '../Components/hero/hero'
import JourneyList from '../Components/journey/journey';
import QualityList from '../Components/gameplan/gameplan';
import FencingList from '../Components/fencing/fencing';
import Contact from '../Components/contact'
import TravelList from '../Components/travel/travel'

export default function Home(){

    return (
      <>
        <Hero max="true"/>
        <JourneyList />
        <FencingList/>
        <TravelList/>
        <QualityList/>
        <Contact/>
      </>
    );
  }



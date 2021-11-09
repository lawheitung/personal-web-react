import React from 'react';
import Hero from '../components/hero/hero'
import JourneyList from '../components/journey/journey';
import QualityList from '../components/gameplan/gameplan';
import FencingList from '../components/fencing/fencing';
import Contact from '../components/contact'
import TravelList from '../components/travel/travel'

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



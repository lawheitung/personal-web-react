import React from 'react';
import JourneyList from '../Components/journey/journey';
import QualityList from '../Components/gameplan/gameplan';
import FencingList from '../Components/fencing/fencing';
import Hero from '../Components/hero/hero'
import Contact from '../Components/contact'
import TravelList from '../Components/travel/travel'

export default function About(){

    return (
      <>

        <JourneyList />
        <FencingList/>
        <TravelList/>
        <QualityList/>
        <Contact/>
      </>
    );
  }



import React from 'react'
import JourneyList from '../components/journey/journey'
import QualityList from '../components/gameplan/gameplan'
import FencingList from '../components/fencing/fencing'
import Contact from '../components/contact'
import TravelList from '../components/travel/travel'

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



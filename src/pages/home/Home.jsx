import React from 'react'
import { Link } from 'react-router-dom';
import HSHero from '../../components/uiComponents/HSHero';
import HSWhatYouLearn from '../../components/uiComponents/HSWhatYouLearn';
import HSRoadmap from '../../components/uiComponents/HSRoadmap';
import HSBeforeAfter from '../../components/uiComponents/HSBeforeAfter';
import HSStats from '../../components/uiComponents/HSStats';


function Home() {
  return (
    <>
    <HSHero/>
    <HSStats/>
    <HSWhatYouLearn/>
    <HSRoadmap/>
    <HSBeforeAfter/>
    </>
  )
}

export default Home 
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout/MainLayout';
import Home from './pages/home/Home';
import PlaygroundLayout from './layouts/playgroundLayout/PlaygroundLayout';
import PlaygroundIntro from './pages/playground/PlaygroundIntro';

//React Basic
import PersonalProfile from './pages/playground/singleconceptdemo/01_ReactBasic/parentcomponent/PersonalProfile';
import ProductCard from './pages/playground/singleconceptdemo/01_ReactBasic/childcomponent/ProductCard';
import ProductStore from './pages/playground/singleconceptdemo/01_ReactBasic/parentcomponent/ProductStore';
import UCCTargetForm from './pages/playground/singleconceptdemo/01_ReactBasic/parentcomponent/UCCTargetForm';
import UCCFormDataForm from './pages/playground/singleconceptdemo/01_ReactBasic/parentcomponent/UCCFormDataForm';

//useState
import Counter from './pages/playground/singleconceptdemo/Hooks/useState/Counter';
import ShowHideText from './pages/playground/singleconceptdemo/Hooks/useState/ShowHideText';
import ColorChanger from './pages/playground/singleconceptdemo/Hooks/useState/ColorChanger';
import AccordionFAQ from './pages/playground/singleconceptdemo/Hooks/useState/AccordionFAQ';
import Slider from './pages/playground/singleconceptdemo/Hooks/useState/Slider';
import ControlledComponent from './pages/playground/singleconceptdemo/Hooks/useState/ControlledComponent';
//useEffect
import TitleChanger from './pages/playground/singleconceptdemo/Hooks/useEffect/TitleChanger';
import DigitalClock from './pages/playground/singleconceptdemo/Hooks/useEffect/DigitalClock';
import WindowWidthTracker from './pages/playground/singleconceptdemo/Hooks/useEffect/WindowWidthTracker';
import Stopwatch from './pages/playground/singleconceptdemo/Hooks/useEffect/Stopwatch';
import AutoImageSlider from './pages/playground/singleconceptdemo/Hooks/useEffect/AutoImageSlider';
import APIIntegration from './pages/playground/singleconceptdemo/Hooks/useEffect/APIIntegration';
import GithubUserSearch from './pages/playground/singleconceptdemo/Hooks/useEffect/GithubUserSearch';

//Multiple concept 
import Calculator from './pages/playground/multiconceptdemo/Calculator';

function App() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<MainLayout/>}> 
          <Route index element={<Home/>}/>
           <Route path="playground" element={<PlaygroundLayout/>}>
            <Route index element={<PlaygroundIntro/>}/>
            
            {/* React Basic */}
            <Route path="singleconceptdemo/personalprofile" element={<PersonalProfile/>}/>
            <Route path="singleconceptdemo/productcard" element={<ProductCard/>}/>
            <Route path="singleconceptdemo/productstore" element={<ProductStore/>}/>
            <Route path="singleconceptdemo/ucctargetform" element={<UCCTargetForm/>}/>
            <Route path="singleconceptdemo/uccformdataform" element={<UCCFormDataForm/>}/>

            {/* useState */}
            <Route path="singleconceptdemo/counter" element={<Counter/>}/>
            <Route path="singleconceptdemo/showhidetext" element={<ShowHideText/>}/>
            <Route path="singleconceptdemo/colorchanger" element={<ColorChanger/>}/>
            <Route path="singleconceptdemo/accordionfaq" element={<AccordionFAQ/>}/>
            <Route path="singleconceptdemo/slider" element={<Slider/>}/>
            <Route path="singleconceptdemo/controlledcomponent" element={<ControlledComponent/>}/>

            {/* useEffect */}
            <Route path="singleconceptdemo/titlechanger" element={<TitleChanger/>}/>
            <Route path="singleconceptdemo/digitalclock" element={<DigitalClock/>}/>
            <Route path="singleconceptdemo/windowwidthtracker" element={<WindowWidthTracker/>}/>
            <Route path="singleconceptdemo/stopwatch" element={<Stopwatch/>}/>
            <Route path="singleconceptdemo/autoimageslider" element={<AutoImageSlider/>}/>
            <Route path="singleconceptdemo/apiintegration" element={<APIIntegration/>}/>
            <Route path="singleconceptdemo/githubusersearch" element={<GithubUserSearch/>}/>

            {/* Multi Concept project  */}
            <Route path="multiconceptdemo/calculator" element={<Calculator/>}/>
           </Route>
        </Route>
      </Routes>
    </>
  )
} 
export default App
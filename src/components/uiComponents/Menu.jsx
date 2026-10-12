import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

function Menu({ setShowMenu }) {
  const [openMain, setOpenMain] = useState(null);
  const [openSub, setOpenSub] = useState(null);
  const [openSubSub, setOpenSubSub] = useState(null);

  // Main categories
  const mainStyle =
    'flex justify-between items-center cursor-pointer p-3 bg-gradient-to-r from-indigo-700 to-purple-700 text-white rounded-2xl hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md';

  // Dropdown sections
  const subStyle =
    'flex justify-between items-center cursor-pointer p-2 bg-slate-700 text-gray-100 rounded-xl m-2 hover:bg-slate-600 transition-all duration-300 border border-slate-500';

  // Final links
  const linkStyle =
    'block p-2 bg-cyan-600 text-white rounded-xl m-2 hover:bg-cyan-500 hover:translate-x-1 transition-all duration-300 shadow';

  return (
    <div className="bg-slate-900 h-100 overflow-y-auto p-2 text-white w-full">
      {/* Search Box */}
      <div className="flex items-center border border-slate-600 rounded-full px-3 py-2 bg-slate-800 mb-4 shadow">
        <CiSearch size={20} className="text-cyan-400" />
        <input type="search" placeholder="Search concepts..." className="outline-none px-2 w-full bg-transparent text-white placeholder-gray-400"/>
      </div>
      <ul className="space-y-3">
        {/* Single Concept Demo */}
        <li>
          <h1 className={mainStyle} onClick={() => setOpenMain( openMain === 'SingleConceptDemo' ? null : 'SingleConceptDemo')}>
            <span>Single Concept Demo</span>
            {openMain === 'SingleConceptDemo' ? <FaChevronDown /> : <FaChevronRight />}
          </h1>
          {openMain === 'SingleConceptDemo' && (
            <ul className="ml-4 mt-3 border-l-2 border-purple-500 pl-3">
              <li>
                <h1 className={subStyle} onClick={() => setOpenSub(openSub === 'ReactBasic' ? null : 'ReactBasic')}>
                  <span>React Basic</span>
                  {openSub === 'ReactBasic' ? <FaChevronDown /> : <FaChevronRight />}
                </h1>
                {openSub === 'ReactBasic' && (
                  <ul className="ml-4 border-l border-cyan-400 pl-2">
                    <li><Link to="/playground/singleconceptdemo/personalprofile" className={linkStyle} onClick={() => setShowMenu(false)}>Profile Card</Link></li>
                    <li><Link to="/playground/singleconceptdemo/productcard" className={linkStyle} onClick={() => setShowMenu(false)}>Product Card</Link></li>
                    <li><Link to="/playground/singleconceptdemo/productstore" className={linkStyle} onClick={() => setShowMenu(false)}>Product Store</Link></li>
                    <li><Link to="/playground/singleconceptdemo/ucctargetform" className={linkStyle} onClick={() => setShowMenu(false)}>Uncontrolled Component 1</Link></li>
                    <li><Link to="/playground/singleconceptdemo/uccformdataform" className={linkStyle} onClick={() => setShowMenu(false)}>Uncontrolled Component 2</Link></li>
                  </ul>
                )}
              </li>

              <li>
                <h1 className={subStyle} onClick={() => setOpenSub(openSub === 'Hooks' ? null : 'Hooks')}>
                  <span>Hooks</span>
                  {openSub === 'Hooks' ? <FaChevronDown /> : <FaChevronRight />}
                </h1>

                {openSub === 'Hooks' && (
                  <ul className="ml-4 border-l border-cyan-400 pl-2">
                    <li>
                      <h1 className={subStyle} onClick={() =>setOpenSubSub(openSubSub === 'UseState' ? null : 'UseState')}><span>useState</span>{openSubSub === 'UseState' ? (<FaChevronDown />) : (<FaChevronRight />)}</h1>
                      {openSubSub === 'UseState' && (
                        <ul className="ml-4 border-l border-green-400 pl-2">
                          <li><Link to="/playground/singleconceptdemo/counter" className={linkStyle} onClick={() => setShowMenu(false)}>Counter</Link></li>
                          <li><Link to="/playground/singleconceptdemo/showhidetext" className={linkStyle} onClick={() => setShowMenu(false)}>Show/Hide Text</Link></li>
                          <li><Link to="/playground/singleconceptdemo/colorchanger" className={linkStyle} onClick={() => setShowMenu(false)}>Color Changer</Link></li>
                          <li><Link to="/playground/singleconceptdemo/accordionfaq" className={linkStyle} onClick={() => setShowMenu(false)}>AccordionFAQ</Link></li>
                          <li><Link to="/playground/singleconceptdemo/slider" className={linkStyle} onClick={() => setShowMenu(false)}>Slider</Link></li>
                          <li><Link to="/playground/singleconceptdemo/controlledcomponent" className={linkStyle} onClick={() => setShowMenu(false)}>Controlled Component</Link></li>
                        </ul>
                      )}
                    </li>
                    <li>
                      <h1 className={subStyle} onClick={() =>setOpenSubSub(openSubSub === 'useReducer' ? null : 'useReducer')}><span>useReducer</span>{openSubSub === 'useReducer' ? (<FaChevronDown />) : (<FaChevronRight />)}</h1>
                      {openSubSub === 'useReducer' && (
                        <ul className="ml-4 border-l border-green-400 pl-2">
                          <li><Link to="/playground/onlydetails/usestateintro" className={linkStyle} onClick={() => setShowMenu(false)}>useState Intro</Link></li>
                        </ul>
                      )}
                    </li>
                    <li> 
                      <h1 className={subStyle} onClick={() =>setOpenSubSub(openSubSub === 'useEffect' ? null : 'useEffect')}><span>useEffect</span>{openSubSub === 'useEffect' ? (<FaChevronDown />) : (<FaChevronRight />)}</h1>
                      {openSubSub === 'useEffect' && (
                        <ul className="ml-4 border-l border-green-400 pl-2">
                          <li><Link to="/playground/singleconceptdemo/titlechanger" className={linkStyle} onClick={() => setShowMenu(false)}>Title Changer</Link></li>
                          <li><Link to="/playground/singleconceptdemo/digitalclock" className={linkStyle} onClick={() => setShowMenu(false)}>Digital Clock</Link></li>
                          <li><Link to="/playground/singleconceptdemo/windowwidthtracker" className={linkStyle} onClick={() => setShowMenu(false)}>Window Widht Tracker</Link></li>
                          <li><Link to="/playground/singleconceptdemo/stopwatch" className={linkStyle} onClick={() => setShowMenu(false)}>Stop Watch</Link></li>
                          <li><Link to="/playground/singleconceptdemo/autoimageslider" className={linkStyle} onClick={() => setShowMenu(false)}>Auto Slider</Link></li>
                          <li><Link to="/playground/singleconceptdemo/apiintegration" className={linkStyle} onClick={() => setShowMenu(false)}>API Integration</Link></li>
                          <li><Link to="/playground/singleconceptdemo/githubusersearch" className={linkStyle} onClick={() => setShowMenu(false)}>Search Github User</Link></li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <h1 className={mainStyle} onClick={() => setOpenMain(openMain === 'MultiConceptDemo' ? null : 'MultiConceptDemo')}>
            <span>Multi Concept Demo</span>
            {openMain === 'MultiConceptDemo' ? <FaChevronDown /> : <FaChevronRight />}
          </h1>
          {openMain === 'MultiConceptDemo' && (
            <ul className="ml-4 mt-3 border-l-2 border-purple-500 pl-3">
              <li><Link to="/playground/multiconceptdemo/calculator" className={linkStyle} onClick={() => setShowMenu(false)}>Calculator</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}

export default Menu;

import React, {use, useState} from 'react'
import Logo from '../uiComponents/Logo'
import Menu from '../uiComponents/Menu'
import { CiSearch, CiMenuFries } from "react-icons/ci";
import { FaSun, FaMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'


function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [theme, setTheme] = useState(true);

  return (
    <header>
      <nav className='flex justify-around items-center bg-[var-(--bg)] z-900'>
      <div>
        <Link to="/" >{<Logo/>}</Link>
      </div>

      {/* <div className='flex border border-b-black rounded-4xl'>
      <CiSearch size={30}/>
        <input type='search' placeholder='search'/>
      </div> */}

      <div className='hidden md:flex border rounded-full px-2 py-1'>
        <CiSearch size={20}/>
        <input type='search' placeholder='search' className='outline-none px-2 w-32 lg:w-48'/>
      </div>
 
      <div className='flex justify-between items-center gap-5'>
        <div>
          <button onClick={()=>setTheme(theme === true ? false : true)}>{theme === true ?<FaMoon size={30}/>: <FaSun size={30}/>}</button>
        </div>
        {/* <div>
          <button onClick={() => setShowMenu(!showMenu)}>{showMenu === true ? <IoMdClose size={30}/> : <CiMenuFries size={30}/>}</button>
          {showMenu && (
            <div className="absolute top-11 right-0 w-full h-screen bg-amber-600 p-4 lg:w-64 lg:h-auto lg:right-2 rounded shadow-lg">
              <Menu setShowMenu={setShowMenu} />
            </div>
          )}
        </div> */}
      </div>
    </nav>
    </header>
  )
}

export default Header
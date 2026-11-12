import React from 'react'
import { NavLink } from 'react-router-dom'
import useTheme from '../Context/useTheme';

const Header = () => {
    const {theme,toggleTheme}=useTheme();
  return (
    <header className="app-header">
    <h1>Job Tracker</h1>
      <NavLink to="/"><h1>Dashboard</h1></NavLink> 
      <NavLink to="/application"><h1>Application</h1></NavLink>
      <NavLink to="/setting"><h1>Setting</h1></NavLink>
     <button type='button' onClick={toggleTheme} className='display-white,black'>
        Switch to {theme === "light" ? "Dark" : "Light"}
    </button> 
   </header>
  )
}

export default Header
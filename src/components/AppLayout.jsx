import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import useTheme from '../Context/useTheme'

const AppLayout = () => {
  const {theme}=useTheme();
  return (
    <main className={`${theme}`}>
      <Header/>
        <div>
            <Outlet/>
        </div>
    </main>
  )
}

export default AppLayout
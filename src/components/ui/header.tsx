'use client'
import React from 'react';
import Logo from '@/components/ui/logo';
import Toggle from '@/components/ui/toggle';
import Navbar from '@/components/ui/navbar';
import { useState } from 'react';
const Header = () => {
  const [ toggle, setToggle ] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className='Navbar'>    
      <div className='flex flex-row justify-between items-center p-2 md:hidden'>
        <Logo />
        <Toggle handleToggle = { handleToggle } toggle = { toggle } />
      </div>
      {/* toggle */}
      <div className = { `${ toggle ? 'block' : 'hidden'}` } >
        <Navbar />
      </div>
      {/* Large screen view */}
      <div className='hidden md:block'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
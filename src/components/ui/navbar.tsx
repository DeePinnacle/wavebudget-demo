import React from 'react'
import Link from 'next/link'
import Logo from '@/components/ui/logo'
const Navbar = () => {
  return (
    <div className='p-3 '> 
      <div className='md:flex flex-row justify-between items-center align-middle'>
          <div className='p-3 w-24 hidden md:block'>
            <Logo />
          </div>
          <ul className="Navbar-list md:flex md:flex-row md:items-center md:gap-4">
              <li className="list">
                  <Link href="https://selar.co/m/wavebudget-limited1" className='anchor'>Shop now</Link>
              </li>
              <li className="list">
                <Link href="/services" className='anchor'>Our Services</Link>
              </li>
              <li className="list">                
                <Link href="/tesimonials" className='anchor'>Testimonials</Link>
              </li>
              <li className="list">                
                <Link href="/blog" className='anchor'>Blog</Link>
              </li>
              <li className="list">                
                <Link href="/faqs" className='anchor'>FAQs</Link>
              </li>
          </ul>
        <Link href='https://forms.gle/rsysG4E2fPrggv9g9' className='text-white font-bold text-center'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
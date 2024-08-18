import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
 
  return (
    <footer className='text-center bg-neutral-800 bg-opacity-90 text-neutral-300 py-2'>
   <div className='flex items-center justify-center gap-4'>
   <Link to="/">About</Link>
   <Link to="/">Contact</Link>
   </div>
   <p className='py-1 text-sm  lg:text-sm tracking-widest'>Created by Princu Baba</p>

      
    </footer>
  )
}

export default Footer

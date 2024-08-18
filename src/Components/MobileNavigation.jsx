import React from 'react'
import { mobileNavigation } from '../Constant/Navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigation = () => {
  return (
    <section className='lg:hidden bg-black bg-opacity-70 h-14 fixed bottom-0 w-full z-40'>
        <div className='flex items-center justify-between h-full'>
            {
                mobileNavigation.map((item, index)=>{
                    return(
                        <NavLink 
                        to={item.href}
                        key={item.label + "mobilenavigation"}
                        className={({isActive})=> `flex flex-col h-full items-center justify-center px-3 ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                            <div className='text-xl'>
                                {item.icon}
                            </div>
                            <p className='text-center text-xs'>{item.label}</p>
                        </NavLink>

                )
                    
               })
            }
        </div>
    </section>
  )
}

export default MobileNavigation

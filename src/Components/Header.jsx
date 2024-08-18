import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import {Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearchOutline } from "react-icons/io5";
import { Navigation } from '../Constant/Navigation';

const Header = () => {
  const location = useLocation()
  const removespace = location?.search?.slice(3).split("%20")?.join("")

  const [showSearch, setShowSearch] = useState(removespace)
  const navigate = useNavigate()


     useEffect(() => {
      if(showSearch){
      navigate(`/search?q=${showSearch}`)
      }
     
     }, [showSearch])

     const handlesumbit = (e) => {
      e.preventDefault()
   
    }
     
  return (
    <>
        <header className='fixed top-0 w-full h-16 bg-black bg-opacity-60 z-40 '>
            <div className='container mx-auto  px-4 py-4 flex items-center h-full md:px-2'>
                <Link to={"/"}>
                    <img src={logo} alt="logo" className='w-[100px] md:w-[150px]'/>
                </Link>

                <nav className='hidden  lg:flex items-center ml-5'>
                  {
                    Navigation.map((item, index)=>{
                      return(
                        <div key={index}>
                        <NavLink 
                        key={item.label + "header"}
                        to={item.href}
                         style={({isActive})=> ({color: isActive ? 'red' : 'white'})}className='text-white px-4 hover:text-red-400'>{item.label}</NavLink>
                        </div>
                      )
                    })
                  }

                </nav>

                <div className='ml-auto flex items-center gap-10'>
                 <form className='flex items-center gap-2' onSubmit={handlesumbit}>
                   <input type="text" className='bg-transparent py-2 px-5 rounded-full outline-none text-white border-none hidden lg:block' placeholder='Search for movies or tv shows' name='search' 
                   onChange={(e)=>setShowSearch(e.target.value)}
                   value={showSearch}/>
                   <button className='text-2xl text-white'>
                    <IoSearchOutline/>
                   </button>
                 </form>
                

                  <div className='rounded-full overflow-hidden cursor-pointer active:scale-75 transition all md:w-10 md:h-10'>
                    <img src={userIcon} alt="user" className='w-8 h-8  md:w-12 md:h-12' />
                  </div>
                </div>
            </div>


        </header>
      
    </>
  )
}

export default Header

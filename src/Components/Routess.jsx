import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from '../Pages/Home'
import SearchPage from '../Pages/SearchPage'
import ExplorePage from '../Pages/ExplorePage'
import DetailsPage from '../Pages/DetailsPage'

const Routess = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/search' element={<SearchPage/>}/>
            <Route path='/:explore' element={<ExplorePage/>}/>
            <Route path='/:explore/:id' element={<DetailsPage/>}/>
            
        </Routes>
      
    </div>
  )
}

export default Routess

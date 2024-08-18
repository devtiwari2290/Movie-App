import React from 'react'
import { useEffect } from 'react'
import './App.css'
import Routess from './Components/Routess'
import Header from './Components/Header'
import Footer from './Components/Footer'
import MobileNavigation from './Components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setBannerData } from './store/MovieoSlice'



const App = () => {

  const dispatch = useDispatch()

const fetchMovies = async () =>{
  try {

    const response = await axios.get("/trending/all/week?api_key=7e49a5b542c459979bee442f20168640")
  dispatch(setBannerData(response.data.results))

    
  } catch (error) {
    console.log("error", error)
    
  }
}

useEffect(() => {
  fetchMovies()
}, [])


  return (
    <main className='pb-14 lg:pb-0'>
      <Header/>
      <div className='min-h-[90vh] bg-neutral-900 bg-opacity-100'>
      <Routess/>
      </div>
      <Footer/>
      <MobileNavigation/>
    </main>
  )
}

export default App

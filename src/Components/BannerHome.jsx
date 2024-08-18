import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom'


const BannerHome = () => {
    const bannerData = useSelector(state => state.movieData.bannerData)
    console.log(bannerData)

    const [currentSlide, setCurrentSlide] = useState(0)

    const handleNext = () =>{
        if(currentSlide < bannerData.length - 1){
            setCurrentSlide(preve => preve + 1)
        
        }
              
    }
    const handlePrev = () =>{
        if(currentSlide > 0){
            setCurrentSlide(preve => preve - 1)
        }

    }

    useEffect(()=>{
        const interval = setInterval(() => {
            if(currentSlide < bannerData.length - 1){
                handleNext()
                
            }
            else{
                setCurrentSlide(0)
            }
            
        }, 4000)

        return () => clearInterval(interval)

    }, [bannerData, currentSlide])  
  return (
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
            {
                bannerData.map((item, index)=>{
                    return(
                        <div key={item.id + "bannerHome" + index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all duration-300' style={{transform: `translateX(-${currentSlide * 100}%)`}}>
                            <div className='w-full h-full'>
                        <img src={`https://image.tmdb.org/t/p/original/${item?.backdrop_path}`} alt="banner" className='w-full h-full object-cover' />
                        </div>

                        {/* next and previous button */}
                        <div className='absolute top-0 bottom-0  w-full h-full hidden flex justify-between items-center px-10 group-hover:lg:flex lg:px-10'>
                            <button onClick={handlePrev} className='hover:bg-white p-2 rounded-full text-lg text-black z-10 lg:text-2xl'>
                                <FaAngleLeft/>
                            </button>

                            <button onClick={handleNext} className='hover:bg-white p-2 rounded-full text-lg text-black z-10 lg:text-2xl'>
                            <FaAngleRight/> 
                            </button>
                        </div>

                        <div className='absolute top-0  w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                        </div>

                        <div className='container mx-auto absolute bottom-0 max-w-md px-3'>
                            
                            <h2 className='text-base text-white font-bold  px-5 lg:text-3xl drop-shadow-2xl'>{item?.title || item?.name}</h2>
                            <p className='text-ellipsis line-clamp-3 text-white my-2 px-5'>{item?.overview}</p>
                            <div className='flex items-center gap-4 px-5'>
                                <p className='text-white '>Rating : {Number (item?.vote_average).toFixed(1)} + </p>
                                <span className='text-white'>|</span>
                                <p className='text-white '>Views : {Number (item?.popularity).toFixed(0)}</p>
                            </div>
                            <Link  to={"/" + item?.media_type + "/" + item?.id}>
                            <button className='bg-red-600 text-white px-5 py-2 rounded mt-5 ml-5'>Watch Now</button>
                            </Link>
                        
                        </div>

                        </div>
                    )
                })
            }
        </div>

      
    </section>
  )
}

export default BannerHome

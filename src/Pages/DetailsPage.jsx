import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UsefetchDetails from '../Hooks/UsefetchDetails'
import moment from 'moment'
import Divider from '../Components/Divider'
import HorizontalScrollCard from '../Components/HorizontalScrollCard'
import VideoPlay from '../Components/VideoPlay'

const DetailsPage = () => {
  const params = useParams()

  const { data } = UsefetchDetails(`/${params?.explore}/${params?.id}?api_key=7e49a5b542c459979bee442f20168640&language=en-US`)
  const { data: castData } = UsefetchDetails(`/${params?.explore}/${params?.id}/credits?api_key=7e49a5b542c459979bee442f20168640&language=en-US`)
  const { data: similarData } = UsefetchDetails(`/${params?.explore}/${params?.id}/similar?api_key=7e49a5b542c459979bee442f20168640&language=en-US&page=1`)
  const { data: recommendation } = UsefetchDetails(`/${params?.explore}/${params?.id}/recommendations?api_key=7e49a5b542c459979bee442f20168640&language=en-US&page=1`)
  
  const [playVideo, setPlayVideo] = useState(false)
  const [playVideoId, setPlayVideoId] = useState("")
 

  const handlePlayVideo = (data) => {
    setPlayVideoId(data) 
    setPlayVideo(true) 
  }

  return (
    <div>

      <div className='w-full h-[300px] relative hidden lg:block'>
        <div className='w-full h-full'>
          <img src={"https://image.tmdb.org/t/p/original/" + data?.backdrop_path} alt=""
            className='w-full h-full object-cover rounded' />
        </div>
        <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'></div>
      </div>

      <div className='container mx-auto px-3 py-20 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60'>
          <img src={"https://image.tmdb.org/t/p/original/" + data?.poster_path} alt=""
            className='w-60 h-80 object-cover rounded' />

          <button onClick={() => handlePlayVideo(data)} className='mt-3 w-full py-2 px-4 text-center bg-white text-black rounded text-lg font-semibold hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:scale-105 transition all duration-300 hover:text-white'>Play Now</button>
        </div>

        <div>
          <h2 className='text-white font-semibold text-xl text-center lg:text-3xl lg:text-left'>{data?.title || data?.name}</h2>
          <p className='text-neutral-400 text-center lg:text-left'>{data?.tagline}</p>

          <Divider />
          <div className='text-neutral-400 flex items-center my-1 gap-3'>
            <p>
              Rating: {Number(data?.vote_average).toFixed(1)}
            </p>
            <span>|</span>
            <p>
              Views: {data?.vote_count}
            </p>
            <span>|</span>
            <p>
              Duration: {Math.floor(data?.runtime / 60)}h {data?.runtime % 60} min
            </p>
          </div>

          <Divider />

          <div>
            <h3 className='text-white text-xl font-semibold mb-1 text-white'>Overview</h3>
            <p className='text-neutral-400'>{data?.overview}</p>
            <Divider />
            <div className='text-neutral-400 flex items-center text-center my-3 gap-3'>
              <p>
                Status: {data?.status}
              </p>

              <span>|</span>
              <p>
                Release Date: {moment(data?.release_date).format('MMMM Do YYYY')}
              </p>

              <span>|</span>
              <p>Language: {data?.original_language}</p>

            </div>

            <Divider />
          </div>

          <div className='text-neutral-400'>
            <p><span className='text-white'> Director</span> :{castData?.crew[0]?.name}</p>

            <Divider />

            <p><span className='text-white'> Writer</span> :{castData?.crew[1]?.name}</p>
          </div>

          <Divider />

          <h2 className='font-bold text-lg text-white'>Cast:</h2>
          <div className='grid grid-cols-[repeat(auto-fit,100px)] gap-5 my-4'>
            {
              castData?.cast?.filter(el => el?.profile_path).map((starCast, index) => {
                return (
                  <div key={index}>
                    <div>
                      <img
                        src={"https://image.tmdb.org/t/p/original/" + starCast?.profile_path}
                        className='w-24 h-24 object-cover rounded-full'
                        alt={starCast?.name}
                      />
                    </div>
                    <p className='font-bold text-center text-sm text-neutral-400'>{starCast?.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard data={similarData?.results} heading={"Similar " + params?.explore} media_type={params?.explore} />
        <HorizontalScrollCard data={recommendation?.results} heading={"Recommendation " + params?.explore} media_type={params?.explore} />
      </div>

      {
        playVideo && (
          <VideoPlay data={playVideoId} close={() => setPlayVideo(false)} media_type={params?.explore} />
        )
      }
    </div>
  )
}

export default DetailsPage

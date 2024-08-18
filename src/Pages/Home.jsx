// import React, { useEffect, useState } from 'react'
// import BannerHome from '../Components/BannerHome'
// import Cards from '../Components/Cards'
// import { useSelector } from 'react-redux'
// import HorizontalScrollCard from '../Components/HorizontalScrollCard'
// import axios from 'axios'
// import useFetch from '../Hooks/Usefetch'

// const Home = () => {
//   const trendingData = useSelector(state => state.movieData.bannerData)

//   const {data : nowplayingData} = useFetch("movie/now_playing?api_key=7e49a5b542c459979bee442f20168640")
//   const {data: topRatedData} = useFetch("movie/top_rated?api_key=7e49a5b542c459979bee442f20168640")
//   const {data: populareTvShowData} = useFetch("tv/popular?api_key=7e49a5b542c459979bee442f20168640")
//   const {data: onAirShowData} = useFetch("tv/on_the_air?api_key=7e49a5b542c459979bee442f20168640")

//   return (
//     <div>

//      <BannerHome/>
//      <HorizontalScrollCard data={trendingData} heading={"Trending Now"} trending={true}/>
//      <HorizontalScrollCard data={nowplayingData} heading={"Now Playing"} media_type={"movie"} />
//      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
//      <HorizontalScrollCard data={populareTvShowData} heading={"Popular Tv Shows"} media_type={"tv"}/>
//      <HorizontalScrollCard data={onAirShowData} heading={"On The  Air"} media_type={"tv"}/>

  
//     </div>
//   )
// }

// export default Home



import React from 'react';
import BannerHome from '../Components/BannerHome';
import { useSelector } from 'react-redux';
import HorizontalScrollCard from '../Components/HorizontalScrollCard';
import useFetch from '../Hooks/Usefetch';

const Home = () => {
  const trendingData = useSelector((state) => state.movieData.bannerData);

  const { data: nowplayingData = [] } = useFetch(
    'movie/now_playing?api_key=7e49a5b542c459979bee442f20168640'
  );
  const { data: topRatedData = [] } = useFetch(
    'movie/top_rated?api_key=7e49a5b542c459979bee442f20168640'
  );
  const { data: populareTvShowData = [] } = useFetch(
    'tv/popular?api_key=7e49a5b542c459979bee442f20168640'
  );
  const { data: onAirShowData = [] } = useFetch(
    'tv/on_the_air?api_key=7e49a5b542c459979bee442f20168640'
  );

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={'Trending Now'}
        trending={true}
      />
      <HorizontalScrollCard
        data={nowplayingData}
        heading={'Now Playing'}
        media_type={'movie'}
      />
      <HorizontalScrollCard
        data={topRatedData}
        heading={'Top Rated Movies'}
        media_type={'movie'}
      />
      <HorizontalScrollCard
        data={populareTvShowData}
        heading={'Popular TV Shows'}
        media_type={'tv'}
      />
      <HorizontalScrollCard
        data={onAirShowData}
        heading={'On The Air'}
        media_type={'tv'}
      />
    </div>
  );
};

export default Home;


import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cards from '../Components/Cards'

const SearchPage = () => {
  
  const location = useLocation();
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const query = location?.search?.slice(3)
  const navigate = useNavigate();
  
  const fetchData = async () => {
    try {
      const response = await axios.get("search/multi?api_key=7e49a5b542c459979bee442f20168640", {
        params: {
          query: location?.search?.slice(3),
          page: page
        }
      });
      setData((prev) => [
        ...prev,
        ...response.data.results
      ]);

    } catch (error) {
      console.log("error", error);
    }
  };

  

  useEffect(()=>{
    if(query){
    setPage(1)
    setData([])
    fetchData()
  }
  }, [location?.search])

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setPage(prev => prev + 1);
    }
  }

  useEffect(()=>{
    if(query){
      fetchData()
    }
   
  }, [page])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='py-16'>
      <div className='lg:hidden my-2 mx-1 sticky top-[80px] z-30'>
        <input 
        type="text" 
        placeholder='Search here...'
        onChange={(e)=> navigate(`/search?q=${e.target.value}`)}
        value={query?.split("%20")?.join(" ")}
        className='w-full px-4 py-1 text-lg bg-white rounded-full text-neutral-900'
        />
      </div>
       <div className='container mx-auto'>
        <h2 className='capitalize text-lg lg:text-xl  text-white font-semibold my-3'> Search Results
        </h2>
        <div className='grid grid-cols-[repeat(auto-fit,230px)] justify-center gap-7 lg:justify-start '>
          {
            data.map((searchData, index) => (
              <Cards key={searchData.id} item={searchData} index={index} media_type={searchData.media_type} />
            ))
          }
        </div>

       </div>
      
    </div>
  )
}

export default SearchPage



// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Cards from '../Components/Cards';

// const SearchPage = () => {
//   const location = useLocation();
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const query = new URLSearchParams(location.search).get('q');
//   const navigate = useNavigate();

//   const fetchData = async (page) => {
//     try {
//       const response = await axios.get("https://api.themoviedb.org/3/search/multi?include_adult=false&language=en-US&page=1'&api_key=7e49a5b542c459979bee442f20168640", {
//         params: {
//           query: query,
//           page: page,
//         },
//       });

//       setData((prev) => [...prev, ...response.data.results]);
//     } catch (error) {
//       console.log('error', error);
//     }
//   };

//   useEffect(() => {
//     setPage(1);
//     setData([]);
//     fetchData(1);
//   }, [query]);

//   useEffect(() => {
//     if (page > 1) {
//       fetchData(page);
//     }
//   }, [page]);

//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
//       setPage((prev) => prev + 1);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="py-16">
//       <div className="lg:hidden my-2 mx-1 sticky top-[80px] z-30">
//         <input
//           type="text"
//           placeholder="Search here..."
//           onChange={(e) => navigate(`/search?q=${e.target.value}`)}
//           className="w-full px-4 py-1 text-lg bg-white rounded-full text-neutral-900"
//         />
//       </div>
//       <div className="container mx-auto">
//         <h2 className="capitalize text-lg lg:text-xl text-white font-semibold my-3">
//           Search Results
//         </h2>
//         <div className="grid grid-cols-[repeat(auto-fit,230px)] justify-center gap-7 lg:justify-start">
//           {data.map((searchData, index) => (
//             <Cards
//               key={searchData.id}
//               item={searchData}
//               index={index}
//               media_type={searchData.media_type}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchPage;


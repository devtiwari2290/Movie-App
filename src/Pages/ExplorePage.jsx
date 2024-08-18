// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import Cards from '../Components/Cards';

// const ExplorePage = () => {
//   const params = useParams();
//   const [pageNo, setPageNo] = useState(1);
//   const [data, setData] = useState([]);
//   const [totalPageNo, setTotalPageNo] = useState(0);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`https://api.themoviedb.org/3/discover/${params.explore}?include_adult=false&include_null_first_air_dates=false&language=en-US&sort_by=popularity.desc&api_key=7e49a5b542c459979bee442f20168640`, {
//         params: {
//           page: pageNo
//         }
//       });

//       setData((prev) => [
//         ...prev,
//         ...response.data.results
//       ]);

//       setTotalPageNo(response.data.total_pages);

//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const handleScroll = () => {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//       setPageNo(prev => prev + 1);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, [pageNo]);

//   useEffect(() => {
//     setPageNo(1);  // Reset to page 1 when explore type changes
//     setData([]);   // Clear previous data
//     fetchData();
//   }, [params.explore]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className='w-full min-h-screen pt-16'>
//       <div className='container mx-auto'>
//         <h1 className='capitalize text-xl font-semibold lg:text-2xl text-white my-2'>
//           Popular {params.explore} Shows
//         </h1>
//         <div className='grid grid-cols-[repeat(auto-fit,220px)] gap-10 justify-center lg:justify-start'>
//           {
//             data.map((exploreData, index) => (
//               <Cards key={exploreData.id}  item={exploreData} index={index} media_type={exploreData.media_type}  />
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExplorePage;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Cards from '../Components/Cards';
// import Cards2 from '../Components/Cards2';

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(0);
  console.log(params)
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/${params.explore}`, {
        params: {
          api_key: "7e49a5b542c459979bee442f20168640",  // Secure the API key with an environment variable
          include_adult: false,
          include_null_first_air_dates: false,
          language: 'en-US',
          sort_by: 'popularity.desc',
          page: pageNo
        }
      });
      console.log(response)
      setData((prev) => [
        ...prev,
        ...response.data.results
      ]);

      setTotalPageNo(response.data.total_pages);

    } catch (error) {
      console.log("error", error);
    }
  };

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && pageNo < totalPageNo) {
      setPageNo(prev => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);  // Properly reset page number when explore type changes
    setData([]);   // Clear the existing data
    fetchData();   // Fetch new data based on the new explore type
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);  // Cleanup the scroll event listener
    };
  }, []);

  return (
    <div className='w-full min-h-screen pt-16'>
      <div className='container mx-auto'>
        <h1 className='capitalize text-xl font-semibold lg:text-2xl text-white my-2'>
          Popular {params.explore} Shows
        </h1>
        <div className='grid grid-cols-[repeat(auto-fit,220px)] gap-10 justify-center lg:justify-start'>
          {
            data.map((exploreData, index) => (
              <Cards key={exploreData.id} item={exploreData} index={index} media_type={params.explore} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;


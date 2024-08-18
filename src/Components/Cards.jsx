// import React from 'react';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

// const Cards = ({ item, trending, index, media_type }) => {
//   // const mediaType = item?.media_type ?? media_type ; // Default to 'tv' as per your API
//   const mediaType = item?.media_type ?? media_type;
//   const imageUrl = item?.poster_path 
//     ? `https://image.tmdb.org/t/p/original/${item?.poster_path}`
//     : (item?.backdrop_path ? `https://image.tmdb.org/t/p/original/${item?.backdrop_path}` : null);

//   return (
//     <Link 
//       to={item?.id ? `/${mediaType}/${item.id}` : media_type === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}`}
//       className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 duration-300 my-2'
//     >
//       {
//         imageUrl ? (
//           <img src={imageUrl} alt={item?.name || item?.title || 'Image not available'} />
//         ) : (
//           <div className='bg-neutral-800 w-full h-full flex items-center justify-center'>
//             <p className='text-white'>No Image Found</p>
//           </div>
//         )
//       }
     
//       {trending && (
//         <div className='absolute top-3 py-1 px-4 backdrop-blur-3xl text-white rounded-r-full bg-black/60 overflow-hidden'>
//           #{index + 1} Trending
//         </div>
//       )}

//       <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 pt-2'>
//         <h2 className='text-ellipsis line-clamp-1 text-base font-semibold text-center text-white'>
//           {item?.name || item?.title || 'Unknown Title'}
//         </h2>
//         <div className='flex items-center justify-between px-2 text-sm text-neutral-400 pt-1'>
//           <p>{moment(item?.first_air_date || item?.release_date).isValid() ? moment(item?.first_air_date || item?.release_date).format('MMM D, YYYY') : 'Unknown Date'}</p>
//           <p className='bg-black px-2 py-1 rounded-md text-xs text-white'>
//             Rating: {Number(item?.vote_average || 0).toFixed(1)}
//           </p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Cards;


import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Cards = ({ item, trending, index, media_type }) => {
  // console.log(media_type);
  
  const mediaType = item?.media_type ?? media_type ;
  // console.log(mediaType);
  
  const imageUrl = item?.poster_path 
    ? `https://image.tmdb.org/t/p/original/${item?.poster_path}`
    : (item?.backdrop_path ? `https://image.tmdb.org/t/p/original/${item?.backdrop_path}` : null);

  return (
    <Link 
      to={`/${mediaType}/${item.id}`}
      className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden block rounded relative hover:scale-105 duration-300 my-2'
    >
      {
        imageUrl ? (
          <img src={imageUrl} alt={item?.name || item?.title || 'Image not available'} />
        ) : (
          <div className='bg-neutral-800 w-full h-full flex items-center justify-center'>
            <p className='text-white'>No Image Found</p>
          </div>
        )
      }

      {trending && (
        <div className='absolute top-3 py-1 px-4 backdrop-blur-3xl text-white rounded-r-full bg-black/60 overflow-hidden'>
          #{index + 1} Trending
        </div>
      )}

      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/60 pt-2'>
        <h2 className='text-ellipsis line-clamp-1 text-base font-semibold text-center text-white'>
          {item?.name || item?.title || 'Unknown Title'}
        </h2>
        <div className='flex items-center justify-between px-2 text-sm text-neutral-400 pt-1'>
          <p>{moment(item?.first_air_date || item?.release_date).isValid() ? moment(item?.first_air_date || item?.release_date).format('MMM D, YYYY') : 'Unknown Date'}</p>
          <p className='bg-black px-2 py-1 rounded-md text-xs text-white'>
            Rating: {Number(item?.vote_average || 0).toFixed(1)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Cards;






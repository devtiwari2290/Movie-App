// import React from 'react';
// import { IoClose } from "react-icons/io5";
// import UsefetchDetails from '../Hooks/UsefetchDetails';

// const VideoPlay = ({data, close, media_type}) => {
//   const { data: videoData } = UsefetchDetails(`/${media_type}/${data?.id}/videos?api_key=7e49a5b542c459979bee442f20168640&language=en-US`);

//   // Get the first video key from the results array, or handle cases where no video is found
//   const videoKey = videoData?.results?.length ? videoData.results[0].key : null;

//   return (
//     <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'> 
//       <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>
//         <button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50'>
//           <IoClose />
//         </button>

//         {videoKey ? (
//           <iframe
//             src={`https://www.youtube.com/embed/${videoKey}`}
//             className='w-full h-full'
//             title='Video Player'
//             allowFullScreen
//           />
//         ) : (
//           <div className='w-full h-full flex justify-center items-center text-white'>
//             No video available
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// export default VideoPlay;



import React from 'react';
import { IoClose } from "react-icons/io5";
import UsefetchDetails from '../Hooks/UsefetchDetails';

const VideoPlay = ({ data, close, media_type }) => {
  // Fetch video details using the correct media type and ID
  const { data: videoData } = UsefetchDetails(`/${media_type}/${data?.id}/videos?api_key=7e49a5b542c459979bee442f20168640&language=en-US`);

  // // Get the first video key from the results array, or handle cases where no video is found
  // const videoKey = videoData?.results?.length ? videoData.results[0].key : null;

  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex justify-center items-center'> 
      <div className='bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative'>
        <button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50 text-white'>
          <IoClose />
        </button>

  
          <iframe
            src={`https://www.youtube.com/embed/${videoData?.results[0]?.key}`}
            className='w-full h-full'
            title='Video Player'
            allowFullScreen
          />

      </div>
    </section>
  );
}

export default VideoPlay;



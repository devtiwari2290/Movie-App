// import React, { useRef } from 'react'
// import Cards from './Cards'
// import { FaAngleRight } from "react-icons/fa6";
// import { FaAngleLeft } from "react-icons/fa6";


// const HorizontalScrollCard = ({ data = [], heading, trending,media_type }) => {
//     const containerRef = useRef()
//     const handleNext = ()=>{
//         containerRef.current.scrollLeft += 300
//     }

//     const handlePrev = () =>{
//         containerRef.current.scrollLeft -= 300
//     }


//     return (
//         <div className='conatiner  mx-auto py-10 px-10 text-white'>
//             <h1 className='text-xl text-white lg:text-2xl font-bold text-white mb-5 capitalize'>{heading}</h1>

//             <div className='relative'>
//                 <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-12 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'>
//                     {
//                         data.map((item, index) => {
//                             return (
                                  
//                                 <Cards key={item.id} item={item} index={index + 1} trending={trending} media_type={media_type}/>

//                             )
//                         })
//                     }
//                 </div>

//                 <div className=' absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
//                     <button onClick={handlePrev} className='text-xl bg-white text-black p-1 rounded-full -ml-2 z-10'><FaAngleLeft /></button>
//                     <button  onClick={handleNext}  className='text-xl bg-white text-black p-1 rounded-full -mr-2 z-10'><FaAngleRight /></button>
//                 </div>

//             </div>

//         </div>
//     )
// }

// export default HorizontalScrollCard




import React, { useRef } from 'react';
import Cards from './Cards';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizontalScrollCard = ({ data = [], heading, trending, media_type }) => {
    const containerRef = useRef(null);

    const handleNext = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 300;
        }
    };

    const handlePrev = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 300;
        }
    };

    return (
        <div className='container mx-auto py-10 px-10 text-white'>
            <h1 className='text-xl lg:text-2xl font-bold text-white mb-5 capitalize'>{heading}</h1>
            <div className='relative'>
                <div
                    ref={containerRef}
                    className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-12 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'
                >
                    {Array.isArray(data) && data.map((item, index) => (
                        <Cards
                            key={item.id}
                            item={item}
                            index={index + 1}
                            trending={trending}
                            media_type={media_type}
                        />
                    ))}
                </div>
                <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
                    <button
                        onClick={handlePrev}
                        className='text-xl bg-white text-black p-1 rounded-full -ml-2 z-10'
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className='text-xl bg-white text-black p-1 rounded-full -mr-2 z-10'
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScrollCard;


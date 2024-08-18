import { AiFillHome } from "react-icons/ai";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";


export const Navigation = [
  {
    label: "Tv Shows",
    href: "tv",
    icon: <PiTelevisionFill/>,
  },

  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay/>,
  },
 
]


export const mobileNavigation = [
  {
    label:"Home",
    href:"/",
    icon: <AiFillHome/>,
  },
  ...Navigation,

  {
    label:"search",
    href:"/search",
    icon: <IoSearchOutline/>,
  }
]

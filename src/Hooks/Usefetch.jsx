import { useEffect, useState } from "react"
import axios from "axios"
const useFetch = (url) =>{

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const fetchData = async() =>{
        try {

          setLoading(true)
          const response = await axios.get(url)
          setLoading(false)
          setData(response.data.results)
          
        } catch (error) {
          console.log("error", error)
          
        }
      }

      useEffect(()=>{
        fetchData()
      }, [url])

    return {data, loading}

}

export default useFetch
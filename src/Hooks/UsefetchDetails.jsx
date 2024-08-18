import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const UsefetchDetails = (url) => {
    console.log(url);
    
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)

    const fetchData = async()=>{
        try {
            setLoading(true)
            const response = await axios.get(url)
            setLoading(false)
            setData(response.data)
        } catch (error) {
            console.log('error',error)
       }
    }

    useEffect(()=>{
        fetchData()
    },[url])

    return { data , loading}
}

export default UsefetchDetails

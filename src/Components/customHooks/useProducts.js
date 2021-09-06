/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
//? React Hooks
import {useState,useEffect} from 'react';


const useProducts = (url) => {
    
    //? intialize state
    const [data,setData] = useState([]) 
    const [loading,setLoading] = useState(true)

    //? Cath Data from API
    const fetchProducts = async() => {
        try {
            const {data}= await axios.get(url).catch(err => console.log(err))
            setData(data)
            setLoading(false)
        
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() =>{
        fetchProducts()
    },[])    

    return {data,loading}

};

export default useProducts;
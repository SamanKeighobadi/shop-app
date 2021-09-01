import axios from 'axios';
import {useState,useEffect} from 'react';


const useProducts = (url) => {
    
    const [data,setData] = useState([]) 
    const [loading,setLoading] = useState(true)

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
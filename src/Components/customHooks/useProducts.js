import {useState,useEffect} from 'react';


const useProducts = (url) => {
    
    const [data,setData] = useState([]) 
    const [loading,setLoading] = useState(true)

    const fetchProducts = async() => {
        try {
            
            setLoading(true)
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
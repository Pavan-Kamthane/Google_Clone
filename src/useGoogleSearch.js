import React, {useState,useEffect} from 'react'
import API_KEY from './Keys'

const CONTEXT_KEY = "9a060b247227afecd"

const useGoogleSearch = (term) => { 
    const [ data,setData] = useState(null);

    //data layer
    useEffect(()=>{
        const fetchData = async() => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
            .then(response => response.json())
            .then(result =>{
                setData(result)
            })
        }

        fetchData();

    },[term])
    return {data};
  
};

export default useGoogleSearch



//This is custom hook

import axios from "axios"
import { useState } from "react"

// estado donde guardaremos la info de la API , si usamos useFetch le pasamos como parametro el URL
const useFetch = (url) => {

    const [response, setResponse] = useState()  
    const [hasError, sethasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res =>{
            setResponse(res.data) 
            sethasError(false)
            })
        .catch(err =>{ 
            console.log(err)
            sethasError(true)      
    })
}

    return [response, getApi, hasError]
}

export default useFetch
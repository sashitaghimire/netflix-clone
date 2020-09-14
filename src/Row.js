import React,{useState,useEffect} from 'react';
import axios from './axios';
import './Row.css';

function Row({title, fetchUrl}) {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        //run oncce hwne the row load and don't run again
        async function fetchData (){
            const request = await axios.get(fetchUrl);
          
            setMovies(request.data.results);
            return request;

        }
        fetchData();

    },[fetchUrl]);
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            {/* title */}
            {/* container -> posters */}
        </div>
    )
}

export default Row

import { useEffect, useState } from "react";
import { moviesApi } from "../../../app/config/movie.api";

const useCompanies = ()=>{
    const[companies, setCompanies]= useState([]);

    useEffect(()=>{

        async function getCompanies(){
            const data = await moviesApi.getCompanies();
            setCompanies(data);

        }
        getCompanies();

    },[])

    return companies;
};

export default useCompanies;
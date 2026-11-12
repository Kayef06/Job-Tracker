import React, { useCallback, useEffect, useState } from 'react'

const API_URL = "http://localhost:3000/jobs"
const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    const [reloadKey,setReloadKey]=useState(0);
    const refresh = useCallback(()=>{
        setReloadKey((current)=>current+1);
    },[])
    useEffect(()=>{
        const controller = new AbortController();
        async function loadJobs() {
            try {
                setLoading(true);
                setError("");
                const response = await fetch(API_URL,{
                    signal: controller.signal
            });
            if(!response.ok){
                throw new Error(`Requst failed:${response.status}`)
            };
            const data = await response.json();
            setJobs(data)
            } catch (error) {
                if(error.name!== "AbortError"){
                    setError(error.message || "Could not load application")
                }
            } finally {
                if(!controller.signal.aborted){
                    setLoading(false)
                }
            }
        }
        loadJobs();

        return ()=> controller.abort();

    },[reloadKey]);

  return {
    jobs,setJobs,loading,error,refresh
  };
}

export default useJobs
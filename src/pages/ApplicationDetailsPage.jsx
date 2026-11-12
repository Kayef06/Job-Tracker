import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {jobsApi} from "../Api/Jobs"

const ApplicationDetailsPage = () => {
    const {id} = useParams();
    const [job,setJob]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");
    useEffect(()=>{
        const controler = new AbortController();
        async function loadJob() {
            try {
                setLoading(true);
                setError("");
                setJob(null);
                const data = await jobsApi.getById(id,controler.signal);
                if(!controler.signal.aborted){
                    setJob(data);
                }
            } catch (error) {
                if(error.name!=="AbortError"){
                    setError(error.message);
                }
            } finally {
                if(!controler.signal.aborted){
                    setLoading(false)
                }
            }
        }
        loadJob();
        return ()=> controler.abort();

    },[id]);
    if(loading){
        return <p> Loading Application Details</p>
    }
    if(error){
        return(
            <section>
            <p role='alert'>{error}</p>
            <Link to="/application">Back to Application Page</Link>
            </section>
        )
    }
    if(!job){
        return(
            <section>
                <h2>Applicatin Not Found</h2>
                <p>Application May Have Been Deleted or the id is Incorrect</p>
                 <Link to="/application">Back to Application Page</Link>
            </section>
        )
    }
  return (
        <section>
            <h2>Application details</h2>
            <div>
                <h3>{job.company}</h3>
                 <p>Role:{job.role}</p>
                 <p>status:{job.status}</p>
                 <p>location:{job.location}</p>
                 <p>appliedOn:{job.appliedOn}</p>
            </div>
                 <Link to="/application">Back to Application Page</Link>
        </section>
)
}

export default ApplicationDetailsPage
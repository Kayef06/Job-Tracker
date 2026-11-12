import React from 'react'
import useJobs from '../Hooks/useJobs';
import SummaryCard from "../components/SummaryCard"
import Pageheader from './Pageheader';

export const Dashboard = () => {
    const {
    jobs,
    loading,
    error,
  } = useJobs();
  if(loading){
   return <p>Loading Dashboard</p>
  }
  if(error){
    return <p role='alert'>{error}</p>
  }
  const totalJobs = jobs.length;
  const appliedJobs = jobs.filter(
    (job) => job.status === "Applied"
  ).length;
  const interviewJobs = jobs.filter(
    (job) => job.status === "Interview"
  ).length;

  return (
    <section>
      <Pageheader title="Document"
       description= "welcome to your job applicatin "/>
      <div className="summary-grid">
        <SummaryCard
          title="Total Applications"
          value={totalJobs}
        />
        <SummaryCard
          title="Applied"
          value={appliedJobs}
        />
        <SummaryCard
          title="Interviews"
          value={interviewJobs}
        />
        
    </div>
    </section>

  )
}

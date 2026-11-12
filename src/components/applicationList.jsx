import React, { useState } from 'react'
import JobCard from './JobCard';

const ApplicationList = ({jobs,onOpen,onEdit,onDelete}) => {
    const [searchText,setSearchText] = useState("");
    const [statusFilter,setStatusFilter] = useState("all");
    const [sortBy,setSortBy] = useState("newest")
    if(jobs == null){
        return <p>No Application Available</p>
    }
    // search and filter
    const query = searchText.trim().toLowerCase();
    const filterJobs = jobs.filter((job)=>{
    const company = job.company?.toLowerCase() ?? "";
    const role = job.role?.toLowerCase() ?? "";
    const matchesText = company.includes(query) || role.includes(query);
    const matchesStatus = statusFilter === "all" || job.status===statusFilter;
    return matchesText && matchesStatus;
        })

//sort
const visibleJobs = [...filterJobs].sort((a,b)=>{
    if(sortBy==="company"){
        return (a.company ?? "").localeCompare(b.company?? "");
    }
    if(sortBy==="oldest"){
        return (a.appliedOn ?? "").localeCompare(b.appliedOn ?? "");
    }

    //default
    return (b.appliedOn ?? "").localeCompare(a.appliedOn ?? "");
}) 
  return (
<section>
    <div>
        <input type="search"
        value={searchText}
        onChange={(event)=> setSearchText(event.target.value)} />
        <select value={statusFilter}
        onChange={(event)=> setStatusFilter(event.target.value)}>
            <option value="all">All Status</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
            <option value="applied">Applied</option>
        </select>
        <select value={sortBy}
        onChange={(event)=> setSortBy(event.target.value)}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="company">A to Z</option>
        </select>
    </div>
    <div>
        {visibleJobs.map((job)=>(
            <JobCard
            key={job.id}
            job={job}
            onOpen={onOpen}
            onEdit={onEdit}
            onDelete={onDelete}
            />
        ))}
    </div>
</section>
    
  )
}

export default ApplicationList
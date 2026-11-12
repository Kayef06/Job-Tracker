import React from 'react'
import StatusBadge from './StatusBadge'

const JobCard = ({job,onOpen,onEdit,onDelete}) => {
const companyName = job.company?.trim() || "Company not provided";
const roleName = job.role?.trim() || " this role not is for u bit"
const location = job.location?.trim() || " just stay your home"
  return (
    <article>
        <div>
            <h2>{companyName}</h2>
            <p>{roleName}</p>
            <p>Location: {location}</p>
            <p>Applied-On: {job.appliedOn || " thambi date varalaiyaa paa"}</p>

        </div>
        <StatusBadge status={job.status}/>
        <button type='button' onClick={()=>onOpen(job.id)}>View </button>
         <button type='button' onClick={()=>onEdit(job.id)}>Edit</button>
          <button type='button' onClick={()=>onDelete(job.id)}>Delete</button>
    </article>
  )
}

export default JobCard 
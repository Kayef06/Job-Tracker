import React from 'react'

const StatusBadge = ({status}) => {
const safeStatus = status || "Unknown"
  return (
    <div> 
        <span className={`status-badge status-${safeStatus.toLowerCase()}`}>{safeStatus}</span>
    </div>
  )
}

export default StatusBadge
import React from 'react'

const SummaryCard = ({title,value=0}) => {
  return (

    <div>
    <p>{title}</p>
    <strong>{value}</strong>
    
    
    </div>
  )
}

export default SummaryCard
import React from 'react'

export default function Pageheader ({title,description}) {
  return (
    <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  );
}

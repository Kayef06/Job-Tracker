import React, { useEffect, useState } from 'react'

export default function useLocalStorage (key,intialvalue) {
    const [value,setValue] = useState(()=>{
        try {
            const sammedValue = localStorage.getItem(key);
            return sammedValue === null
                ? intialvalue 
                : JSON.parse(sammedValue); 
        } catch (error) {
            return intialvalue ;
        }
    });
    useEffect(()=>{
        try {
            localStorage.setItem(key,JSON.stringify(value))
        } catch (error) {
            
        }
    },[key,value]);
    return [value,setValue];

}

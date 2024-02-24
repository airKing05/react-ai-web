import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {
    const navigate = useNavigate();

   useEffect(() => {
    const timer = setTimeout(() => {
        navigate('/')
    }, 500);

     return () => clearTimeout(timer)
   }, [])
   
  return (
    <div>PageNotFound 404</div>
  )
}

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
  // const [data,setData]=useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/kanha037')
  //   .then(response=>response.json())
  //   .then(data=>{
  //     console.log(data);
  //     setData(data);
  //   })
  // },[]) 

  const data=useLoaderData()
  return (
    <div className='bg-gray-600 text-white text-center p-4 m-4 text-2xl'>
      GITHUB INFO <br/>
      <div className='flex justify-center'>Github Photo:
        <img src={data.avatar_url} width={'150px'} className='rounded-full'></img>
        </div>
      Github username :{data.login} <br/>
      Github Name:{data.name} <br/>
      Github id:{data.id}

    </div>

  )
}

export default Github

export const githubInfoLoader= async () => {
  const response= await fetch('https://api.github.com/users/kanha037')
  return response.json()
}
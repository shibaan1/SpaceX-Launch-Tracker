import React from 'react'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const {data , loading , error} = useFetch('https://api.spacexdata.com/v3/launches')

  console.log(data)

  if (loading) return <p>loading....</p>
  if(error) return <p>Erro:{error}</p>
  return (
    <div>
      Home
    
      
    </div>
  )
}

export default Home

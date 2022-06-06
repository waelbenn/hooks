import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Trailler = ({movielist}) => {
  const params = useParams()
  const navigate= useNavigate()
  const goHome=()=>{
    navigate("/")
  }
 console.log('params',params);
   const movie = movielist.find(el => el.id === params.movieID)
  console.log(movielist.map(el=>el.id),params.movieID)
  console.log('movie:',movie);
  return (
    <div>
      {movie.title}
 <p>{movie.description} </p> 
<iframe>{movie.Trailler}</iframe> 
<iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <button onClick={goHome}>home</button>
    </div>
  )
}

export default Trailler
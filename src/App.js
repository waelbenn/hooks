import React, { useState } from 'react'
import ListMovies from './component/ListMovies';
import AddMovie from './component/AddMovie';
import Filter from './component/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup'


import { Rating } from 'react-simple-star-rating'

function App() {
  const [filter,setFilter]=useState("")
  const [rating, setRating] = useState(0) // initial rating value

  const [movieList,setMovieList]=useState([
    
  {
    id:1,
    
    title:"the batman",
  description:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  posterURL:'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2021-10/The%20Batman_0.jpg',
  rating:50
   }
  
  ])
  const handleFilter=(val)=>{
    setFilter(val)
  } 
  const handleAddMovie=(val)=>{
    setMovieList([...movieList,val])
  }
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }
  return (
    <div >
      <Filter handleFilter={handleFilter}/>
      <Rating onClick={handleRating} ratingValue={rating} /* Available Props */ />

      <CardGroup>
      <ListMovies list={movieList.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase())&&((elm.rating)>=(rating)))}/>
      </CardGroup>
      <AddMovie handleAddMovie={handleAddMovie} /> 
      
    </div>
  );
}

export default App;

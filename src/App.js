import React, { useId, useState } from 'react'
import ListMovies from './component/ListMovies';
import AddMovie from './component/AddMovie';
import Filter from './component/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardGroup from 'react-bootstrap/CardGroup'
import Trailler from './component/Trailler';
import { Rating } from 'react-simple-star-rating'
import {Routes,Route} from 'react-router-dom'

import { nanoid } from 'nanoid'



function App() {
  const [filter,setFilter]=useState("")
  const [rating, setRating] = useState(0)

  const [movieList,setMovieList]=useState([
    
  {
  id : useId(),
  title:"the batman",
  description:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  posterURL:'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2021-10/The%20Batman_0.jpg',
  trailer:"https://www.youtube.com/embed/YF1eYbfbH5k",
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
    
  }
  return (
    <div >

     
     <Routes>
       <Route path='/' element={<>
        <Filter handleFilter={handleFilter}/>
      <Rating onClick={handleRating} ratingValue={rating} />

      <CardGroup>
      <ListMovies list={movieList.filter(elm=>elm.title.toUpperCase().includes(filter.toUpperCase())&&((elm.rating)>=(rating)))}/>
      </CardGroup>

      <AddMovie handleAddMovie={handleAddMovie} /> 
       </>}/>
       <Route path="/Trailler/:movieID" element={<Trailler movielist={movieList}/>}></Route>
     </Routes>
    </div>
  );
}

export default App;

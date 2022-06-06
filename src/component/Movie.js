import React from 'react'
import Card from 'react-bootstrap/Card'
import { Rating } from 'react-simple-star-rating'
import {Link} from 'react-router-dom'
import Trailler from './Trailler'

function Movie({movie}) {
  return (
    <div>
       
        <Card>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <Link to={`/Trailler/${movie.id}`}>Trailler</Link>
            
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{movie.rating} </small>
            <Rating  ratingValue={movie.rating} />
          </Card.Footer>
        </Card>
     


    </div>
  )
}

export default Movie
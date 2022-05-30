import React from 'react'
import Card from 'react-bootstrap/Card'
// import CardGroup from 'react-bootstrap/CardGroup'
import { Rating } from 'react-simple-star-rating'

function Movie({movie}) {
  return (
    <div>
       
        <Card>
          <Card.Img variant="top" src={movie.posterURL} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              {movie.description}
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
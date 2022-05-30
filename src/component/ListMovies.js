import React from 'react'
import Movies from './Movie'
function ListMovies({list}) {
  return (
    <div>
     

      {list.length ? list.map(elm=>
        
        <Movies key={elm.id}movie={elm}/>):<h2>Not Found</h2>}
       

    </div>
  )
}

export default ListMovies
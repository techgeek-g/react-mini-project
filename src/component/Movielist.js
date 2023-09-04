import React from 'react'

const Movielist = (props) => {
  return (
    <div className='movie'>
      <img src={props.img} alt=""/>
      <p>{props.title}</p>
      <p>Year:{props.year}</p>
    </div>
  )
}

export default Movielist
import React from 'react'

const Note = ({item}) => {
  return (
    <div className="note">
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  )
}

export default Note
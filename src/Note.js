import React from 'react'

const Note = ({item, deleteItem}) => {
  return (
    <div className="note">
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <button type='button' onClick={() => deleteItem(item.id)}>DELETE</button>
    </div>
  )
}

export default Note
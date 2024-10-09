import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Note = ({item, deleteItem}) => {
  return (
    <div className="note">
      <h1>{item.title}</h1>
      <p>{item.content}</p>
      <button type='button' onClick={() => deleteItem(item.id)}>
        <DeleteIcon />
      </button>
    </div>
  )
}

export default Note
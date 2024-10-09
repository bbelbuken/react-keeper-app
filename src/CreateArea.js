import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';


function CreateArea({ addItem }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(note);
    setNote({title: "", content: ""});
  };

  return (
    <div>
      <form className="create-note" >
        <input
          autoFocus
          required
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
        />
        <textarea
          required
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <Fab onClick={handleSubmit}>
          <AddIcon/>
        </Fab>
      </form>
    </div>
  );
}

export default CreateArea;

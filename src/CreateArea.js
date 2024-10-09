import React from "react";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({ addItem }) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [isClicked, setIsClicked] = useState(false);

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
    setNote({ title: "", content: "" });
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div>
      <form
        className="create-note"
        onSubmit={handleSubmit}
        onClick={handleClick}
      >
        {isClicked && (
          <input
            autoFocus
            required
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        )}

        <textarea
          required
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? 3 : 1}
          value={note.content}
          onChange={handleChange}
        />
        {/* check material ui site... zoom transform... */}
        <Zoom in={isClicked}> 
          <Fab type="submit"> {/* floating action button */}
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

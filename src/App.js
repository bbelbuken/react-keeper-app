import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [id, setId] = useState(1);
  const [noteList, setNoteList] = useState([]);

  const addItem = (title, content) => {
    const newNote = {
      id: id,
      title: title,
      content: content,
    };

    setNoteList((prevNotes) => [...prevNotes, newNote]);
    setId((prevId) => prevId + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(title, content);
    setTitle("");
    setContent("");
  };

  return (
    <div className="App">
      <Header title="Keeper" />
      <CreateArea
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        handleSubmit={handleSubmit}
      />
      {noteList.map((item) => (
        <Note 
          key={item.id}
          item={item} />
      ))}

      <Footer />
    </div>
  );
}

export default App;

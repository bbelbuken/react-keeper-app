import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [noteList, setNoteList] = useState([]);

  const addItem = (note) => {
    const id = noteList.length ? noteList[noteList.length - 1].id + 1 : 1
    const newNote = {id, ...note}
    setNoteList(prevNote => [...prevNote, newNote])
  };

  const deleteItem = (id) => {
    const newDeletedList = noteList.filter(item => item.id !== id)
    setNoteList(newDeletedList)
  }


  return (
    <div className="App">
      <Header title="Keeper" />
      <CreateArea addItem={addItem} />
      {noteList.map((item) => (
        <Note 
          key={item.id}
          item={item}
          deleteItem={deleteItem}          
          />
      ))}

      <Footer />
    </div>
  );
}

export default App;

import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
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
      <Note />
      <Footer />
    </div>
  );
}

export default App;

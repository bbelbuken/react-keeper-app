import React from "react";

function CreateArea({ title, setTitle, content, setContent, handleSubmit}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
            name="title" 
            placeholder="Title" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            
        />
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
            value={content}
            onChange={(e) => setContent(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

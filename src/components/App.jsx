import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arrNote, setArrNote] = useState([]);

  function addNote(contentInfo) {
    setArrNote((prevValue) => {
      return [...prevValue, contentInfo];
    });
  }

  function deleteNote(id) {
    setArrNote((prevValue) => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {arrNote.map((iteam, index) => (
        <Note
          key={index}
          id={index}
          title={iteam.title}
          content={iteam.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

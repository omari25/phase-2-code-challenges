import React, { useState, useEffect } from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [poems, setPoems] = useState([]);
  const [showPoemForm, setShowPoemForm] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8004/poems")
    .then(response => response.json())
    .then((data) => {
      setPoems(data)
    })
  }, [])

  function togglePoemForm() {
    setShowPoemForm(showPoemForm => !showPoemForm) 
  }

  function onAddPoem(newPoem) {
    setPoems([...poems, newPoem])
  }

  function handleDeletePoem(id) {
    const newPoemList = poems.filter((poem) => poem.id !== id)
    setPoems(newPoemList)
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={togglePoemForm}>{showPoemForm ? "Hide Form" : "Show Form"}</button>
        {showPoemForm ? <NewPoemForm onAddPoem={onAddPoem}/> : !showPoemForm}
      </div>
      <PoemsContainer poems={poems} onDeletePoem={handleDeletePoem}/>
    </div>
  );
}

export default App;

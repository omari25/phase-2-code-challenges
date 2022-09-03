import React from "react";
import Poem from "./Poem";

function PoemsContainer({ poems, onDeletePoem }) {

  const poemList = poems.map((poem) => {
      return <Poem key={poem.id} poem={poem} onDeletePoem={onDeletePoem}/>
  })

  return (
    <div className="poems-container">
      {poemList}
    </div>
  );
}

export default PoemsContainer;

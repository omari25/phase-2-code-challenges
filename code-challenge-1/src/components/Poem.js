import React, { useState } from "react";

function Poem({ poem, onDeletePoem }) {

  const {id, title, content, author} = poem;
  const [isRead, setIsRead] = useState(false);

  function toggleIsRead() {
    setIsRead((isRead) => !isRead)
  }

  function deletePoem() {
    fetch(`http://localhost:8004/poems/${id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(() => {
      onDeletePoem(id)
    })
  }

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>
        <strong>- {author}</strong>
      </p>
      <button onClick={toggleIsRead}>{isRead ? "Mark as unread" : "Mark as read"}</button>
      <button onClick={deletePoem} style={{marginLeft: "10px"}} >Delete poem</button>
    </div>
  );
}

export default Poem;

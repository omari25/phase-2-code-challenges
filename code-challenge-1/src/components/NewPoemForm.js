import React, { useState } from "react";

function NewPoemForm({ onAddPoem }) {

  const [formData, setFormData] = useState({
    title: "", content: "", author: "" 
  });

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8004/poems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({title: formData.title, content: formData.content, author: formData.author})
    })
    .then(response => response.json())
    .then(data => {
      onAddPoem(data)
      setFormData({...formData, title: "", content: "", author: ""})
    })
  }

  return (
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input onChange={handleChange} value={formData.title} name="title" placeholder="Title" />
      <input onChange={handleChange} value={formData.author} name="author" placeholder="Author" />
      <textarea onChange={handleChange} value={formData.content} name="content" placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;

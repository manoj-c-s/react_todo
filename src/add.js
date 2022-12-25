import React, { useState } from "react";

function Add({ add }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      add(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div
      className='container my-3'
      style={{ backgroundColor: "rgb(225 249 234)" }}
    >
      <h3>Add a Note</h3>
      <form onSubmit={submit}>
        <div className='mb-3'>
          <label htmlFor='title' className='form-label'>
            Note Title
          </label>
          <input
            type='text'
            className='form-control'
            id='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby='emailHelp'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='desc' className='form-label'>
            Note Description
          </label>
          <input
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className='form-control'
            id='desc'
          />
        </div>
        <button type='submit' className='btn btn-sm btn-success'>
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default Add;

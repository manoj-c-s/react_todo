import React from "react";

function todos({ todo, del }) {
  return (
    <div
      className='card'
      style={{ width: "18rem;", backgroundColor: "rgb(218 255 215)" }}
    >
      <div class='card-header' style={{ backgroundColor: "#baf2cf" }}>
        {todo.sno}-{todo.title}
      </div>
      <div class='card-body'>
        <p class='card-text'>{todo.desc}</p>
        <a
          href='#'
          class='btn btn-danger'
          onClick={() => {
            del(todo);
          }}
        >
          {" "}
          Delete
        </a>
      </div>
    </div>
  );
}

export default todos;

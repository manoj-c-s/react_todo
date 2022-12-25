import React from "react";
import Todos from "./todos";

function todolist(props) {
  return (
    <div className='container'>
      {props.todo.map((td) => {
        return <Todos todo={td} key={td.sno} del={props.del} />;
      })}
    </div>
  );
}

export default todolist;

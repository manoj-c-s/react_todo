import { useState } from "react";
import Add from "./add.js";
import Todolist from "./todolist";
import { useEffect } from "react";

function App() {
  let sno;
  let initTodo;

  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const del = (tds) => {
    console.log("delete", tds);
    setTodo(
      todo.filter((e) => {
        return e !== tds;
      })
    );
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const add = (title, desc) => {
    if (todo.length === 0) {
      sno = 1;
    } else {
      sno = todo[todo.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodo([...todo, mytodo]);
  };
  const [todo, setTodo] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
    <div className='container' >
      <Add add={add} />
      <Todolist todo={todo} del={del} />
    </div>
  );
}

export default App;

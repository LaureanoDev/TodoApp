import React from "react";
import { useMotionValue, Reorder } from "framer-motion";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { GrAlert } from "react-icons/gr";

const TodoItem = ({ todo, removeTodo, completeTodo, importantTodo }) => {
  return (
    <Reorder.Item
      value={todo}
      id={todo}
      className={todo.completed ? "todo-row complete" : "todo-row"}
      style={todo.important ? { background: "#ff0088" } : {}}
    >
      {todo.text}
      <div className="iconsContainer">
        <GrAlert onClick={() => importantTodo(todo.id)} />
        <RiCloseCircleLine
          style={{ marginRight: 5 }}
          onClick={() => removeTodo(todo.id)}
        />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
      </div>
    </Reorder.Item>
  );
};

export default TodoItem;

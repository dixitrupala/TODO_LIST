import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <figcaption>Add Your List Here</figcaption>
        </figure>

        <div className="addItems">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <i
            className="fa fa-plus add-btn"
            onClick={() => dispatch(addTodo(inputData), setInputData(""))}
          ></i>
        </div>

        <div className="showItems">
          {list.map((elem) => {
            return (
              <div className="eachItems" key={elem.id}>
                <h3>{elem.data}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-trash-alt add-btn"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>

          <div>
            <button className="effect" onClick={() => dispatch(removeTodo())}><span>Check List</span></button>
          </div>

      </div>
    </div>
  );
};

export default Todo;

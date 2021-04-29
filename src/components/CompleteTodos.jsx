import React from "react";

export const CompleteTodos = (props) => {
  const { todo, backTodo } = props;
  return (
    <div className="complete-area">
      <p className="title">完了したTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  backTodo(index);
                }}
              >
                戻す
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

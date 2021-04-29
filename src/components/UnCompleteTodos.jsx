import React from "react";

export const UnCompleteTodos = (props) => {
  const { todo, deleteTodo, completeTodo } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul id="incomplete-list">
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => completeTodo(index)}>完了</button>
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

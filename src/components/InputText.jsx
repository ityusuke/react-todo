import React from "react";

export const InputText = (props) => {
  const { inputText, onChange, addTodo } = props;
  return (
    <div className="input-area">
      <input
        id="todo-input"
        type="text"
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChange}
      />
      <button
        id="add-button"
        onClick={() => {
          addTodo();
        }}
      >
        追加
      </button>
    </div>
  );
};

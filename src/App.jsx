import React, { useState } from "react";
import { InputText } from "./components/InputText";
import { UnCompleteTodos } from "./components/UnCompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import "./styles.css";

export const App = () => {
  const [inputText, setInputText] = useState("");
  const [uncompleteTodos, setUncompleteTodos] = useState(["aaea", "aawaaa"]);
  const [completeTodos, setCompleteTodos] = useState(["aaaa", "aaaaa"]);

  const getInputText = (event) => setInputText(event.target.value);

  const addTodo = () => {
    if (inputText === "") return;
    const newTodos = [...uncompleteTodos, inputText];
    setUncompleteTodos(newTodos);
    setInputText("");
  };

  const deleteTodo = (index) => {
    const newTodos = [...uncompleteTodos];
    newTodos.splice(index, 1);
    setUncompleteTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newUnCompleteTodos = [...uncompleteTodos];
    const newCompleteTodos = [...completeTodos, newUnCompleteTodos[index]];
    newUnCompleteTodos.splice(index, 1);

    setUncompleteTodos(newUnCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const backTodo = (index) => {
    const newCompleteTodos = [...completeTodos];
    const newUnCompleteTodos = [...uncompleteTodos, newCompleteTodos[index]];
    newCompleteTodos.splice(index, 1);

    setUncompleteTodos(newUnCompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  return (
    <>
      <InputText
        inputText={inputText}
        onChange={getInputText}
        addTodo={addTodo}
      />
      <UnCompleteTodos
        todo={uncompleteTodos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
      <CompleteTodos todo={completeTodos} backTodo={backTodo} />
    </>
  );
};

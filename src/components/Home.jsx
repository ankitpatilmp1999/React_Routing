import React, { useState } from "react";

const Home = () => {
  const [todoInput, setTodoInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todoInput.trim() !== "") {
      const newTodo = {
        todo: todoInput,
        name: nameInput,
        email: emailInput,
        number: numberInput,
        address: addressInput
      };
      setTodos([...todos, newTodo]);
      setTodoInput("");
      setNameInput("");
      setEmailInput("");
      setNumberInput("");
      setAddressInput("");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            placeholder="Todo"
            name="todoInput"
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Name"
            name="nameInput"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            name="emailInput"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            name="numberInput"
            value={numberInput}
            onChange={(e) => setNumberInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address"
            name="addressInput"
            value={addressInput}
            onChange={(e) => setAddressInput(e.target.value)}
          />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        {todos.map((item, index) => (
          <div key={index}>
            <p>{item.todo}</p>
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.number}</p>
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

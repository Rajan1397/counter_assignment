import React from "react";

const Task = () => {
  const [query, setQuery] = React.useState("");

  return (
    <>
      <h1>Todo List</h1>
      <input placeholder="Add Something" />

      <button>Add todo</button>
    </>
  );
};

import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(1);

  function changeCount(val) {
    setCount(count + val);
  }
  function doubleCounter(val) {
    setCount(val * count);
  }

  //   if (count < 0 || count >= 10) {
  //     return <h1>Counter should be between 0 and 10</h1>;
  //   }

  return (
    <>
      <div>
        <h1>Counter:{count}</h1>
      </div>

      <button onClick={() => changeCount(1)}>Add</button>

      <button onClick={() => changeCount(-1)}>Sub</button>

      <button onClick={() => doubleCounter(2)}>Double</button>
    </>
  );
};

export { Counter };

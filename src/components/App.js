
// import React, { useState, useMemo } from "react";
// import './../styles/App.css';

// const App = () => {
  
//     const [count, setCount] = useState(0);
//     const [todos, setTodos] = useState([]);
//     const calculation = useMemo(() => expensiveCalculation(count), [count]);

//     const increment = () => {
//         setCount((c) => c + 1);
//     };
//     const addTodo = () => {
//         setTodos((t) => [...t, "New Todo"]);
//     };

 

//   return (
//     <div>
//        <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   )
// }

// const expensiveCalculation = (num) => {
//     console.log("Calculating...");
//     for (let i = 0; i < 1000000000; i++) {
//       num += 1;
//     }
//     return num;
// };
// export default App;

import React, { useState, useMemo } from "react";
import './../styles/App.css';

// Functional component for displaying skills
const SkillList = React.memo(({ skills }) => {
  return (
    <div>
     
      <ul id="item-jumbotron">
        {skills.map((skill, index) => (
          <li key={index} id={`skill-&{index}`}>   {skill}</li>
        ))}
      </ul>
    </div>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [skills, setSkills] = useState([]);
  
  // Expensive calculation
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const addSkill = (newSkill) => {
    setSkills((prevSkills) => [...prevSkills, newSkill]);
  };

  return (
    <div id="main">
      <div>
        <h1>React.useMemo</h1>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p id ="todo-${index}" key={index}>{todo}</p>;
        })}
        <button id="add-todo-btn" onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button id="incr-cnt" onClick={increment}>+</button>
        <h2 >Expansive Calculation</h2>
        {calculation}
      </div>
      <hr />
      <div>
        <h2>React.Memo</h2>
        <input type="text" id="skill-input" placeholder="Enter skill" />
        <button id="skill-btn" onClick={() => addSkill(document.getElementById("skill-input").value)}>Add Skill</button>
      </div>
      <SkillList skills={skills} />
    </div>
  );
};

// Expensive calculation function
const expensiveCalculation = (num) => {
  
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default App;

import "./App.css";
import Dashboard from "./Components/Dashboard";
import Nav from "./Components/Nav/Nav";
import { useState } from "react";
import ListeTodo from "./Components/ListeTodo";
import { Routes, Route } from "react-router-dom";
import AddTodo from "./Components/AddTodo";

function App() {
  //----------- Fake Data -----------
  const [job, setJob] = useState([
    { title: "React State", desc:"we are going to create our first class-based component and we are going also to create our first state." ,id: 1, isDone: true },
    { title: "Todo App with react", desc:"we are going to create a movie app where you can present your favorite movies or TV shows. We will also be able to use the react hooks.", id: 2, isDone: true },
    { title: "Movie App with react router", desc:" use the movie app we have created in the previous checkpoint and afterward, we will use the router library to route our views.", id: 3, isDone: false },
  ]);


  const add = (Addtodo) =>{
    setJob([...job,Addtodo])
  }


  return (
    <div className="App">
      <Nav />
        <Routes>

          <Route path="/" element={<Dashboard job={job} />} />
          <Route path="/list" element={<ListeTodo jobs={job} />} />
          <Route path="/add" element={<AddTodo add={add} />} />

        </Routes>
    </div>
  );
}

export default App;

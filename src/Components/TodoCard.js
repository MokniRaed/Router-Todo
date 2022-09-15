import React, { useState } from "react";
import { Link } from "react-router-dom";

const TodoCard = ({  title, isDone }) => {

  
  return (
    <>
    
        <div className="card-holder">
          <div className={isDone ? "card bg-gold" : "card bg-news"}>
            <h1 style={{ fontWeight: "bold" }}> {title}</h1>
          </div>
        </div>
   
    </>
  );
};

export default TodoCard;

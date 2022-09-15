import React from "react";
import {Link } from 'react-router-dom'

import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'> Dashboard</Link>
        </li>
        <li>
        <Link to='/list'> List To Do</Link>
        </li>
        <li>
        <Link to='/add'> Add New Todo</Link>

        </li>
      </ul>
    </div>
  );
};

export default Nav;

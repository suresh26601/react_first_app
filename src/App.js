import Header from "./myComponant/Header";
import Footer from "./myComponant/Footer";
import Todos from "./myComponant/Todos";
import Addtodo from "./myComponant/Addtodo";
import {Login} from "./myComponant/Login";
import {Signup} from "./myComponant/Signup";
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const addTodo = (tsk, des) => {
    let sn;
    if (todos.length == 0) {
      sn = 1
    }
    else {
      sn = todos[todos.length - 1].sno + 1;
    }
    let myTodo = {
      sno: sn,
      task: tsk,
      dscr: des
    };
    settodos([...todos, myTodo]);
  }
  const todoDelete = (todo) => {
    console.log("todo deleting yee vala", todo);
    settodos(todos.filter((e) => {
      return e != todo;
    }));
  }
  const [todos, settodos] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} todoDelete={todoDelete}/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;

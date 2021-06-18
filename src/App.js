import Header from "./myComponant/Header";
import Footer from "./myComponant/Footer";
import Todos from "./myComponant/Todos";
import Addtodo from "./myComponant/Addtodo";
import { Login } from "./myComponant/Login";
import { Signup } from "./myComponant/Signup";
import { useState,useEffect } from 'react';
import 
{BrowserRouter as Router,
  Switch,
  Route,} from "react-router-dom";
// ***main function*********
function App() {

// *****for taking todos from lacalstorage when page reloads********
let storedTodo;
if (localStorage.getItem('todos')===null){
  storedTodo=[];
}
else{
  storedTodo=JSON.parse(localStorage.getItem('todos'))
}

  // ******for adding todo******
  const addTodo = (tsk, des) => {
    let sn;
    if (todos.length === 0) {
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

  
// **********for deleting todo***
  
const todoDelete = (todo) => {
 
   settodos(todos.filter((e) => {
   
   return e !== todo;
    }));
  }

  
// ******stores todos******
  const [todos, settodos] = useState(storedTodo);
  useEffect(() => {localStorage.setItem("todos",JSON.stringify(todos))}, [todos])
  // ******rendering part*****
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home">
            <Header/>
            <Addtodo addTodo={addTodo} />
            <Todos todos={todos} todoDelete={todoDelete} />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Signup />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;

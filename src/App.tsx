import React,{useEffect, useState} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { ItodoArray } from './types/TsTypes';
import "./style/style.scss"
function App() {

    const [toDo,setTodo] = useState<string>("")
    const [todoArray,setTodoArray] = useState<ItodoArray[]>([])
    const addTodo = () =>{

      if(toDo){
        setTodoArray(prevState=>[...prevState,toDo])
        setTodo("")
      }
    }
  return (
    <div className="App">
      <div className="app-container">
     <TodoInput todo={setTodo} todoValue={toDo}/>
     <button onClick={addTodo} >click</button>
     <TodoList todoArray={todoArray} setTodoArray={setTodoArray}/>
      </div>
    </div>
  );
}

export default App;

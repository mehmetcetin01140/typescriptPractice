import React, { useState, useEffect } from 'react'
import { ItodoArray } from '../types/TsTypes'

  interface Iprops {
      todoArray: ItodoArray[];
      setTodoArray : (any)
  }

const ListTodo : React.FC<Iprops> = ({todoArray,setTodoArray}) => {

  return (
    <div className='todo-list-container'>
      {
        todoArray.map((todo:any,index:number) => (
        <div key={index} className="todo-list">
          <h3 key={index}>{todo}</h3>
          <button onClick={()=>setTodoArray(todoArray.filter(item=>todo !== item))}>Delete</button>
        </div>
        ))
      }
     
      </div>
  )
}

export default ListTodo
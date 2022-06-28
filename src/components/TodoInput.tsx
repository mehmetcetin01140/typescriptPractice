

  interface Iprops{
    todoValue : string
    todo : any
  }

const TodoInput : React.FC<Iprops> = ({todo,todoValue}) => {

  return (
    <div className='todo-input-container'>
      <input type="text" placeholder='Add Todo' value={todoValue} onChange={(e)=>todo(e.target.value)} />
      </div>
  )
}
export default TodoInput
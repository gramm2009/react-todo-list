import React, { useEffect } from 'react';
import TodoList from './Todo/TodoList'
import AddTodo from './Todo/AddTodo'
import Context from './context'
import LoaderOne from './Loader'
import Modal from './Modal/Modal'


export default function App() {

  
  
  let mas=[];
  const [todos, setTodos]=React.useState(mas)
  const [load,setLoad]=React.useState(true);
  
  useEffect( () => {
    fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=5' )
      .then( response => response.json() )
      .then( mas => {
        setTimeout( () => {
          setTodos( mas )
          setLoad(false)
        }, 3000 );
      } )
  }, [] )
  
  function toggleTodo( id ) {
    setTodos(
      todos.map( el => {
        if ( el.id === id ) {
          el.completed = !el.completed
        }
        return el
      } ) )
  }
  
  function removeTodo(id){
    setTodos(todos.filter(el=>el.id!==id))
  }
  
  function addTodoNew(title){
    setTodos(todos.concat([{
      title,
      id:Date.now(),
      completed:false
    }]))
  }
  
  return (
    <Context.Provider value={{removeTodo:removeTodo}}>
    <div className='wrapper'>
    <h1>React</h1>
    <Modal />
    <AddTodo onCreateXXX={addTodoNew}/>
      {load && <LoaderOne />} 
    {todos.length? (<TodoList todos={todos} onToggle={toggleTodo}/>) : (load? null :<p>No Todos!</p> )}
       
    </div>
    </Context.Provider>
  );
}

 

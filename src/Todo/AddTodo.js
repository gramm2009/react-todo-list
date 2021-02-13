import React,{useState} from 'react'

export default function AddTodo({onCreateXXX}){ // метод деструктуризации props вытаскиваем сразу значение
   
   const[valueXXX, setValueXXX]=useState('')
   
   function sibmitHandler(event){
      event.preventDefault();
      
      if(valueXXX.trim()){ // Метод trim уберает все пробелы
         
         onCreateXXX(valueXXX)
         setValueXXX('')
      }
   }
   
   return(
      <form onSubmit={sibmitHandler}>
      <input className="input-addtodo" value={valueXXX} onChange={event=>setValueXXX(event.target.value)}></input>
      <button className="btn-addtodo" type="submit">Add todo</button>
      </form>
   )
}
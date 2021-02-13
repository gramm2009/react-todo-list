import React,{useContext} from 'react'
import Context from '../context'

const styles={
   li:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      padding:'.5rem 1rem',
      border:'1px solid #ccc',
      borderRadius:'4px',
      marginBottom: '.5rem'
   },
   input:{
      marginRight: '1rem'
   },
   button:{
      borderRadius:'5px',
      background:'red',
      color:'#fff',
      border:'none'
   }
}

export default function TodoItem(props){
   const {removeTodo}=useContext(Context)
   console.log(props.test);
   let classes=[];
   if(props.test.completed){
      classes.push('done');
   }
   
   return(
      <li style={styles.li}>
         <span className={classes.join(' ')}>
            <input type="checkbox" checked={props.test.completed} style={styles.input} onChange={()=>props.chenge(props.test.id)}></input>
            <strong >{props.index+1}</strong>&nbsp;{props.test.title}
         </span>
         <button onClick={()=>removeTodo(props.test.id)} style={styles.button}>&times;</button>
      </li>
   )
}
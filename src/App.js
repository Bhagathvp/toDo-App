import React from 'react';
import './App.css';
import { useState } from 'react';
function App() {
  const [toDos,setTodos]=useState([]);
  const [toDo,setTodo]=useState('');
  const [remove,setRemove]=useState([]);
  const [tab, setTab] = useState('all');
  let repeat,i=0 ;
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2> 🤖 Add to your list  😎  🤖 </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=> setTodo(e.target.value)} type="text" placeholder="🖊️ Add list item..." />
        <i onClick={(e)=>
        {
          if(toDo){
            toDos.map((obj)=>{
              if (obj.text===toDo) {
                repeat =1
              }
            })
            if (!repeat) {
              setTodos([...toDos,{id:Date.now(), text: toDo, status:false}])} 
            }
          }
        }   className="fas fa-plus" ></i>
      </div>
      <div className="todos">
       { toDos.map((obj)=>{

         return ( 
         <div className="todo">
          <div className="left">
            <input value={obj.status} onChange={(e)=>{
              console.log(e.target.checked);
              console.log(obj); 
              setTodos(toDos.filter(obj2=>{
                if (obj2.id === obj.id) {
                  obj2.status = e.target.checked;
                }
                return obj2;
              }))
            }} type="checkbox" name="" id="" />
            <p style={{display:obj.text.length?'block':'none',textDecoration:obj.status?'line-through':'none'}}
             >{obj.text}</p>
            
          </div>
          <div className="right">
            <i onClick={(e)=>{
              console.log(obj.id);
              setTodos(toDos.filter((obj2)=>{ return obj2.id !== obj.id} ) )
              toDos.filter((obj2)=>{
                if(obj2.id === obj.id){
                  setRemove([...remove,obj2])
                }
              })
              
            }} className="fas fa-times"></i>
          </div>
          </div> );
        
        })}

      </div>
      <br />
      <div className="tabs">
      <button onClick={() => setTab("done")}>Completed</button>
      <button onClick={() => setTab("removed")}>Removed</button>
    </div>

    {tab === "done" && (
      <div className="done">
        <h2>Completed Tasks:</h2>
        {toDos.map((obj) => {
          if (obj.status) { 
            {i++};
            return <h3>{i}.{obj.text}</h3>;
            
          }
          return null;
        })}
      </div>
    )}

    {tab === "removed" && (
      <div className="removed">
        <div style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
          <h2>Removed Tasks:</h2>
        <button className='clear' onClick={(e)=>{setRemove([])}}>clear</button>
        </div>
        
        {remove.map((obj,index) => {
          return <h3>{index+1}.{obj.text}</h3>;
        })}
        
      </div>
    )}
    
    </div>
  );
  

}



export default App;
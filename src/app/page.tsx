"use client"

import { log } from "console";
import { useState } from "react"

export default function Home(){
 // define state
 const [todos, setTodos] = useState([
  {movie: "kgf1", id:1},
  {movie: "dhoom", id:2},
]);
const [inputVal,setInput] = useState("");
const [id,setId] = useState(0);

// function


const addItem =()=>{
 let obj:any =todos.find(item=> item.id ==id)

if(obj){
  let newArray = todos.filter(item => item.id !==obj.id)
  setTodos([...newArray,{movie:inputVal,id:id}])
 setInput("")
setId
return
}

 setTodos([...todos,{movie:inputVal,id:id}])
 setInput("")
setId
}
  function editItem(id: any) {
    let obj: any = todos.find(item => item.id == id);
    setInput(obj.movie);
    setId(obj.id);

  }
const delItem = (id:any)=>{

 let newArray = todos.filter(item => item.id !==id)
  setTodos([...newArray])

}



return(
  <div className ="max-w-4x  mx-auto p-5">
<h1 className="text-center text-[30px] underline">Mudassar Todo App</h1>

{/* startinput div*/}
<div className= "flex justify-between">
<input type="text"
value={inputVal}
onChange={(e)=>setInput(e.target.value)}
className="w-[60%] p-2 ml-3 text-lg border-b focus:outline-none" placeholder="write movie name" />
<input
type="number"
value={id}
onChange={(e:any)=> setId(e.target.value)}
className="w-[20%] p-2 ml-3 text-lg border-b focus:outline-none" placeholder="write id" />
<button onClick={ addItem} className="bg-blue-500 hover:bg-blue-300 w-[20%] text-white p-2 rounded">Add Movie</button>

</div>

{/*end input div*/}

{/*heading*/}
<h1 className="text-center text-[30px] underline mt-5">Short Movie List</h1>




{/*movie list*/}

<div className="grid grid-cols-2 gap-4 mt-5">

{/*grid item*/}
{
todos.map((item: any, i: any)=>{
  return( <div className="shadow p-4" key={i}>
  <div className="flex justify-between text-lg">
<span className="shadow rounded-r-full h-8 w-8  text-center my-auto">{i+1}

</span>
<span onClick={()=>delItem(item.id)} className="shadow rounded-r-full h-8 w-8  text-center my-auto  cursor-pointer text-red-700">X</span>
  </div>
{/*data div*/}
<div className="mt-5 text-[40px] text-gray-700">{item.movie}</div>
<div>
  <h2 onClick={()=>editItem(item.id)}className="text-right cursor-pointer">Edit</h2>
  <h2></h2>
</div>
</div>)
}
)
}
</div>
</div>
)
}

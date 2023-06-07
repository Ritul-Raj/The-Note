import React, { useState } from "react";

import Addingitems from "./ToDoListaddingItems";

function App() {

const[inputList,setInputList]=useState();
const[items,setItems]=useState([]);

function itemEvent(event){                           /// for more understanding see video of thapa to do list
    setInputList(event.target.value);
}
                                                 
function listOFitems(){    
    // if(inputList==""){      
    //     return (alert("Not a Valid Note")) ;
    // }                         
    // setItems( function prevalue(pree){
    //  return [...pree,inputList];
    // })  ;
    // setInputList('');
     
   //  Or
            
    if(inputList==""){      
        return (alert("Empty Note 😪")) ;     //// through this, empty note not add in the array
    }
    const combdata=[...items,inputList];
    setItems(combdata);

     setInputList('');
};

function deleteitems(id){                                //// If not understable then see video of thapa
setItems( function olditems(oldd){
return oldd.filter(function kaluu(arrayelement,index){
    return(index!=id);
})
})
                   
}
return (
<>
<div className="main_div">

<div className="centre_div">
<br/>
<h1>ToDo List 📑</h1>
<br/>

<input type="text" placeholder="Add a Items"  onChange={itemEvent}  value={inputList} />
<button  className="button1" onClick={listOFitems} >+</button>

<ol> 

 {items.map( function ritul(itemkaval,index){ 
        return ( 

            <Addingitems key={index}  id={index} text={itemkaval}  onselect={deleteitems}></Addingitems>
              
             
             )
        
 }) }
</ol>
</div>
</div>



</>
    )

}


export default App;

 

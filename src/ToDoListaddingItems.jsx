import react from "react";


function Addingitems (props){
   
return (  
<>
<div className="todostyle">
<button className="button2" onClick={function ritul (){
  props.onselect(props.id);
}   }>❌</button>
<li>{props.text}</li> 

</div>
</>
  );
}

export default  Addingitems ;
import React,{useState} from "react";
const ClickGame =() =>{
const [start,end] = useState(0);
const [Timeon,Offtime]=useState( )

const Increment=() =>{
    end(start+1)


}
return(
    <div>
        <h1>🎮Click Game</h1>
        <h2>Time: </h2>
         <h2>Score:{start}</h2>
        <button onClick={Increment}>Start Game</button>
    </div>
)

}
export default ClickGame
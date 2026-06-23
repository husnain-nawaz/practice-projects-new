import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



// const myelement = (
//   <table>
//     <tr>
//       <th>Name</th>
//     </tr>
//     <tr>
//       <td>John</td>
//     </tr>
//     <tr>
//       <td>Elsa</td>
//     </tr>
//   </table>
// );

// createRoot(document.getElementById('root')).render(
//   myelement
// )



// import { createRoot } from 'react-dom/client'

// createRoot(document.getElementById('sandy')).render(
//   <p>Welcome!</p>
// ) 



// import { createRoot, useState } from 'react-dom/client'

// function Counter() {
//   // Destructuring the array returned by useState
//   const [count, setCount] = useState(0);
  
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Count: {count}
//     </button>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Counter />
// );






// function Football() {
//   const shoot = (a, b) => {
//     alert(b.type);

//   }

//   return (
//     <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <Football />
// )







// import { useState } from 'react'

// function MyForm() {
//   const [name, setName] = useState("hussnain");
// function handleChange(e) {
//   setName(e.target.value);
// }
//   return (
//     <form>
//       <label>Enter your name:
//         <input type="text" onChange={handleChange} value={name} />


//       </label>
//       <p>Current value: {name}</p>
//     </form>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <MyForm />
// );




// import { useState } from 'react'
// function MyForm(){
//   const[name, setName] = useState("");

//   function handlechange(e){
//     setName(e.target.value);
//   }
//   function handlesubmit(e){
//     e.preventDefault();
//     alert(name);
//   }
//   return(
//     <form onSubmit={handlesubmit}>
//       <label> Enter Your Name:
//       <input type="text" value={name} onChange={handlechange} />
//       </label>
//       <input type="submit" />
//     </form>
//   )}

// createRoot(document.getElementById("root")).render(
//   <MyForm/>
// )



// import { useState } from 'react'
// function Myform(){
//   const [mytxt, setMytxt] = useState("");
//   function handleChange(e){
//     setMytxt(e.target.value);
//   }
//   function handlesubmit(e){
//     setMytxt(e.target.value);
//     // e.preventDefault(); // ya bas refresh hony sy bacjata ha code ko or page ko baki is ka koi kaam nahi - onsubit ma wasiy  is ki zaroorat nahi ha 
//     alert(mytxt)
//   }
//   return(
//     <form onSubmit={handlesubmit}>
//       <label>Write Here: 
//         <textarea value={mytxt} onChange={handleChange}></textarea>
//       </label>
//       <p>Current Value: {mytxt}</p>
//       <input type="submit" />
//     </form>
//   )}

//   createRoot(document.getElementById('root')).render(
//     <Myform/>
//   )



// function Myform(){
//   const [mycar, setmycar] = useState("Volvo");

//   const handlechnage = (event) =>{
//     setmycar(event.target.value)
//   }

//   return(
//     <form>
//       <select value={mycar} onChange={handlechnage}>
//     <option value="Ford">FOrd</option>
//     <option value="Volvo">Volvo</option>
//     <option value="Fiat">Fiat</option>
//     <option value="Toyota">Toyota</option>
//     </select>
//     </form>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Myform/>
// )



// function Myform(){
//   const [inputs, setInputs] = useState({});
//   const handlechange = (e)=>{
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs(values => ({...values,[name]: value}))
//   }
//   return (
//     <form>
//       <label>First Name: 
//         <input type="text" name='firstname' value={inputs.firstname} onChange={handlechange} />
//       </label>
//       <label>LastName: 
//         <input type="text" name='lastname' value={inputs.lastname} onChange={handlechange} />
//       </label>
//     <p>Current Vlaues: {inputs.firstname} {inputs.lastname}</p>
//     </form>
//   )
// }
// createRoot(document.getElementById('root')).render(
//   <Myform/>
// )




// function Myform(){
//   const [inputs, setInputs] = useState({
//     firstname: "husnian saab",
//     lastname: "nawaz g the great"
//   });

//   const handlechange =  (e)=>{
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputs(values => ({...values, [name]: value}))
//   }
//   function handlesubmit(e){
//     e.target.value
//     alert(inputs.firstname+" "+inputs.lastname)
//   }
//   return(
//     <form onSubmit={handlesubmit}>
//       <label>
//         First name:
//         <input type="text"  name='firstname' value={inputs.firstname} onChange={handlechange} />
//       </label>
//         <label>
//         First name:
//         <input type="text"  name='lastname' value={inputs.lastname} onChange={handlechange} />
//       </label>
//       <p>values are: {inputs.firstname} {inputs.lastname}</p>
//       <input type="submit" />
//     </form>
// )}
// createRoot(document.getElementById("root")).render(
//   <Myform/>
// )



// function Myform(){
//     const [inputs, setInputs] = useState({
//         firstname: "",
//         tomato: false,        
//         onion: false,
//     });
//     const handlechange = (e)=>{
//         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//         const name = e.target.name;
//         setInputs(values => ({...values, [name]: value}))
//     }
//     const handleSubmit = (event) => {
//         let filling = '';
//         if(inputs.tomato) filling+='tomato';
//         if(inputs.onion){
//             if(inputs.tomato) filling += " and ";
//             filling += "onion";
//         }
//         if(filling == "") filling = "no filling";
//         alert(`${inputs.firstname} wants a burger with ${filling}`)
//         event.preventDefault();
//     };
//     return(
//         <form onSubmit = {handleSubmit}>
//             <label>
//                 My name is:
//                 <input type='text' name='firstname' value={inputs.firstname} onChange={handlechange}></input>
//             </label>
//             <p>I want a burger with: </p>
//             <label>
//                 Tomato:
//                 <input type="checkbox" name='tomato' checked={inputs.tomato} onChange={handlechange} />
//             </label>
//             <label>
//                 Onion:
//                 <input type="checkbox" name='onion' checked = {inputs.onion} onChange={handlechange} />
//             </label>
//             <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
//         </form>
//     )
// }

// createRoot(document.getElementById('root')).render(
//     <Myform/>
// )



// function Myform(){
//     const [inputs,setInputs] = useState({
//         firstname: "",
//         tomato : false,
//         onion : false, // true karny sy bluetick lag jaye ga
//     })
//     const handlechange = (e) => {
//         const value = e.target.type === "checkbox" ?  e.target.checked : e.target.value;
//         const name = e.target.name;
//         setInputs(values => ({...values, [name]: value}));
//     }
//     const handlesubmit = (event) => {
//         let filling = "";
//         if(inputs.tomato) filling+="tomato"; 
//         if(inputs.onion){
//             if(inputs.tomato) filling += " add ";
//             filling += "onion"
//         }
//         if(filling === "") filling="no filling";
//         alert(`${inputs.firstname} wanst a burger with ${filling}`)
//         event.preventDefault();
//     }
//     return (
//         <form onSubmit={handlesubmit}>
//             <label>
//                 My name is:
//                 <input type="text" name='firstname' value={inputs.firstname} onChange={handlechange} />
//             </label>
//             <p>I want a burger with: </p>
//             <label>
//                 Tomato:
//                 <input type="checkbox" name='tomato' checked={inputs.tomato} onChange={handlechange} />
//             </label>
//             <label>
//                 Onion:
//                 <input type="checkbox" name="onion" checked={inputs.onion} onChange={handlechange} />
//             </label>
//             <button type='submit'>submit</button>
//         </form>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <Myform/>
// )



// function Myform(){
//     const [selectedfruit, setselectedfruit] = useState("mango");
//     const handlechnage = (event) =>{
//         setselectedfruit(event.target.value);
//     }
//     const handlesubmit = (event)=>{
//         alert(`Your Favourite fruit is: ${selectedfruit}`);
//         event.preventDefault();
//     }
//     return(
//         <form onSubmit={handlesubmit}>
//             <p>Select Your favourite fruit: </p>
//             <label>
//                 <input type="radio" name='fruit' value="apple" checked={selectedfruit==="apple"} onChange={handlechnage} />
//                 Apple
//             </label>
//             <br />
//             <label>
//                 <input type="radio" name='fruit' value="banana" checked={selectedfruit==="banana"} onChange={handlechnage} />
//                 banana
//             </label>
//             <br />
//             <label>
//                 <input type="radio" name='fruit' value="mango" checked={selectedfruit==="mango"} onChange={handlechnage} />
//                 mango
//             </label>        
//             <br />
//             <button type="submit">submit</button>
//         </form>
//     )
// }

// createRoot(document.getElementById('root')).render(
//     <Myform/>
// )



// import { createPortal } from 'react-dom'

// function mychild(){
//     return createPortal(
//         <div>
//             Welcome
//         </div>,
//         document.body
//     )
// }


// function App() {
//   return (
//     <div style={{
//       width: "200px",
//       height: "100px",
//       overflow: "hidden",
//       border: "2px solid black"
//     }}>
//       <h3>My App</h3>

//       <div style={{
//         width: "300px",
//         height: "150px",
//         background: "yellow"
//       }}>
//         Modal
//       </div>
//     </div>
//   );
// }




function Model({isopen,onclose,children}){
    if(!isopen){
        return null;
    }
    else{
    return(
        <div>
            {children}
            <button onClick={onclose}>close</button>
        </div>
    )}
}
function MyApp(){
    const [isopen, setisopen] = useState(false);
    return(
        <div>
            <button onClick={()=>setisopen(true)}>OPEN</button>
            <Model isopen={isopen} onclose={()=>setisopen(false)}>
                <p>model content</p>
            </Model>
        </div>
    )
}

createRoot(document.getElementById('root')).render(
  <MyApp />
)























// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

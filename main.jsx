import {useTransition, StrictMode, useState, useRef, forwardRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import _App from './App.jsx'
import { BrowserRouter, Route, NavLink, Routes, Link, Outlet, useParams } from 'react-router-dom'





// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <_App />
//   </StrictMode>,
// )













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




// function Model({isopen,onclose,children}){
//     if(!isopen){
//         return null;
//     }
//     else{
//     return(
//         <div>
//             {children}
//             <button onClick={onclose}>close</button>
//         </div>
//     )}
// }
// function MyApp(){
//     const [isopen, setisopen] = useState(false);
//     return(
//         <div>
//             <button onClick={()=>setisopen(true)}>OPEN</button>
//             <Model isopen={isopen} onclose={()=>setisopen(false)}>
//                 <p>model content</p>
//             </Model>
//         </div>
//     )
// }

// createRoot(document.getElementById('root')).render(
//   <MyApp />
// )





// function MyCar() {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red"
//   });

//   const updateColor = () => {
//     setCar(previousState => {
//       return { ...previousState, color: "blue" }
//     });
//   }

//   return (
//     <>
//       <h1>My {car.brand}</h1>
//       <p>
//         It is a {car.color} {car.model} from {car.year}.
//       </p>
//       <button
//         type="button"
//         onClick={updateColor}
//       >Blue</button>
//     </>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <MyCar />
// );



// function kwtohp(kw){
//     return kw * 10;
// }
// function Car(){
//     return (
//         <p>{kwtohp(5)}</p>
//     )
// }

// createRoot(document.getElementById("root")).render(
//     <Car />
// )




// function Car(){
//     const myobj = {
//         name: "Fiat",
//         model: "500",
//         color: "white"
//     }
//     return(
//         <>
//         <h1>My car is {myobj.color} {myobj.name} {myobj.model}</h1>
//         </>
//     )
// }

// createRoot(document.getElementById("root")).render(
//     <Car />
// )



// function Car(){
//     return (
//         <h1 className='myclass1'>Hello Husnain</h1>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <Car/>
// )


// function Car(){
//     const x = "myclass";
//     return(
//         <h1 className={x}>Hello World</h1>
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <Car/>
// )




// function Car(){
//     const myfunc = ()=>{
//         alert('Hello Husnian');
//     };
//     return(
//         <button onClick={myfunc}>Click Me</button>
//     )
// }





// function Car(){
//     const myfunc = ()=>{
//         alert("Hello world");
//     }
//     return(
//         <button onClick={myfunc} disabled = {false}>Click Me</button> // flase matlab chaly ga - true matlab disbale kr do or wo ab nahi chly ga
//     )
// }
// createRoot(document.getElementById('root')).render(
//     <App/>
// )



// function Car(){
//     const mystyles = {
//         color: "red",
//         fontSize: "20px",
//         backgroundColor: "brown",
//     }
//     return (
//         <h1 style={mystyles}>My Car</h1>
//     )
// }
// createRoot(document.getElementById("root")).render(
//     <Car/>
// )




// function Fruit(){
//     const x=5;
//     let y = "Apple";
//     if(x<10){
//         y="banana";
//     }
//     return(
//         <h1>{y}</h1>
//     )
// }



// function Fruit(){
//     const x = 5;
//     return(
//         <h1>{(x)<10?"bannana":"Apple"}</h1>
//     )
// }
// createRoot(document.getElementById("root")).render(
//     <Fruit />
// )



// function Car(){
//     return <h2>I am a Car!</h2>
// }
// function Garage(){
//     return(
//         <>
//         <h1>Who lives in my Garage?</h1>
//         {/* ya car uper function vali Car ha */}
//         <Car /> 
//         </>
//     )
// }
// createRoot(document.getElementById("root")).render(
//     <Garage />
// )




// function Car(props){
//     return <h2>I am a {props.brand}</h2>
// }
// function Garage(){
//     return (
//         <>
//         <h1>Who live in garage?</h1>
//         <Car brand = "Ford" />
//         <Car brand = "BMW" />
//         </>
//     )
// }
// createRoot(document.getElementById("root")).render(
//     <Garage />
// )




// import Car from "./Vehicle.jsx"
// createRoot(document.getElementById("root")).render(
//     <Car />
// )



// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <nav>
//         <Link to="/">Home</Link> |
//         <Link to="/about">About</Link> | 
//         <Link to="/contact">Contact</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// createRoot(document.getElementById('root')).render(
//   <App />
// );




             

// function Home(){
//     return <h1>Home</h1>
// }
// function Products(){
//     return (
//     <div>
//         <Outlet />
//     <div>---------</div>
//         <nav className='mb-1'>
//             <Link to='/products/car'>Cars</Link>
//             <Link to='/products/bike'>Bikes</Link>
//         </nav>
//     </div>
// )}
// function CarProducts(){
//     return <h1>Car function</h1>
// }
// function BikeProducts(){
//     return <h1>Bike function</h1>
// }
// function Contact(){
//     return <h1>Contact Page</h1>
// }

// function App(){
//     return(
//         <BrowserRouter>
//             <nav>
//                 <Link to='/'>Home</Link>
//                 <Link to='/products'>Products</Link>
//                 <Link to='/contact'>Contact</Link>
//             </nav>
//             <Routes>
//                 <Route path='/' element={<Home />} />
//                 <Route path='/products' element={<Products />}>
//                     <Route  path='car' element={<CarProducts />} />
//                     <Route path='/products/bike' element={<BikeProducts />} />
//                 </Route>
//                 <Route path='/contact' element={<Contact />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );





// const NavLinkstyles = ({isActive})=>({
//     color: isActive ? '#007bff' : '#333',
//   textDecoration: isActive ? 'none' : 'underline',
//   fontWeight: isActive ? 'bold' : 'normal',
//   padding: '5px 10px'
// });
// function Home(){
//     return <h1>Home Page</h1>
// }
// function About(){
//     return <h1>ABout Page</h1>
// }
// function Contact(){
//     return <h1>Contact Page</h1>
// }
// function App(){
//     return(
//     <BrowserRouter>
//         <nav className='mb-5'>
//             <NavLink style={NavLinkstyles} to="/">Home</NavLink>
//             <NavLink style={NavLinkstyles} to="/about">About</NavLink>
//             <NavLink style={NavLinkstyles} to="/contact">Contact</NavLink>
//         </nav>
//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/contact' element={<contact />} />
//         </Routes>
//     </BrowserRouter>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );





// function Info(){
//     const {firstname} = useParams();
//     return <h1>Hello {firstname}</h1>
// }
// function App(){
//     return(
//         <BrowserRouter>
//             <nav>
//                 <Link to="customer/Husnain">Husnain</Link>
//                 <Link to="customer/Nawaz">Nawaz</Link>
//                 <Link to="customer/Chodary">Chodary</Link>
//             </nav>
//             <Routes>
//                 <Route path='/customer/:firstname' element={<Info />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );





// function SearchBar(){
//     const [text, settext] = useState("");
//     const [result, setresult] = useState("");
//     const [ispending, startTransition] = useTransition(); // initial transition value false ha jo ky ja rahi ha ispending ma
//     // jab transition chalti ha to wo start kr daita ha ispending automatically true or jab transition nahi chati ispending false khud ba khud - or true tab hot aha jab inpput ma kuxh add ka
//     const handleChange = (e)=>{
//         // urgent input
//         settext(e.target.value);
//         startTransition(()=>{
//         // non-urgent input
//         // for(let i=0; i<1000000000; i++) {} // ya bohat ziada load ly raha ha page ka is waja sy delay ho raha jo b input ma likh rhy ham
//         setresult(e.target.value)
//     })
// }
//     return(
//         <div>
//             <input type="text" value={text} onChange={handleChange} className='border' />
//             {ispending ? (
//                 <p>Loading....</p>
//             ) : (
//                 <p>Search Result: {result} </p>
//             )}
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <SearchBar />
// );






// function SearchResults({searchKeyword}){
//     const items = [];
//     if(searchKeyword){
//         for(let i=0; i<300; i++){
//             items.push(
//                 <li key={i}>
//                     Result for {searchKeyword} - {i}
//                 </li>
//             )
//         }
//     }
//     return <ul>{items}</ul>
// }
// function App(){
//     const [input, setInput] = useState('');
//     const [query, setquery] = useState('');
//     const [isPending, startTransition] = useTransition();

//     const handleChange = (e)=>{
//         // urgent update
//         setInput(e.target.value)
//         // No urgent
//         startTransition(()=>{
//             setquery(e.target.value)
//         })
//     }
//     return(
//         <div>
//             <input type="text" value={input} onChange={handleChange} placeholder='Search...' />
//             {
//                 isPending && <p>Loading Sir....</p>
//             }
//             <SearchResults searchKeyword={query} />
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );




// const MyInput = forwardRef((props, ref)=>(
//     <input ref={ref} {...props} />
// ));
// function App(){
//     const inputRef = useRef();
//     const focusInput = ()=>{
//         inputRef.current.focus();
//     }
//     return(
//         <div>
//             <MyInput className="border" ref={inputRef} placeholder="Type here..." />
//             <button className='bg-amber-300' onClick={focusInput}>Focus Input</button>
//         </div>
//     )
// }
// createRoot(document.getElementById('root')).render(
//   <App />
// );




function Myform(){
    const [value1, setvalue1] = useState("");
    const [value2, setvalue2] = useState("");
    const [calculate, setcalculate] = useState("");
    const handlechange1 = (e)=>{
        setvalue1(e.target.value);
    }
    const handlechange2 = (e)=>{
        setvalue2(e.target.value);
    }    
    const handlesubmit = (e)=>{
        let result=0;
        console.log(calculate , "uiiuiui")
        if(calculate==="+"){
            result = Number(value1)+Number(value2);
        }
        else if(calculate==="-"){
            result = Number(value1)-Number(value2)
        }
        else if(calculate==='*'){
            result = Number(value1)*Number(value2)
        }
        else if(calculate==="/"){
            result = Number(value1)/Number(value2);
        }
        else{
            alert("Wrong inputs")
        }
        alert(result);
    }
    return (
        <form onSubmit={handlesubmit}>
            <input className="border bg-amber-200" type="text" name={value1} onChange={handlechange1} />
            <input className="border bg-amber-200" type="text" name={value2} onChange={handlechange2} />
            <p className='bg-blue-400'>value is : {value1}</p>
            <p className='bg-blue-400'>value is : {value2}</p>
            <button onClick={()=>setcalculate("+")} type='button' className='border bg-amber-400 p-6'>+</button>
            <button onClick={()=>setcalculate("-")} type='button' className='border bg-amber-400 p-6'>-</button>
            <button onClick={()=>setcalculate("*")} type='button' className='border bg-amber-400 p-6'>*</button>
            <button onClick={()=>setcalculate("/")} type='button' className='border bg-amber-400 p-6'>/</button>
            <button type="submit" className='border bg-emerald-500 p-6'>Submit</button>
        </form>
    )
}
createRoot(document.getElementById('root')).render(
  <Myform />
);
















































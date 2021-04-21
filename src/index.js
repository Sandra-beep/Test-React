import ReactDOM from 'react-dom';

// // Välj vilken typ av "hook" du ska ha:
// import React, { Component } from 'react';
import React, { useState } from 'react';
// import React from 'react';

// // Välj stylesheet
import './index.css';

// // Välj vilka andra sidor du behöver:
// import App from './App';
// import reportWebVitals from './reportWebVitals';


// // Variblar:

// let city = "Madrid";

// let stad = {
//   namn: "Madrid",
//   land:"Spanien",
// }


// // Funktioner:
// Test funktion
// function Hello() {
//   return <h1>Välkommen till React!</h1>
// }

// // Kan också lägga allt i return:
// function Hello(){ //Alltid stort bokstav och med ()
//   return (
//     <div>
//       <h1 id ="rubrik" >
//         Städer och deras länder:
//       </h1>

//       <h3 className = "brod-text">
//         {stad.namn} ligger i {stad.land}
//       </h3>
//     </div>
//   )
// }

// // MED PROPS:
// function Hello (props){
//   console.log(props); //Kolla resultat i console, cmd-alt-j
//   return (
//     <div>
//       <h1>Välkommen Sandra till {props.library}</h1>
//       <p>{props.message}</p>
//       <p>Lyckade försök: {props.number}</p>
//     </div>
//   )
// }

// // UTAN PROPS
// function Hello ( {library, message, number} ){
//   return (
//     <div>
//       <h1>Välkommen Sandra till {library}</h1>
//       <p>{message}</p>
//       <p>Lyckade försök: {number}</p>
//     </div>
//   )
// }

// // COMPONENTS:
// function Lake( {name} ){ //Vid borttagning av props, lägg till {}
//   return (
//     <h1>{name}</h1>
//   )
// }

// function App(){
//   return (
//   <div>
//     <Lake name = "Lake Tahoe"/>
//     <Lake name = "Angora Lake"/>
//     <Lake name = "Lake Titicaca"/>
//   </div>
//   );
// }


// // RENDERING LISTS:

// const lakeList = [
//   "En Sjö",
//   "En till sjö",
//   "En tredje sjö"
// ];

// function App( {lakes} ){
//     return (
//     <ul>
//       {lakes.map(lake => 
//       ( <li>{lake}</li> )
//       )}
//     </ul>
//     );
//   }


  // // RENDERING LISTS OF OBJECT:

  // const lakeList = [
  //   {id:"1", name: "Echo", trailhead: "Ojones"},
  //   {id:"2", name: "Omega", trailhead: "Three"},
  //   {id:"3", name: "Alfa", trailhead: "Male"},
  // ];
  
  // function App( {lakes} ){
  //     return (
  //     <div key = {lake.id}> //key = {lake.id} , en key!
  //       { lakes.map ( lake=> (
  //       <div>
  //         <h2>{ lake.name }</h2>
  //         <p>Accessed by: { lake.trailhead }</p>
  //       </div>
  //       ))}
  //     </div>
  //     );
  //   }

  // // ADDING KEYS:

  // const list = [1, 2, 3, 4, 5];

  // function App ( {items} ){
  //   return(
  //     <ul>
  //       { items.map ( item => (
  //         <li key = {item.toString()} > {item}</li> //key =, Här är nyckeln!
  //       ))}
  //     </ul>
  //   );
  // }


  // // CONDITIONAL RENDERING
  // function Sjo(){
  //   return (
  //     <div>
  //       <h1>Besök Lögarängen för sommarens bästa bad!</h1>
  //     </div>
  //   );
  // }

  // function Vallby(){
  //   return (
  //     <div>
  //       <h1>Kom och åk skidor i Vallby!</h1>
  //     </div>
  //   );
  // }


  // // FRAGMENT (För att visa båda samtidigt, ha igång function Sjo och Vallby):
  // function App(){
  //   return (
  //     <> //detta är en fragment!
  //       <Sjo/>
  //       <Vallby/>
  //     </>
  //   )

  // }

  // // IF ELSE (ha igång function Sjo och Vallby):
  // function App( props ){
  //   if ( props.season === "sommar"){
  //     return <Sjo />
  //   } else if (props.season === "vinter"){
  //     return <Vallby />
  //   } else {
  //     return <h1>Kom tillbaka på vintern eller sommaren!</h1>
  //   }
  // }

// // USE STATE/useState
function App(){
  const [year, setYear] = useState(2021)
  const[manager, setManager] = useState("Sandra");
  const [status, setStatus] = useState("Welcome, push a button to change status!") //"Welcome(...)" är default text som syns varje gång websidan startas
  
  return (
    <div className = "container">
      <div>
        <h2>{year}</h2>
        <button onClick = {()=> setYear(year +1)}>
          Öka året!
        </button>
        <button onClick = {()=> setYear(year -1)}>
          Minska året!
        </button>
        <h1>Da boss: {manager}</h1>
        <button onClick = {()=> setManager("Carlos")}>
          Byt chef!
        </button>
        <button onClick = {()=> setManager("Sandra")}>
          Byt tillbaka!
        </button>
      </div>

      <h4>Status:</h4> 
      <p>{status}</p>

      <button onClick={()=> setStatus("Now it's open!")}>
      Open
      </button>

      <button onClick={()=> setStatus("Back in 5 ;)")}>
      Break
      </button>

      <button onClick={()=> setStatus("Sorry, we are closed, come back another time!")}>
      Closed
      </button>
    </div>
  )
}
    



ReactDOM.render(

  <App/>,

  //---------------------Testat:------------------------------
  // //Fanns först:
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,


  //1.stil, 2.egenskap, 3. string
  // React.createElement("h2", {style:{color:"darkblue"}}, "Hej Sandra"),

  // React.createElement("div", {style:{color:"darkblue"}}, "Hej Sandra"),


    // React.createElement(
    //   "ul",
    //   {style:{color:"blue"}},
    //   React.createElement("li", null, "min första lista")
    // ),

    // //Testar att göra en lista:
    // React.createElement(
    //   "ul",
    //   {style:{color:"blue"}},
    //   React.createElement("li", null, "Korv"),
    //   React.createElement("li", null, "Hamburgare"),
    //   React.createElement("li", null, "Pizza")
    // ),

    // // Man kan skapa en vanlig lista direkt:
    // <ul>
    //   <li>Korv</li>
    //   <li>Hamburgare</li>
    //   <li>Pizza</li>
    // </ul>, //glöm inte att avsluta med kommatecken ","

    // // Testar ett variabel:
    // <h1>
    //  Skulle vara coolt att bo i {city}! //Sätt även igång let city i varibellistan!!
    // </h1>,
    
    // // Flera grejer i en div:
    // <div>
    //   <h1 id ="rubrik" >
    //     Huvudstäder och deras länder:
    //   </h1>

    //   <h3 className = "brod-text">
    //     {stad.namn} ligger i {stad.land}
    //   </h3>
    // </div>,


    // // Testar en funktion:
    // <Hello></Hello>,//Kan inte ha igång samma funktion samtidigt?
    // <Hello></Hello> //samma som:
    // <Hello />,

    // // PROPS //Här kommer strings/info:
    // <Hello 
    // library="React" 
    // message="Ha så kul och försök att testa mycket!" 
    // number={10}
    // />,

    // // RENDERING LISTS (hämtar det som finns i lakeList)
    // <App lakes = { lakeList } />,  

    // //CONDITIONAL RENDERING (testa sommar, vinter istället för höst)
    // <App season = "höst" />, 


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// //Fanns först:
// reportWebVitals();

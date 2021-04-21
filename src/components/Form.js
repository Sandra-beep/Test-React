import React, { useState } from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";

function Form(){

    // detta är en state
    const [name, setName] = useState/("Användare")

    const [email, setEmail] = useState/("Email")

    //när man lägger till något
    function handleSubmit(event){
        event.preventDefault(); // Prevent refresh 
        console.log(event);
    }

    // När man ändrar något i form
    function handleOnChange(event) {
        console.log(event);
    }
}

// Lagt in funktionerna i {}
return (
    <>


    <form onSubmit ={handleSubmit}>
        <input name = "name" placeholder = "Enter your name" value = "default"
        onChange={handleOnChange}   // I value kan man lägga in en funktion
        ></input>
    

        <input name = "email" placeholder = "Enter your email" value = "default" onChange={handleOnChange}></input>


        <button>Send</button>

    </form>



    {/* Som endpoints i php */}
    <BrowserRouter>

    <Route path="/" exact component = {Card}/>
    <Route path="/home" exact component = {Menu}/>

    <Link to ="/Card"> Card  </Link>
    <Link to ="/home"> Menu </Link>

    
    </BrowserRouter>




    </>
)

export default form;
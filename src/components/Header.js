import React from 'react';
import { BrowserRouter, 
    Route, Switch, NavLink } from 'react-router-dom'

function Header(props){
    return(
        <header className="App-header">
        {//TODO: göra egen hamburgaren istället för font-awesome om vi ändå bara ska ha hamburgaren?
        }
        <i class="fas fa-bars" onClick={props.toggleMenu}></i>
        <p>{props.category}</p>
        </header>
    );
}

export default Header;
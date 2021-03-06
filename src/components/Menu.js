import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function Menu(props) {
  return (
    <div>
      <i className="fas fa-bars" onClick={props.toggleMenu} />
      {
        //Dålig lösning onclick toggle menu?
      }
      <ul>
        <li>
          <NavLink
            onClick={props.toggleMenu}
            activeClassName="linkIsActive"
            exact={true}
            to="/introduktion"
          >
            Introduktion
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={event => {
              props.toggleMenu();
              props.changeChapter('Se filmen');
            }}
            activeClassName="linkIsActive"
            exact={true}
            to="/sefilmen"
          >
            Se filmen
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={event => {
              props.toggleMenu();
              props.changeChapter('Frågorna');
            }}
            activeClassName="linkIsActive"
            exact={true}
            to="/fyllidinasvar"
          >
            Fyll i dina svar
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={event => {
              props.toggleMenu();
              props.changeChapter('Resultat');
            }}
            activeClassName="linkIsActive"
            exact={true}
            to="/resultat"
          >
            Resultat
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;

import React, { Component } from 'react';
import './App.css';


class Navigation extends Component {
  render() {
    const sections = ['Home', 'About', 'Services', 'Portforlio', 'Contacts']
    const navLInks = sections.map( section=>{
      return(
        <li><a href={'#' + section}>{section}</a></li>
      )
    });

    return (
      <nav>
        <h2 className ='logo'>{this.props.logoTitle}</h2>

        <ul>
          {navLInks}
        </ul>

      </nav>
    );
  }
}

export default Navigation;

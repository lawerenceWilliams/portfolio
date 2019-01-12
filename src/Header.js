import React, { Component } from 'react';
import './Header.css';


class Header extends Component{
    render(){
        return (
            <header>
                <h1>{this.props.title}</h1>
                <p>Computer Programer, App Devoplment, Web Design</p>
                <a href= '#button'>{this.props.button}</a>
            </header>

        );
    }
};

export default Header;
import React, { Component } from "react";
import './style.scss';

class Menu extends Component{
    render() {
        return (
            <div className='menu container'>
                <img alt="developer's image" src='/images/profile.jpg'/>
                <div>
                    <p>This is just an App for example purpose. </p>
                    <p>This app developed in React.js, Node.js and
                        MongoDB as data support.</p>
                </div>
                <p>This app is created by Faizaan Saifi</p>
            </div>
        );
    }
}

export default Menu;

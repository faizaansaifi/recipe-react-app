import React, { Component } from "react";
import {BrowserRouter, Link} from "react-router-dom";
import  Route  from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'
import './style.scss';
import Home from "../Home";
import Menu from "../About";
import Result from "../Result";
import Items from "../ItemCards";
//
class Header extends Component{
    render() {
        return (
            <BrowserRouter>
                <div className='header'>
                    <header className='container'>
                        <div className='link-container'>
                            <div className='logo'>
                                <Link to='/'>
                                    Recipes
                                </Link>
                            </div>
                            <div className='navigations'>
                                <Link to='/'>Home</Link>
                                <Link to='/about'>About</Link>
                            </div>
                        </div>
                    </header>
                </div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={Menu} />
                    <Route path='/result' component={Result} />
                    <Route path='/items' component={Items} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Header;

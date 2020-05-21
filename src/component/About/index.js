import React, { Component } from "react";
import './style.scss';

class Menu extends Component{
    render() {
        return (
            <div className='menu container'>
                <img alt="developer's image" src='/images/profile.jpg'/>
                <div>
                    <p>This is just an App for example purpose.</p>
                    <p>This application gives you result based on your inputs and result contains some extra ingredients.
                        Search with the groceries you buy on daily basis for making a one time meal mostly. Grocery items
                        you buy, for e.g. Eggs, Bread, Chicken, Milk, Paneer etc. </p>
                    <p>Result of this application doesn't depends on spices or other items like flour, rice, oil etc.
                        It totally excludes those items as they are not the items we buy on daily basis.</p>
                    <p>This app developed in React.js, Node.js and
                        MongoDB as data support.</p>
                </div>
                <p>This app is created by Faizaan Saifi</p>
            </div>
        );
    }
}

export default Menu;

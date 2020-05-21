import React, { Component } from 'react';
import './style.scss'
import { connect } from 'react-redux';

class Result extends Component {
    selection = (index) => {
        this.props.history.push({pathname: '/items', state: {index}})
    }
    render() {
        let {search} = this.props,  maj_ing;
        let items = search && search.map((item,index) =>{
            maj_ing = item.keywords.join(', ');
            return <li className='item-container' onClick={() => this.selection(index)}>
                <div className='image-container'>
                    <img src={item.img} alt='Cousine'/>
                </div>
                <div className='details'>
                    <h3>{item.name}</h3>
                    <p>Time to Cook: {item.total_time}</p>
                    <p>Serve: {item.serve} persons</p>
                    <p><strong>Major Ingredients: {maj_ing}</strong></p>
                </div>
            </li>
        })
        return (
            <div className='result container'>
                <h2>From your Kitchen</h2>
                <div>
                    {search && search.length ? <ul className='items'>
                        {items}
                    </ul> : <p>No Data Found... Go to Home page and try again</p>}
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    search: state.search,
})

export default connect(mapStateToProps, null)(Result);

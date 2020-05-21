import React, { Component } from "react";
import './style.scss';

import { connect } from 'react-redux'
import {Link} from "react-router-dom";

class Items extends Component {
    render() {
        let index = this.props.history.location.state.index;
        let { data } = this.props;
        return (
            data ?
            <div className='item-details container'>
                <div className='back-button'>
                    <Link to='/result'><i className="fa fa-arrow-left"></i> Results</Link>
                </div>
                <div className='image-container'>
                    <img src={data[index].img} alt='image'/>
                </div>
                <h2>{data[index].name}</h2>
                <ul className='mis-info'>
                    <li>Prepare Time: {data[index].pre_time}</li>
                    <li>Cook Time: {data[index].cook_time}</li>
                    <li>Serve: {data[index].serve}</li>
                </ul>
                <div className='ingred'>
                    <h2>Ingredients</h2>
                    <div className='mongo' dangerouslySetInnerHTML={{__html: data[index].ingrd}} />
                </div>
                <div className='desc'>
                    <h2>Descriptions</h2>
                    <div className='mongo' dangerouslySetInnerHTML={{__html: data[index].instruction}} />
                </div>
            </div> : <div className='item-details '>
                    <p className='no-data'>Please search again....Go back to Home !</p></div>
        );
    }
}
const mapStateToProps = (state) => ({
    data: state.search
})

export default connect(mapStateToProps, null)(Items);

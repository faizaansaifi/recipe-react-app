import React, { Component } from "react";
import './style.scss'

import Menu from "../About";
import {test} from "../../action";

import Search from "../Search";
import {Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux'
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { test } = this.props;
        test();
    }

    render() {

        return (
            <div className='main-content container'>
                <div className='banner'>
                    <img src='/images/wp4820349-good-food-wallpapers.jpg'  />
                    <Search />
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            test
        }, dispatch)
    }
}

const mapStateToProps = (state) => ({
    state,
})
export default connect(mapStateToProps, mapDispatchToProps)(Home);

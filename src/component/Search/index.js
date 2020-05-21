import React, {Component} from "react";
import './style.scss';
import { query } from "../../action";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Search extends Component{
    constructor(props) {
        super(props);
        this.state ={}
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    onSearch = (e) => {
        const search = this.state.value && this.state.value.split(' ');
        const { query } = this.props;
        fetch('https://dummy-api-saifi.herokuapp.com/',{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({search})
        }).then(res => res.json()).then(data => query(data))
        this.props.history.push('/result');
    }
    onEnter = (e) => {
        e.keyCode === 13 && this.onSearch();
    }
    render() {
        return (
            <div className='search'>
                <div className='hoarding'>
                    <p className='title'>Cofused what to cook ?</p>
                    <p className='title'>Search with what you have</p>
                </div>
                <form>

                </form>
                <input type='text' placeholder="What's in your Kitchen" onKeyDown={this.onEnter} onChange={this.onChange}/>
                <i className="fa fa-search" onClick={this.onSearch} />
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    state,
})

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({query}, dispatch)
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Search));

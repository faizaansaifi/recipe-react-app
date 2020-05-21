import React from 'react';
import './style.scss';

export default (props)=> (
    <div>
        {props.isLoading && <div className="main-loader">
            <div className="holder">Please wait...</div>
        </div>}
    </div>
)

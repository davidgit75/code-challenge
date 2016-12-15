import React from 'react';
//import { Router, Route, Link, browserHistory } from 'react-router';
//import TableItems from '../TableItems/TableItems.js';
import "./Category.css";

export default class Category extends React.Component {
    setCategory() {
        return this.props.setCategory();
    }

    render() {
        return (
            <div>
                <a className="mdl-navigation__link" onClick={()=>{this.setCategory();}}>{this.props.tag}</a>
            </div>
        );
    }
}

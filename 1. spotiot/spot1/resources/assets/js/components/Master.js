// Master.js

import React, {Component} from 'react';
//import { Router, Route, Link } from 'react-router';

class Master extends Component {
    render(){
        return (
            <div className="container">

                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <div className="container-fluid">
                        <div className="navbar-brand">
                            <a className="navbar-brand" href="#">SPOT 1</a>
                        </div>
                        <ul className="nav navbar-laravel">
                            <li><a className="mr-2 p-2" href="#"> Home </a></li>
                            <li><a className="m-2 p-2" href="#"> Page 1 </a></li>
                            <li><a className="m-2 p-2" href="#"> Page 2 </a></li>
                            <li><a className="ml-2 p-2" href="#"> Page 3 </a></li>
                        </ul>
                    </div>
                </nav>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Master;
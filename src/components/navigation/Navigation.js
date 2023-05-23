import React, { Component } from 'react';
import './Navigation.css';
export default class Navigation extends Component {
    render() {
        return (
            <div className="football-header">
                <nav>
                    <ul>
                        <li>
                            <a className="active" href="#home">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#news">News</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

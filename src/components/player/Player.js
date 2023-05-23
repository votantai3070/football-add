import React, { Component } from 'react';
import './Player.css';
import { Players } from '../shared/ListOfPlayer';
export default class player extends Component {
    render() {
        return (
            <div className="container">
                {Players.map((player) => (
                    <div className="column">
                        <div className="card">
                            <img src={player.img} />
                            <h3>{player.name}</h3>
                            <p className="title">{player.club}</p>
                            <p className="card-btm">
                                <button>Detail</button>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

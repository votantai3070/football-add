import React from 'react';
import { data } from '../shared/ListOfPlayer';
import './Player.css';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row } from 'react-materialize';

export default function Player() {
    return (
        <div className="container">
            {data.map((player, index) => (
                <div key={index} className="column">
                    <div className="card">
                        <img src={player.img} alt="" />
                        <h3>{player.name}</h3>
                        <p className="title"></p>
                        <p className="btn">
                            <Link to={`detail/${player.id}`}>
                                <button className="card-btn">Detail</button>
                            </Link>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Navbar, NavItem } from 'react-materialize';
import './Navigation.css';

export default function Navigation() {
    return (
        <div>
            <Navbar
                className="menu"
                brand={<span className="brand-logo">Player Cards</span>}
                menuIcon={<Icon>menu</Icon>}
            >
                <NavItem>
                    <Link to="/" className="nav-link">
                        <Icon icon="visibility" left>
                            home
                        </Icon>
                        Home
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/about" className="nav-link">
                        <Icon left>info_outline</Icon>About
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/news" className="nav-link">
                        <Icon left>dvr</Icon>News
                    </Link>
                </NavItem>
                <NavItem>
                    <Link to="/contact" className="nav-link">
                        <Icon left>contacts</Icon>Contact
                    </Link>
                </NavItem>
            </Navbar>
        </div>
    );
}

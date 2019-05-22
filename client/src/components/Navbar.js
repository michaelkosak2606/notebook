import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/navbar.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar_content">


                    <div className="main_icon">
                        <div className="main_icon_inside">
                            <h2>My Notebook</h2>
                            <i className="fas fa-book-reader fa-3x"></i>
                        </div>
                    </div>
                    <div className="navbar_menu">
                        <ul>
                            <NavLink
                                to="/"
                                exact
                                activeClassName="active_link"
                            >
                                <li> Dashboard </li>
                            </NavLink>

                            <NavLink
                                to="/create"
                                activeClassName="active_link"
                            >
                                <li>Add Resource</li>
                            </NavLink>

                            <NavLink
                                to="/contact"
                                activeClassName="active_link"
                            >
                                <li>Contact</li>
                            </NavLink>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}


import React from 'react';
import { Link, NavLink } from 'react-router';
const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/laptop" >Laptop</NavLink>
                <NavLink to="/mobile" >Mobile</NavLink>
                <NavLink to="/Users" >Users</NavLink>
                <NavLink to="/UsersTwo" >UsersTwo</NavLink>
            </nav>
        </div>
    );
};
export default Header;
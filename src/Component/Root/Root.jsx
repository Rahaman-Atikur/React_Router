import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
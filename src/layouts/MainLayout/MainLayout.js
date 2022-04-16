import React from 'react';
import {Route, Link, Outlet} from 'react-router-dom';
import style from './mainLayout.module.css';

const MainLayout = () => {
    return (
        <div>
            <div className={style.header}>

            </div>

             <Outlet/>
        </div>
    );
};

export {MainLayout};
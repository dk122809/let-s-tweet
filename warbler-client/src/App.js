import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.slim.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

function App(){
    return (
        <>
            <BrowserRouter>
                <Router  />
            </BrowserRouter>
        </>
    )
}

export default App;
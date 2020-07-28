import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import VideoForm from './pages/Video/Form';

// import { Container } from './styles';
const page404 = () => {
    return (
        <div> Página not found</div>

    )
}

function routes() {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Home} />
            <Route path='/video/cadastrar' component={VideoForm} />
            <Route component={page404} />
        </BrowserRouter>
    )
}

export default routes;
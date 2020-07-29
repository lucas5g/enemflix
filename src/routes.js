import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import VideoForm from './pages/Video/Form';
import GategoryForm from './pages/Category/Form'
// import Menu from './components/Menu'
// import Footer from './components/Footer';

// import { Container } from './styles';
const page404 = () => {
    return (
        <div> Página not found</div>

    )
}

function routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/video/cadastro' component={VideoForm} />
                <Route path='/categoria/cadastro' component={GategoryForm} />

                <Route component={page404} />
            </Switch>
        </BrowserRouter>
    )
}

export default routes;
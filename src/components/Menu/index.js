import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';
import Logo from '../../assets/Logo.png'
import './style.css'
import Button from '../Button';
function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="AluraFlix logo" />

            </Link>
            <Button as={Link} to="/video/cadastro" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;
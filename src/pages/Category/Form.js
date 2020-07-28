import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

// import { Container } from './styles';

function CategoryForm() {
    return (
        <PageDefault>
            <h1>Cadastro de  Gategoria</h1>
            <form action="">
                <label>
                    Nome da Categoria
                    <input type="text" />
                </label>
                <button>
                    Cadastrar

                </button>
            </form>
            <Link to='/'>
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CategoryForm;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormFild from '../../components/FormFild';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';

// import { Container } from './styles';

function CategoryForm() {


	const valoresInicias = {
		titulo: '',
		description: '',
		color: '#AAAAAA'
	}

	const {handleChange, values, clearForm} = useForm(valoresInicias)

	const [category] = useState()

	const [categories, setCategories] = useState([])


	useEffect(() => {
		// const url = 'http://localhost:8000'
		const url = window.location.hostname.includes('localhost')
			? 'http://localhost:8000'
			: 'https://aluraflix-lucas.herokuapp.com'

		fetch(`${url}/categorias`)
			.then((response) => response.json())
			.then((response) => {
				console.log(response)
				setCategories(response)

			})
	}, [])

	return (
		<PageDefault>
			<h1>Cadastro de  Gategoria: {category?.titulo}</h1>
			<form onSubmit={(event) => {
				event.preventDefault()
				setCategories([
					...categories,
					category
				])

				clearForm()
			
				}}>

				<FormFild
					label='Nome da Categoria'
					name={'titulo'}
					value={values.titulo}
					onChange={handleChange}
				/>

				<FormFild
					type='textarea'
					label='Descrição'
					name='description'
					value={values.description}
					onChange={handleChange}
				/>
				<FormFild
					type='color'
					label='Cor'
					name='color'
					value={values.color}
					onChange={handleChange}
				/>

				<Button>
					Cadastrar
				</Button>
			</form>

			{categories.length === 0 && (
				<div>Loading...</div>
			)}
			<ul>
				{categories.map((category, index) => (
					<li key={index} >{category.titulo}</li>
				))}
			</ul>
			<Link to='/'>
				Ir para home
			</Link>
		</PageDefault>
	)
}

export default CategoryForm;
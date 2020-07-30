import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormFild from '../../components/FormFild';
import Button from '../../components/Button';

// import { Container } from './styles';

function CategoryForm() {

	const [category, setCategory] = useState({
		name: '',
		description: '',
		color: '#AAAAAA'
	})

	const [categories, setCategories] = useState([])


	useEffect(() => {
		const url = 'http://localhost:8000'
		fetch(`${url}/categorias`)
			.then((response) => response.json())
			.then((response) => {
				
				setCategories(response)
				
			})
	}, [])

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setCategory({
			...category, [name]: value
		})
		console.log({ name, value })
	}


	return (
		<PageDefault>
			<h1>Cadastro de  Gategoria: {category.name}</h1>
			<form onSubmit={(event) => {
				event.preventDefault()
				setCategories([
					...categories,
					category
				])
				setCategory({ name: '', description: '', color: '#ffffff' })
			}}>

				<FormFild
					label='Nome da Categoria'
					name={'name'}
					value={category.name}
					onChange={handleInputChange}
				/>

				<FormFild
					type='textarea'
					label='Descrição'
					name='description'
					value={category.description}
					onChange={handleInputChange}
				/>
				<FormFild
					type='color'
					label='Cor'
					name='color'
					value={category.color}
					onChange={handleInputChange}
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
					<li key={index} >{category.name}</li>
				))}
			</ul>
			<Link to='/'>
				Ir para home
            </Link>
		</PageDefault>
	)
}

export default CategoryForm;
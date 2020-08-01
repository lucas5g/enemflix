import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormFild from '../../components/FormFild';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import api from '../../services/api';

// import { Container } from './styles';

function CategoryForm() {


	const valuesStart = {
		title: '',
		description: '',
		color: '#AAAAAA'
	}

	const { handleChange, values, clearForm } = useForm(valuesStart)

	const [category] = useState()

	const [categories, setCategories] = useState([])


	useEffect(() => {
		api.get('/categories').then((response) => {
			const { data } = response
			setCategories(data)
		})
	}, [])

	return (
		<PageDefault>
			<h1>Cadastro de  Gategoria: {category?.title}</h1>
			<form onSubmit={(event) => {
				event.preventDefault()
				api.post('/categories', values).then((response) => {
					const { data } = response
					setCategories([...categories, data])
					clearForm()
				})


			}}>

				<FormFild
					label='Nome da Categoria'
					name={'title'}
					value={values.title}
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
					<li key={index} >{category.title}</li>
				))}
			</ul>
			<Link to='/'>
				Ir para home
			</Link>
		</PageDefault>
	)
}

export default CategoryForm;
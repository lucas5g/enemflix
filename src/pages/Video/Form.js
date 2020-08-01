import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormFild from '../../components/FormFild';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';
import api from '../../services/api';

function VideoForm() {

  const history = useHistory()
  const [categories, setCategories] = useState([])

  const { handleChange, values } = useForm({
    // title: 'History in the Silent Hill',
    // url: 'https://www.youtube.com/watch?v=_uLs9rmJZgY',
    // category: 'Games'
  })

  useEffect(() => {
    api.get('/categories').then((response) => {
      const { data } = response
      // console.log(data)
      setCategories(data)
    })
  }, [])

  return (
    <PageDefault>

      <h1>Cadastro de  Vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault()
        const categorieSelect = categories.find((category) => {
          return category.title === values.category
        })

        if (categorieSelect === undefined) {
          alert('Essa categoria não foi cadastrada')
          return
        }

        const data = { title: values.title, url: values.url, categoryId: categorieSelect.id}
        // console.log(data)

        // return 
        api.post('/videos', data)
          .then((response) => { 
            history.push('/')
          })

      }}>
        <FormFild
          label='Título do Vídeo'
          name='title'
          value={values.title || '' }
          onChange={handleChange}
          />
        <FormFild
          label='URL'
          name='url'
          value={values.url || ''}
          onChange={handleChange}
          />
        <FormFild
          label='Categoria'
          name="category"
          value={values.category || ''}
          onChange={handleChange}
          suggestions={categories}
          />

        <Button>
          Cadastrar
				</Button>
      </form>
      <Link to='/categoria/cadastro'>
        Cadastrar Categoria
      </Link>
    </PageDefault>
  )
}

export default VideoForm;
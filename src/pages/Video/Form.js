import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import FormFild from '../../components/FormFild';
import useForm from '../../hooks/useForm';
import Button from '../../components/Button';

// import { Container } from './styles';

function VideoForm() {

  const history = useHistory()

  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=sZu6LRb1XLQ',
    categoria: 'Front End'
  })
  return (
    <PageDefault>

      <h1>Cadastro de  Vídeo</h1>
      <form onSubmit={(event) => {
        event.preventDefault()

        // alert('Video cadastrado com sucesso!!')
        history.push('/')

      }}>
        <FormFild
          label='Título do Vídeo'
          name={'titulo'}
          value={values.titulo || ''}
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
          name="categoria"
          value={values.categoria || ''}
          onChange={handleChange}
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
import React, { useEffect, useState } from 'react';
// import dadosInicias from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

// import categorysRespository from '../../repositories/categorys'
import PageDefault from '../../components/PageDefault';
import api from '../../services/api';
// import PageDefault from '../../components/PageDefault';

function Home() {
	const [data, setData] = useState([])


	 useEffect(() => {
		 api.get('/categories?_embed=videos')
		 	.then((response) => {
				 const { data } = response
				 setData(data)
				// console.log(response)
			 })
	}, [])

	if (data.length === 0) {
		return (
			<div>Carregando...</div>
		)
	}

	return (

		<PageDefault paddingAll={0} >

			{data &&  data.map((category, index) => {
				// console.log({ category })
				// console.log({ index })

				if (index === 0) {

					return (
						<div key={category.id}>
							<BannerMain
								videoTitle={data[0].videos[0].title}
								url={data[0].videos[0].url}
								videoDescription={'Redação'}
							/>
							<Carousel
								ignoreFirstVideo
								category={data[0]}
							/>
						</div>
					)
				
				}
				return (
					<Carousel
						key={category.id}
						category={category}

					/>
				)
			})}


		</PageDefault>
	);
}

export default Home;

import { useState } from 'react'


const useForm = (valoresInicias) => {

	const [values, setValues] = useState(valoresInicias)

	const setValue = (chave, valor) => {
		setValues({
			...values,
			[chave]: valor
		})
	}
	const handleChange = (infosDoEvento) => {
		setValue(
			infosDoEvento.target.name, 
			infosDoEvento.target.value 
		)
	}


	const clearForm = () => {
		setValues(valoresInicias)
	}

	return {
		values,
		handleChange,
		clearForm
	}
}

export default useForm
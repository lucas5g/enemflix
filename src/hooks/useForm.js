import { useState } from 'react'


const useForm = (valoresInicias) => {

	const [values, setValues] = useState(valoresInicias)

	const handleChange = ( event ) => {
		const { name, value } = event.target
		setValues({
				...values,
				[name]: value
		})
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
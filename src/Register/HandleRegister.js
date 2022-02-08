import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'




const HandleRegister = (validate) => {
    const [values, setValues] = useState({
        username: '',
        password: '',
        password2: '',
        phone: ''
    });

    const registerhistory = useHistory();
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const preventRegister = (event) => {

        event.preventDefault();

        setErrors(validate(values));

        if (Object.keys(errors).length === 0)
            setIsSubmitting(preval => !preval)

    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {

            registerhistory.push("/signin");

        }

    }, [errors])

    return { preventRegister, values, handleChange, errors };

}

export default HandleRegister;

import React, { useState } from 'react'
import './register.css'
import HandleRegister from './HandleRegister'
import validate from './validateinfo'



const Register = (props) => {

    const [registername, setname] = useState();
    const [registerpassword, setpassword] = useState();
    const [registerphone, setphone] = useState();



    // const blockRouting = (e) => {
    //     e.preventDefault();
    // }

    const onNameChange = (event) => {
        setname(event.target.value);
    }

    const onPasswordChange = (event) => {
        setpassword(event.target.value);
    }

    const onPhonenumberChange = (event) => {
        setphone(event.target.value)
    }


    const onSubmit = () => {
        fetch('http://localhost:3000/register', {

            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: registername,
                phone: registerphone,
                password: registerpassword
            })
        })
            .then(response => response.json())

            .then(user => {
                if (user) {
                    props.loadUser(user)
                }
            })

    }

    const { preventRegister, values, handleChange, errors } = HandleRegister(validate);

    return (

        <div className='register_container bg-purple tc'>

            <form className='register_entries br3 pa4 bg-purple shadow-1 '>

                <h1 className='register_header'>Ganesh Medical Register</h1>
                <div>
                    <label htmlFor='username'></label>
                    <input className='register_textbox'
                        type="text"
                        placeholder='Name'
                        name='username'
                        autoComplete='off'
                        value={values.username}
                        onChange={(e) => { onNameChange(e); handleChange(e); }}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <label htmlFor='phone'></label>
                <input className='register_textbox'
                    type="text"
                    placeholder='Phonenumber'
                    name='phone'
                    autoComplete='off'
                    value={values.phone}
                    onChange={(e) => { onPhonenumberChange(e); handleChange(e); }}
                /><br />{errors.phone && <p>{errors.phone}</p>}


                <label htmlFor='password'></label>
                <input className='register_textbox'
                    type="password"
                    name='password'
                    autoComplete='off'
                    value={values.password}
                    placeholder='Password'
                    onChange={(e) => { onPasswordChange(e); handleChange(e); }}
                /><br />{errors.password && <p>{errors.password}</p>}

                <label htmlFor='password2'></label>
                <input className='register_textbox'
                    type="password"
                    name='password2'
                    autoComplete='off'
                    value={values.password2}
                    placeholder='Retype-Password'
                    onChange={(e) => { onPasswordChange(e); handleChange(e); }}
                /><br />{errors.password2 && <p>{errors.password2}</p>}



                <button
                    onClick={(e) => { onSubmit(); preventRegister(e) }}
                    className='register_button'>Register
                </button>


                {/* {isSubmitting ?

                    registerhistory.push("/signin")
                    :
                    <button className='register_button' onClick={(e) => blockRouting(e)}>
                        Register
                    </button>
                } */}



            </form>
        </div>

    );


}

export default Register;
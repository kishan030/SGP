import React, { useState } from "react";
import './Login.css';
import { Link } from 'react-router-dom'

function Login(props) {

  const [loginphone, setLoginphone] = useState();
  const [loginpassword, setLoginpassword] = useState();


  const OnPhonenumberChange = (event) => {
    setLoginphone(event.target.value)
  }

  const OnPasswordChange = (event) => {
    setLoginpassword(event.target.value)
  }

  const onSubmit = () => {

    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: loginphone,
        password: loginpassword,
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.phonenumber) {
          props.loadUser(user)
          props.isAuthBySignIn(true)
        } else {
          props.isAuthBySignIn(false)
        }

      })
  }

  return (

    <div className='Login_container bg-purple tc'>

      <form className=' signin_entries br3 pa4 bg-purple shadow-1 '>
        <h1 className='signin_header'>Ganesh Medical Signin</h1>

        <input className='signin_textbox'
          type="text"
          placeholder='PhoneNumber'
          onChange={OnPhonenumberChange}
        /><br></br>

        <input className='signin_textbox'
          type="password"
          placeholder='Password'
          onChange={OnPasswordChange}
        /><br />

        <Link to='/'><button onClick={onSubmit} className='signin_button'>SignIn</button></Link>
        <Link to='/register'><label className='pointer link dim black'>or Register</label></Link>
      </form>

    </div>

  );
}

export default Login;

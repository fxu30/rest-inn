import { Error } from '@mui/icons-material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../redux/apiCalls';

const LoginForm = () => {
  const alertColor = {
    color: 'red'
  }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const {isFetching, error} = useSelector(state => state.user)

  const handleLogin = (event) => {
    event.preventDefault();
    login(dispatch, {email, password})
  }

  return (
    <form className='login-container'>
    <div className="grid-container">
      <div className="grid-x">
        {/* title */}
        <div className='cell medium-4'></div>
        <h3 className='cell medium-4'><strong>Sign in</strong></h3>
        <div className='cell medium-4'></div>
        {/* error Message */}
        <div className='cell medium-4'></div>
        <div className="cell medium-4">
          {error && <span style={alertColor}>Something went wrong. Please try again.</span>}
        </div>
        <div className='cell medium-4'></div>
        {/* email */}
        <div className='cell medium-4'></div>
        <div className="cell medium-4">
          <label htmlFor='email'>Email Address</label>
          <input type="text" id='email' value={email} onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className='cell medium-4'></div>
        {/* autosign checkbox */}
        <div className='cell medium-4'></div>
        <fieldset className="medium-4 cell">
          <input id="autosign" type="checkbox"/>
          <label for="autosign">Sign me in automatically next time</label>
        </fieldset>
        <div className='cell medium-4'></div>
        {/* password */}
        <div className='cell medium-4'></div>
        <div class="medium-4 cell">
          <label htmlFor='password'>Password</label>
          <input type="password" id='password' value={password} onChange={event => setPassword(event.target.value)}/>
        </div>
        <div className='cell medium-4'></div>
        {/* password recovery link */}
        <div className='cell medium-4'></div>
        <h6 class="medium-4 cell"><a>Forgot Your password?</a></h6>
        <div className='cell medium-4'></div>
        {/* submit */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
            <button className="button" type="button"
            onClick={handleLogin} disabled={isFetching}>Sign in</button>
        </div>
        <div className='cell medium-4'></div>
        {/* Dont have account? */}
        <div className='cell medium-4'></div>
        <label class="medium-4 cell">Don't have an account? <Link to="../Signup">Sign up</Link></label> 
        <div className='cell medium-4'></div>
      </div>
    </div>
  </form>
  )
}

export default LoginForm
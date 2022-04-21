import axios from 'axios';
import React , {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import configData from '../config.json'

const SignupForm = () => {
  const alertColor = {
    color: 'red'
  }

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")

  const [ErrorEmail, setErrorEmail] = useState("");
  const [ErrorPassword, setErrorPassword] = useState("");
  const [ErrorFirstname, setErrorFirstname] = useState("");
  const [ErrorLastname, setErrorLastname] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const URL = `${configData.SERVER_URL}/Users`
    axios.post(URL, {
      email: email,
      password: password,
      firstname : firstname,
      lastname : lastname,
    }).then(response => response.data)

      .then(json => {
        console.log("success to register");
        alert("success to register, redirecting to login page")
        navigate('/login')
      })
      .catch((err) => {
        console.log(err)
        const errorJson = err.response.data
        setErrorEmail(errorJson.email)
        setErrorFirstname(errorJson.firstname)
        setErrorLastname(errorJson.lastname)
        setErrorPassword(errorJson.password)
        
      })
  }

  return (
      
    <form className='signup-container'>
    <div className="grid-container">
      <div className="grid-x">
        {/* title */}
        <div className='cell medium-4'></div>
        <h3 className='cell medium-5'><strong>Create an account</strong></h3>
        <div className='cell medium-3'></div>
        {/* email */}
        <div className='cell medium-4'></div>
        <div className="cell medium-4">
          <label htmlFor='email'>Email Address</label>
          {/* error message of email */}
          <span style={alertColor}>{ErrorEmail}</span>
          <input type="text" id='email' value={email} onChange={event => setEmail(event.target.value)}/>
        </div>
        <div className='cell medium-4'></div>
        {/* password */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
          <label htmlFor='password'>Password</label>
          {/* error message of password */}
          <span style={alertColor}>{ErrorPassword}</span>
          <input type="password" id='password' value={password} onChange={event => setPassword(event.target.value)}/>
        </div>
        <div className='cell medium-4'></div>
        {/* password requirements*/}
        <div className='cell medium-4'></div>
        <p className="medium-6 cell passwordreq">6 to 20 letters with at least 1 number</p> 
        <div className='cell medium-2'></div>
        {/* first name */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
          <label htmlFor='firstname'>First Name</label>
          {/* error message of first name */}
          <span style={alertColor}>{ErrorFirstname}</span>
          <input type="text" id='firstname' value={firstname} onChange={event => setFirstname(event.target.value)}/>
        </div>
        <div className='cell medium-4'></div>
        {/* last name */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
          <label htmlFor='lastname'>Last Name</label>
          {/* error message of last name */}
          <span style={alertColor}>{ErrorLastname}</span>
          <input type="text" id='lastname' value={lastname} onChange={event => setLastname(event.target.value)}/>
        </div>
        <div className='cell medium-4'></div>
        {/* autosign checkbox */}
        <div className='cell medium-4'></div>
        <fieldset className="medium-4 cell">
          <input id="autosign" type="checkbox"/>
          <label for="autosign">Keep in signed in</label>
        </fieldset>
        <div className='cell medium-4'></div>
        {/* newsletter checkbox */}
        <div className='cell medium-4'></div>
        <fieldset className="medium-6 cell">
          <input id="autosign" type="checkbox"/>
          <label for="autosign">Email me exclusive deals and newsletter</label>
        </fieldset>
        <div className='cell medium-2'></div>
        {/* submit */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
            <button className="button" type="button" onClick={handleSignUp}>Create account</button>
        </div>
        <div className='cell medium-4'></div>
        {/* already have account? */}
        <div className='cell medium-4'></div>
        <label className="medium-4 cell">Already have an account? <Link to="../Login">Sign in</Link></label> 
        <div className='cell medium-4'></div>


      </div>
    </div>
  </form>
  )
}

export default SignupForm
import React from 'react'
import { Link } from 'react-router-dom';

const SignupForm = () => {
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
          <input type="text" id='email'/>
        </div>
        <div className='cell medium-4'></div>
        {/* password */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
          <label htmlFor='password'>Password</label>
          <input type="password" id='password'/>
        </div>
        <div className='cell medium-4'></div>
        {/* password requirements*/}
        <div className='cell medium-4'></div>
        <p className="medium-6 cell passwordreq">6 to 20 letters with at least 1 number</p> 
        <div className='cell medium-2'></div>
        {/* first name */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
          <label htmlFor='lastname'>First Name</label>
          <input type="text" id='lastname'/>
        </div>
        <div className='cell medium-4'></div>
        {/* last name */}
        <div className='cell medium-4'></div>
        <div className="medium-4 cell">
          <label htmlFor='firstname'>Last Name</label>
          <input type="text" id='firstname'/>
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
            <button className="button" type="submit">Create account</button>
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
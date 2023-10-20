import React from 'react'
import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { signUp } from '../actions/authActions'
import { connect } from 'react-redux'

function Register({ signUp, uid }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    signUp(email, password)
  }

  if (uid) {
    return <Navigate to='/' />
  } else {
    return (
      <div className='Landing-container'>
        <h2>Register...</h2>
        <div className='input-container'>
          <input
            type='email'
            placeholder='Enter email*'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Enter password*'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='primary-btn' onClick={handleSignUp}>
            sign-up
          </button>
          <Link to='/'>
            <div id='back'>nvm</div>
          </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid
  return {
    uid: uid,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(signUp(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)

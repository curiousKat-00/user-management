import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { signIn } from '../actions/authActions'
import { Navigate } from 'react-router-dom'

function Landing({ signIn, uid }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = () => {
    signIn(email, password)
  }
  if (uid) {
    return <Navigate to='/main' />
  } else {
    return (
      <div className='Landing-container'>
        <h2>Welcome...</h2>
        <div className='input-container'>
          <input
            type='email'
            placeholder='Email*'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password*'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='primary-btn' onClick={handleSignIn}>
            sign-in
          </button>
          <Link to='/register'>
            <button className='primary-btn'>sign-up</button>
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
    signIn: (email, password) => dispatch(signIn(email, password)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

import { Navigate } from 'react-router-dom'
/* import Card from '../components/card' */
import { connect } from 'react-redux'

import { signOut } from '../actions/authActions'

function Main({ signOut, uid, email }) {
  const handleSignOut = () => {
    signOut()
  }

  const Card = ({ title, valid, worth }) => {
    return (
      <div className='card-info'>
        <h2 className='ttt'>{title}</h2>
        <ul>
          <li>Valid for {valid} days</li>
          <li>Worth R{worth} per sale</li>
          <li>10% return on every client sale</li>
        </ul>
        <div className='btns'>
          <button>BUY </button>
          <button>SELL</button>
        </div>
      </div>
    )
  }

  if (uid) {
    return (
      <div className='Main-container'>
        <main className='device'>
          <header className='head'>user.name</header>
          <section className='cards'>
            <Card title={'Pinkies'} valid={10} worth={50} />
            <Card title={'Kleepa'} valid={20} worth={100} />
            <Card title={'Block'} valid={30} worth={1000} />
          </section>
          <section className='details'>
            <article>Sales</article>
            <div className='sales'>
              <div>+0</div>
              <div>+0</div>
              <div>+0</div>
            </div>
            <article>Revenue</article>
            <div className='revenue'>
              <div>R0</div>
              <div>R0</div>
              <div>R0</div>
            </div>
          </section>
          <section className='info'>
            <div className='thead'>
              <article style={{ display: 'flex', color: '#fff' }}>
                Ten(<div style={{ color: 'red' }}> - </div>)
              </article>
              <h2 style={{ margin: '0' }}>Profit</h2>
              <article style={{ display: 'flex', color: '#fff' }}>
                Ten(<div style={{ color: 'green' }}> + </div>)
              </article>
            </div>
            <div className='tbody'>
              <div style={{ color: '8f2020' }}>R0</div>
              <div style={{ color: 'aqua' }}>R0</div>
              <div style={{ color: '#07bc0c' }}> R0</div>
            </div>
          </section>
        </main>
      </div>
    )
  } else {
    return <Navigate to='/' />
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid
  const email = state.firebase.auth.email
  return {
    uid: uid,
    email: email,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)

{
  /* <div style={{ display: 'flex' }}>
          <Card valid={10} cost={'R100'} title={'Pinkies'} />
          <Card valid={20} cost={'R200'} title={'Kleepa'} />
          <Card valid={30} cost={'R2000'} title={'Block'} />
        </div>
        <div id='back' onClick={handleSignOut}>
          Awe, you are signed in with Email: {email}
        </div> */
}

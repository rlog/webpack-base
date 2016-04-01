import React from 'react'
import { Link, browserHistory } from 'react-router'
import Header from "../components/Header"

//Style
// import 'bootstrap/dist/css/bootstrap.css'
import '../../style/main'

export default function App({ children }) {
  return (
    <div>
      <Header />
      <nav>
        Links:
        {' '}
        <Link to="/">Home</Link>
        {' '}
        <Link to="/foo">Foo</Link>
        {' '}
        <Link to="/bar">Bar</Link>
      </nav>
      <div>
        <button onClick={() => browserHistory.push('/foo')}>Go to /foo</button>
      </div>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}

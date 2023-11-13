import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Header'

type appProps = {
}
type stateProps = {
}
class App extends React.Component<appProps, stateProps> {
  async componentDidMount() {
    // API call to get list of available quizes, this can be passed to another component
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch></Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App

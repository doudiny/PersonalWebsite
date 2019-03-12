import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.jsx';
import MyNavBar from './headerComponent/myNavBar.jsx';
import Footer from './footerComponent/footer.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <MyNavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
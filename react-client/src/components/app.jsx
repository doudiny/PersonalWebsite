import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.jsx';
import MyNavBar from './headerComponent/myNavBar.jsx';
import Footer from './footerComponent/footer.jsx';
import ResumePage from './pages/resumePage.jsx';
import BlogPage from './pages/blogPage.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="fullcontent">
          <MyNavBar/>
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="resume" exact path="/Resume" component={ResumePage} />
          <Route name="blog" exact path="/Blog" component={BlogPage}/>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
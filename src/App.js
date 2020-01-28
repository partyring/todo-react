import React, { Component } from 'react';
import Navbar from './Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Todo from './Todo';
import Search from './Search';
import Blog from './Blog';
import Post from './components/Post'

class App extends Component {

  render() {

    return (
      // Set the routes for the nav bar
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path ='/' component={Todo} />
          <Route path ='/about' component={About} />
          <Route path ='/contact' component={Contact} />
          <Route path ='/search-weather' component={Search} />
          <Route exact path ='/blog' component={Blog} />
          <Route path = '/blog/:post_id' component={Post} />
        </div>
      </BrowserRouter>
    );
  }
}
  
export default App;
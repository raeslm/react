import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// Components
import Posts from './components/Posts'
import Home from './components/Home'
import SinglePost from './components/SinglePost'

export default class App extends Component {
    render() {
      return (
        <div>
          <h1>Header</h1>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
              </ul>
  
              <hr />
        
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
                <Route path={`/posts/:postId`} component={SinglePost} />
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
}
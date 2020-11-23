//import React from 'react'
import './App.css'
import React, {Component} from 'react'

/* import Login from './pages/Login'
import { Link } from 'react-router-dom' */
import Hello from './pages/Hello/Hello'

export default (props) =>(
  
<div>
    <Hello></Hello>        
</div>);



/* class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };

    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(posts => (this.setState({posts}))
  }
  render() {
    return (<div>
      Hello World
      <ul>
        {this.state.posts.map(post => <li>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>}
      </ul>
    </div>);
  }
}

ReactDOM.render(
  <Posts />,
  mountNode
); */
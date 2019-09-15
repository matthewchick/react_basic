import React, { Component } from 'react';   //ES6 destructing
// axios - promise based http client, install it by yarn add axios
import axios from 'axios'
// import {Loading} from './Loading'
import Loading from './Loading'

class App extends Component {   //React.Component
  constructor(props) {
    super(props)
    //state
    this.state = {    //state object literal
      users: [],
      loading: false
    }
    // bind
    this.handleSubmit = this.handleSubmit.bind(this); //to solve this.getUsers() not defined inside handleSubmit()
  }

  getUsers() {
    this.setState({loading: true})
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({      //ES6 promise
      users: [...this.state.users, ...response.data.results],        //update users
      loading: false
      })
    );
    //.then(response => console.log(response));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUsers();
    console.log('more users loaded');
  }

  componentWillMount() {    //react component lifecycle
    this.getUsers();
  }

  render() {     // use {} to embed javascript code inside .jsx
    const {loading, users} = this.state     //object destructing
    return (
      <div className="App">
        {!loading ? 
          users.map(user => 
          <div>
            <h3>{user.name.first}</h3>
            {user.email}
            <hr/>
            <form onSubmit={this.handleSubmit}>
              <input type ="submit" value="load users" />
            </form>
          </div>
          ) : <Loading message="Hello" />}
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

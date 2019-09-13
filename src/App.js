import React, { Component } from 'react';   //ES6 destructing
// axios - promise based http client, install it by yarn add axios
import axios from 'axios'

class App extends Component {   //React.Component
  constructor(props) {
    super(props)
    //state
    this.state = {    //state object
      users: []
    }
  }

  componentWillMount() {    //react component lifecycle
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response => this.setState({
      users: response.data.results   //update user
      })
    );
    //.then(response => console.log(response));
  }

  render() {
    return (
      <div className="App">
        
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

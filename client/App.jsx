import React from 'react';
import axios from 'axios';
import Chance from 'chance';
const chance = new Chance();

class App extends React.Component {

  constructor () {
    super();
    this.state = {
      users: []
    };
    this.retrieveUsers = this.retrieveUsers.bind(this);
    this.addRandomUser = this.addRandomUser.bind(this);
  }

  retrieveUsers () {
    axios.get('/api/users')
    .then(res => {
      const users = res.data;
      this.setState({
        users: users
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  addRandomUser () {
    axios.post('/api/users', {
      name: chance.name(),
      password: chance.word()
    })
    .then(res => {
      const users = res.data;
      this.setState({
        users: users
      })
    })
    .catch(err => {
      console.error(err);
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.retrieveUsers}>Get Users</button>
        <ul>
        {
          this.state.users.map((user, index) => {
            return (
              <li key={index}>{user.name}, {user.password}</li>
            );
          })
        }
        </ul>
        <button onClick={this.addRandomUser}>Add Random User</button>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import api from './api';
// import fetchUser from './services/fetchUser';

class App extends Component{

  state= {
    members: []
  }

  async componentDidMount(){
    const response= await api.get('/orgs/aws/members');
    this.setState({ members: response.data});
  }

  render(){
    const { members }= this.state;

    return(
      <div>
        <h1>Membros do repositório do Github da AWS</h1>
        {console.log(members)}
        {members.map(member => (
          <li key={member.id}>

            <h2><strong>Membro:</strong>
            {member.login}
            </h2>
            {/* <img src={member.avatar_url}/> */}
            <p>https://api.github.com/users/{member.login}</p>
            {/* <p>{fetchUser(member.login)}</p> */}
          </li>

        ))}
        
      </div>
    );
  };
};

export default App;
import React, { Component } from 'react';

class App extends Component {
  state = {
    projects: []
  };
  
  /*    This is where the magic happens*/  
  
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/projects/api/'); // fetching the data from api, before the page loaded
      const projects = await res.json();
      this.setState({
        projects
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.projects.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

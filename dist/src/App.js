import React,{Component} from 'react';
import './App.css';
import Layout from './Component/Layout/Layout'
import RequestMessage from './Container/RequestMessage/RequestMessage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <h1>Your Request pls!</h1>
          <RequestMessage/>
        </Layout>
      </div>
    );
  }
  
}

export default App;

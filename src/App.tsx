import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { FiniteStateMachine } from 'finite-state-machine';


class App extends React.Component {

  constructor(...args) {
    super(args);
  }

  public render() {
    const a = new FiniteStateMachine({});
    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

export default App;

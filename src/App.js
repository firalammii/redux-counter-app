import React from 'react';
import './App.css';
import CounterRedux from './counterRedux/CounterRedux';
// import Counter from './feature/counter/Counter';
// import NameForm from './feature/name/NameForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter />
        <NameForm /> */}
        <CounterRedux />
      </header>
    </div>
  );
}

export default App;

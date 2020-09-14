import React from 'react';
import './App.css';

// import ClassCounter from './components/ClassCounter';
// import HookCounterOne from './components/HookCounterOne';
// import ClassMouse from './components/ClassMouse';
// import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalClassCounter from './components/IntervalClassCounter';
import IntervalHookCounter from './components/IntervalHookCounter';
function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      <MouseContainer />
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;

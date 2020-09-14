import React from 'react';
import './App.css';

import ComponentC from './components/ComponentC';

// First Step creating the context
export const UserContext = React.createContext();

export const ChannelContext = React.createContext();


function App() {
  return (
    <div className="App">
      {/* Providing the Context */}
      <UserContext.Provider value={'Suraj'}>
        <ChannelContext.Provider value={'MyloRd'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

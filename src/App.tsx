import React from 'react';
import Introduction from './components/Introduction';
import Welcome from './components/Welcome';

function App() {
  return (
    <div style={{ backgroundColor: "black", display: 'flex', flexDirection: "column" }}>
      <Welcome />
      <Introduction />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Library from "./Components/Library"
import Form from "./Components/Form"

const App: React.FC = () => {
  return (
    <div>
      <Library options={{
        message: "Hello message",
        type: "",
        position: ""
      }}></Library>
      <Form></Form>
    </div>
  );
}

export default App;

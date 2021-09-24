import { useState } from "react";
import Button from "./components/Button";

const bodyStyle = {
  backgroundColor: 'lightgreen',
  textAlign: 'center',
  height: '100%'
}

const pStyle = {
  textAlign: 'center',
  fontSize: '2.5em',
  margin: '3%',
  fontWeight: 'bold'
}

function App() {

  const [name, setName] = useState('OFF')

  const toggle = () => {
    if(name === 'OFF'){
      setName('ON')
    } else {
      setName('OFF')
    }
  }

  return (
    <>
      <div style={ bodyStyle } className="App">
        <p style={ pStyle }>Test</p>
        <Button onClick={ toggle } name={name} />
        <Button onClick={ toggle } name={name} />
        <Button onClick={ toggle } name={name} />
      </div>
    </>
  );
}

export default App;

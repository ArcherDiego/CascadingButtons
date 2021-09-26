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

  const [nameB1, setNameB1] = useState('OFF')
  const [nameB2, setNameB2] = useState('OFF')
  const [nameB3, setNameB3] = useState('OFF')

  const toggle = (num) => {
    if(nameB1 === 'OFF' && num === 1){
      setNameB1('ON')
    } else if(nameB1 === 'ON' && num === 1) {
      setNameB1('OFF')
    } else if(nameB2 === 'OFF' && num === 2) {
      setNameB1('ON')
      setNameB2('ON')
    } else if(nameB2 === 'ON' && num === 2) {
      setNameB1('OFF')
      setNameB2('OFF')
    } else if(nameB3 === 'OFF' && num === 3) {
      setNameB1('ON')
      setNameB2('ON')
      setNameB3('ON')
    } else if(nameB3 === 'ON' && num === 3) {
      setNameB1('OFF')
      setNameB2('OFF')
      setNameB3('OFF')
    }
  }

  return (
    <>
      <div style={ bodyStyle } className="App">
        <p style={ pStyle }>Test</p>
        <Button onClick={ () => toggle(1) } name={nameB1} />
        <Button onClick={ () => toggle(2) } name={nameB2} />
        <Button onClick={ () => toggle(3) } name={nameB3} />
      </div>
    </>
  );
}

export default App;

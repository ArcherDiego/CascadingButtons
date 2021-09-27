import { useState } from "react";
import Button from "components/Button";

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

  let initialValue = [false, false, false]
  const [ name, setName ] = useState(initialValue)

  const toggle = (num) => {
    let newArr = name.map((item, index) => index === num && !name[num])
    setName(newArr)
  }

  return (
    <>
      <div style={ bodyStyle } className="App">
        <p style={ pStyle }>Test</p>
        {name.map((item, index) => (
          <Button key={index} onClick={ () => toggle(index)} name={ name[index] ? 'ON' : 'OFF' } />
        ))}
      </div>
    </>
  );
}

export default App;

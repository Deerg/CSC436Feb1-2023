import Person from "./components/Person"
import { useState } from "react"
const App = () => {
  const [theText, setTheText] = useState('')
  const [firstName, setFirstname] = useState('')

  const clickHandler = () =>{
    setTheText("it changed!");
  }
  const theTextHandler = (e) =>{
    setTheText(e.target.value);
  }
  const theFirstHandler = (e) =>{
    setFirstname(e.target.value);
  }

  return <div>

    <label htmlFor="the-text">Text</label>
    <input type="text" id="the-text" className = "text-class" value = {theText} onChange={theTextHandler} />
    <label htmlFor="first-name">FirstName</label>
    <input type="text" id="first-name" className = "text-class" value = {firstName} onChange={theFirstHandler} />
    {!theText && !firstName && <p>Type to get started</p>}
    {(!!theText || !!firstName) && theText === firstName && <p style={{color:'green'}}>Match</p>}
    {(!!theText || !!firstName) && theText !== firstName && <p style={{color:'red'}}>No match</p>}
    {/*
    <button onClick={clickHandler}>Click me</button>
    <p>What is the input is {theText}</p>
    <p>{theText} is the value!!</p>
    <p>Hello World</p>
    <p>WWW World</p>
    <Person firstName = 'Shuyi' lastName ='Jiang' />
    <Person />
    <Person />
    <Person />
*/}
  </div>;

}

export default App;
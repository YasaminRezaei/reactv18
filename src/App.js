import './App.css';
//
import { useState,useTransition } from 'react';
import { numbersCreator } from './numbers';
//
import Numberlist from './Numberlist';

function App() {
  const [value,setValue] = useState('');
  const [numbers,setNumbers] = useState(numbersCreator());//halate avalie
 // const [isPending,startTransition] = useTransition();
  const changeHandler = (event) => {
   setValue(event.target.value);
   setNumbers(numbersCreator(event.target.value))
  //  startTransition(()=> {
  //   setNumbers(numbersCreator(event.target.value));
  //  })
   

  }
  return (
    <div className="App">
      <h1>react v18</h1>
      <input value={value} type="text" onChange={changeHandler} />
     {/* {isPending? <h1>Loading</h1> : null}  */}
      {/* {numbers.map(number => <p key={number}>{number}</p>)} */}
      <Numberlist numbers = {numbers}/>

    </div>
  );
}

export default App;

import {ChangeEvent, useState} from "react";
import Input from "./components/Input.tsx";


interface FormStates {
    name: string;
    age: number;
}

function App() {
  const [formV,setFormV]=useState<FormStates>({
      name:'pal',
    age:0
  })
  const firstInputHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        setFormV({
            ...formV,
            [e.currentTarget.name]:e.currentTarget.value
        })
  }
  return (
      <>
        <h1>Let's get started!</h1>
        <Input
            id={'name'}
            label={'Name'}
            type='text'
            name='name'
            value= {formV.name}
            onChange={firstInputHandler}
        />
      </>
  );
}

export default App;

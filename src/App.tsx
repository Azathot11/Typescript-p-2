import {ChangeEvent, useState} from "react";
import Input from "./components/Input.tsx";
import Button from "./components/Button.tsx";

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


          <Input
            id={'age'}
            label={'Age'}
            type='number'
            name='age'
            value= {formV.age}
            onChange={firstInputHandler}
          />
          <Button label={'Submit'} type={'submit'} mode={'link'}/>

          <Button label={'Submit'} type={'submit'} mode={'button'} buttonType={'submit'}/>
      </>
  );
}

export default App;

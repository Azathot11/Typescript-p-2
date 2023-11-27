import {ChangeEvent,  useState} from "react";
import Input from "./components/Input.tsx";
import Form from "./components/Form.tsx";
import Button from "./components/Button.tsx";
import {SubmittedValues} from "./components/models/form.ts";



function App() {
  const [formV,setFormV]=useState<SubmittedValues>({
      name:'',
    age:0
  })
  const firstInputHandler=(e: ChangeEvent<HTMLInputElement>)=>{
        setFormV({
            ...formV,
            [e.currentTarget.name]:e.currentTarget.value
        })
  }

  const formValuesHandler =(values:SubmittedValues)=>{
      console.log(values)
  }

  return (
      <>
        <h1>Let's get started!</h1>
          <Form formValues={formValuesHandler}>
              <Input
                  id={'name'}
                  label={'Name'}
                  type='text'
                  value= {formV.name}
                  onChange={firstInputHandler}
                  required/>
              <Input
                  id={'age'}
                  label={'Age'}
                  type='number'
                  value={formV.age}
                  onChange={firstInputHandler}
                  required/>
              <p>
                  <Button type={'submit'}>Save</Button>
              </p>
          </Form>

      </>
  );
}

export default App;

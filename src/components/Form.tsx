import {type FC, type ComponentPropsWithoutRef, FormEvent} from 'react';
import {SubmittedValues} from "./models/form";
type formProps ={
    formValues:(values:SubmittedValues)=>void
} & ComponentPropsWithoutRef<'form'>

const Form:FC <formProps>= ({formValues,children,...otherProps}) => {

    const formHandler =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: { name: string; age: number } = {
            name: formData.get("name") as string,
            age: parseInt(formData.get("age") as string),
        };
        formValues(data);
    }
    return (
        <form  onSubmit={formHandler} {...otherProps}>
            {children}
        </form>
    );
};

export default Form;
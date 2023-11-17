import  {type FC,type ComponentPropsWithoutRef} from "react";

type InputsProps ={
    id: string;
    label: string;
} & ComponentPropsWithoutRef<'input'>;


const Input: FC<InputsProps> = ({id,label, ...props}) => {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                {...props}
            />
        </p>
    );
};

export default Input;

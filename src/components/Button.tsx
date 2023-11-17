import {type FC, type ComponentPropsWithoutRef} from 'react';

type AnchorProps = {
    label: string;
    mode:'link'

} & ComponentPropsWithoutRef<'a'>;


type ButtonProps = {
    label: string;
    mode:'button'
    buttonType:'submit'|'reset'|'delete'|'button'

}& ComponentPropsWithoutRef<'button'>;


type CombinedProps =  AnchorProps| ButtonProps

const Button:FC<CombinedProps> = (props) => {

const {label}=props

    if(props.mode==='link'){
        return (
            <a {...props} >{label}</a>
        )
    }
    return (
        <button {...props}>{label}</button>
    );
};

export default Button;
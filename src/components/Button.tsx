import {type FC, type ComponentPropsWithoutRef} from 'react';

type AnchorProps = ComponentPropsWithoutRef<'a'>&{
    href?:string
};


type ButtonProps = {
    label: string;
    buttonType:'submit'|'reset'|'delete'|'button'
}& ComponentPropsWithoutRef<'button'> &{
    href?:never
};


type CombinedProps =  AnchorProps| ButtonProps

const isAnchorProps = (props: CombinedProps): props is AnchorProps => {
    return 'href' in props;
}

const Button:FC<CombinedProps> = (props) => {



    if(isAnchorProps(props)){
        return (
            <a className={'button'} {...props} ></a>
        )
    }
    return (
        <button className={'button'} {...props}></button>
    );
};

export default Button;
import {ComponentPropsWithoutRef, type ElementType,  type ReactNode} from "react";

type ContainerProps <T extends  ElementType> = {
    as:T
    children:ReactNode
} & ComponentPropsWithoutRef<T>

export default function Container({as,children,}:ContainerProps<'div'>) {
    const Component = as || 'div'

  return (
         <Component>
             {children}
         </Component>
     );
}

// const Container:FC<ContainerProps<C>> = ({as,children}:<C>) => {
//     const Component = as || 'div'
//     return (
//         <Component>
//             {children}
//         </Component>
//     );
// };
//
// export default Container;
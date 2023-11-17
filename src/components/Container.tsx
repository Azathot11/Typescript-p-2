import {ComponentPropsWithoutRef, type ElementType, type FC, type ReactNode} from "react";

type ContainerProps<T extends  ElementType> = {
    as:T
    children:ReactNode
} & ComponentPropsWithoutRef<T>

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
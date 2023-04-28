import React from "react";
import { CSSProperties, ReactNode } from "react";

interface Props {
    children: ReactNode;
    type?: 'horizontal' | 'vertical';
    size?: number;
    style?: CSSProperties
}

export default function Spacer({
    children,
    type = 'horizontal',
    size = 8,
    ...props}: Props) {
    const spacerStyle: CSSProperties = {
        ...props.style,
        display: type === 'vertical' ? 'block' : 'inline-block',
        verticalAlign: type === 'horizontal' ? 'middle' : undefined,
    };

    const nodes = React.Children.toArray(children)
    .filter(element => React.isValidElement(element))
    .map((element, index) => {
        return React.cloneElement(element, {
            ...element.props,
            style: {
                ...element.props.style,
                marginRight: type === 'horizontal' && index !== element.length - 1 ? size : undefined,
                marginBottom: type === 'vertical' && index !== element.length - 1 ? size : undefined,
            }
        })
    })
}
import { Text } from "../components";
import React, { ReactNode, CSSProperties } from "react";

interface Props extends React.HTMLAttributes<HTMLElement> {
    children: ReactNode;
    block?: boolean;
    paragraph?: boolean;
    size?: number | string;
    strong?: boolean;
    underline?: boolean;
    delete?: boolean;
    color?: string;
    mark?: boolean;
    code?: boolean;
    props?: CSSProperties;
}

export default {
    title: 'Component/Text',
    component: Text,
    argsType: {
        block: {
            defaultValue: false,
            control: 'boolean'
        },
        paragraph: {
            defaultValue: false,
            control: 'boolean'
        },
        size: {
            defaultValue: 12,
            control: 'number'
        },
        color: {
            defaultValue: '#000000',
            control: 'color'
        },
        delete: {
            defaultValue: false,
            control: 'boolean'
        },
        mark: {
            defaultValue: false,
            control: 'boolean'
        },
        code: {
            defaultValue: false,
            control: 'boolean'
        },
    }
}

export const Default = ({ block, paragraph, size, color, delete: del, mark, code }: Props) => {
    return <Text
    block={block}
    paragraph={paragraph}
    size={size}
    color={color}
    delete={del}
    mark={mark}
    code={code}
    >It's Text.</Text>
}
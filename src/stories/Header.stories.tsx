import { ReactNode } from "react";
import { Header } from "../components/";

interface Props {
    children: ReactNode;
    strong?: boolean;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}


export default {
    title: 'Component/Header',
    component: Header,
    argTypes: {
        level: {
            defaultValue: 1,
            control: { type: 'range', min: 1, max: 6}
        },
        strong: {
            defaultValue: false,
            control: 'boolean'
        }
    }
}

export const Default = ({level, strong}: Props) => {
    return <Header level={level} strong={strong}>It's Header</Header>
}
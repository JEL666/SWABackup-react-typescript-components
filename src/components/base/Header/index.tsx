import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    strong?: boolean;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}


const Header = ({ children, strong = false, level = 1 }: Props) => {
    const fontStyle = {
        /* text-align: center; */
        fontWeight: strong ? 'bold' : 'normal'
    };
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;
    return <Tag style={fontStyle}>{children}</Tag>;
}

export default Header;
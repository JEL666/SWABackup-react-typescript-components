import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { JsxElement } from "typescript";

interface Props extends React.HTMLAttributes<HTMLElement> {
    lazy?: boolean;
    threshold?: number;
    placeholder?: string
    src: string;
    block?: boolean;
    width?: number | string;
    height?: number | string;
    alt?: string;
    mode?: 'cover' | 'fill' | 'contain';
    props?: CSSProperties;
}
let observer: IntersectionObserver | null = null;
const LOAD_IMG_EVENT_TYPE: string = 'loadImage';

const onIntersection = (entries: any[], io: any) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            io.unobserve(entry.target);
            entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
        }
    })
}
const Image = ({
    lazy,
    threshold = 0.5,
    placeholder,
    src,
    block,
    width,
    height,
    alt,
    mode,
    ...props}: Props): JSX.Element => {
    
    const [loaded, setLoaded] = useState(false);
    const imgRef = useRef(null);
    
    const imageStyle: CSSProperties = {
        display: block ? 'block' : undefined,
        width,
        height,
        objectFit: mode // cover, fill, contain
    }

    useEffect(() => {
        if (!lazy) {
            setLoaded(true);
            return;
        }
        const handelLoadImage = () => setLoaded(true);

        const imgElement = imgRef.current as any;
        imgElement?.addEventListener(LOAD_IMG_EVENT_TYPE, handelLoadImage);
        return () => imgElement?.removeEventListener(LOAD_IMG_EVENT_TYPE, handelLoadImage);
    }, [lazy]);

    useEffect(() => {
        if (!lazy)
            return;

        if (!observer) {
            observer = new IntersectionObserver(onIntersection, { threshold });
        }
        imgRef.current && observer.observe(imgRef.current);
    }, [lazy, threshold])
    return <img
    ref={imgRef}
    src={loaded ? src : placeholder}
    alt={alt}
    style={{ ...props.style, ...imageStyle}}
    {...props}
    ></img>;
};

export default Image;
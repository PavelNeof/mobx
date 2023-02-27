import React, {useEffect, useRef, useState} from 'react';


export interface ILoadableImage {
    src: string;
    alt?: string;

    onLoad?(): void;
}

const LoadableImage = (props: ILoadableImage) => {
    const {src, alt = '', onLoad = () => {}} = props
    const [isLoaded, setIsLoaded] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null)

    useEffect(()=>{
        if(imageRef.current) {
            imageRef.current.onload = () =>{ setIsLoaded(true) }
        }
    },[])

    return (
        <div className={isLoaded ? `${'containerPhoto'} ${'containerPhotoLoaded'}`: 'containerPhoto' }>
            <img ref={imageRef} src={src} alt={alt} className={isLoaded ? `${'image'} ${'imageLoaded'}`:'image' }/>
        </div>
    );
};

export default LoadableImage;
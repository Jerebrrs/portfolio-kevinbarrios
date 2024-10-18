import React from 'react'
import Image from 'next/image'

interface ImageProps {
    containerStyles?: string;
    ImgSrc?: string;
}
const DevImg: React.FC<ImageProps> = ({ ImgSrc = '', containerStyles = '' }) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={ImgSrc} fill priority alt='' />
        </div>
    )
}

export default DevImg
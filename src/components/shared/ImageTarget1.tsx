import React from 'react';

interface ImageTargetProps {
    param1?: string;
    param2?: string;

}

export const ImageTarget1 = ({ param1, param2 }: ImageTargetProps) => {
    return (
        <img style={{
            borderRadius: '5%',
            width: '90%',
            height: "200px",
            objectFit: "cover",
        }} src={param1} alt={param2} />

    );
};

export default ImageTarget1;
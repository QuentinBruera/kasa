import React from "react";
import Card from "./Card";

const Gallery = ({ propsData }) => {
    return (
        <div>
            {propsData.map((propsData, index) => (
                <Card propsData={propsData} key={index} />
            ))}
        </div>
    );
};

export default Gallery;

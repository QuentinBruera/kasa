import React from "react";

// Importation du module Card
import Card from "./Card";

const Gallery = ({ propsData }) => {
    return (
        <section className="galleryContainer">
            <div className="galleryContainer__gridContainer">
                {propsData.map((propsData, index) => (
                    <Card
                        propsData={propsData}
                        index={index}
                        key={propsData.id + index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;

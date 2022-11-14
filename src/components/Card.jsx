import React from "react";

const Card = ({ propsData }) => {
    // console.log(propsData);
    return (
        <div class="thumb">
            <img class="thumb__img" src={propsData.cover} alt="" />
            <div class="thumb__container-title">
                <p class="thumb__container-title__title">{propsData.title}</p>
            </div>
        </div>
    );
};

export default Card;

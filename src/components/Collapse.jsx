import React from "react";

// Importation de l'icone flèche
import ArrowIcon from "../assets/arrow.svg";

const Collapse = ({ propsData1, propsData2, props3 }) => {
    const bigOrlittle =
        props3 === "big" ? "bigCollapseContainer" : "littleCollapseContainer";

    return (
        <details className={bigOrlittle + "__details"}>
            <summary className={bigOrlittle + "__details__summary"}>
                <p className={bigOrlittle + "__details__summary__p"}>
                    {propsData1}
                </p>
                <img
                    className={bigOrlittle + "__details__summary__img"}
                    src={ArrowIcon}
                    alt="Arrow Icon"
                />
            </summary>
            <div>
                {Array.isArray(propsData2) ? (
                    <ul className={bigOrlittle + "__details__ul"}>
                        {propsData2.map((data, index) => (
                            <li
                                className={bigOrlittle + "__details__ul__li"}
                                key={data + index}
                            >
                                {data}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={bigOrlittle + "__details__p"}>{propsData2}</p>
                )}
            </div>
        </details>
    );
};

export default Collapse;

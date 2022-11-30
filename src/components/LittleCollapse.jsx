import React from "react";

// Importation du composant Collapse
import Collapse from "./Collapse";

const LittleCollapse = ({ oneHousingData }) => {
    return (
        <section className="littleCollapseContainer">
            <Collapse
                propsData1={"Description"}
                propsData2={oneHousingData.description}
                props3={"little"}
            />
            <Collapse
                propsData1={"Équipements"}
                propsData2={oneHousingData.equipments}
                props3={"little"}
            />
        </section>
    );
};

export default LittleCollapse;

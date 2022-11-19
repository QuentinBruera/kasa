// useParams sert à récuperer le paramètre dans l'url
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import LogementBody from "../components/LogementBody";
import Error from "./Error";
import LittleCollapse from "../components/LittleCollapse";
import Footer from "../components/Footer";

const Logement = ({ propsData }) => {
    // si je met "let paramas" je vais avoir un objet "id: valeur"
    // si je met "let { id }" je vais avoir directement la valeur en brut
    let { id } = useParams();

    // Vérifie si l'id du path correspond à un id dans la base de donnée, si oui récupère l'objet.
    const oneHousing = propsData.find((res) => res.id === id);

    return oneHousing === undefined ? (
        <div>
            <Error />
        </div>
    ) : (
        <div>
            <Header />
            <Carousel oneHousingData={oneHousing.pictures} />
            <LogementBody oneHousingData={oneHousing} />
            <LittleCollapse oneHousingData={oneHousing} />
            <Footer />
        </div>
    );
};

export default Logement;

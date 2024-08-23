import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Banner from "../../components/banner/Banner";
import imgBanner from "../../assets/images/banner/homeBanner.png";
import Slideshow from "../../components/ficheLogement/Slideshow";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((location) => location.id === id);

  if (!logement) {
    // Si l'ID du logement n'existe pas, rediriger vers la page d'erreur
    return <Navigate to="/error" />;
  }

  return (
    <main>
        <Slideshow images={logement.pictures} />
    </main>
  );
}

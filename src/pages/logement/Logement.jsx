import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/ficheLogement/Slideshow";
import Info from "../../components/ficheLogement/Info";
import Note from "../../components/ficheLogement/Note";
import Proprio from "../../components/ficheLogement/Proprio";

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
        <section className="infoContent">
        <Info />
        <div className="ProprioNote">
          <Note />
          <Proprio />
        </div>
        </section>
    </main>
  );
}

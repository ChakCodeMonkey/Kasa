import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Slideshow from "../../components/ficheLogement/Slideshow";
import Info from "../../components/ficheLogement/Info";
import Note from "../../components/ficheLogement/Note";
import Proprio from "../../components/ficheLogement/Proprio";
import Collapse from "../../components/collapse/Collapse";

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((location) => location.id === id);

  if (!logement) {
    // Si l'ID du logement n'existe pas, rediriger vers la page d'erreur
    return <Navigate to="/error" />;
  }

  // Préparer les données pour les collapses
  const descriptionData = {
    title: "Description",
    content: logement.description
  };

  const equipementsData = {
    title: "Équipements",
    content: (
      <ul>
        {logement.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    )
  };

  return (
    <main>
      <Slideshow images={logement.pictures} />
      <section className="infoContent">
        <Info />
        <div className="ProprioNote">
          <Proprio />
          <Note rating={logement.rating} />
        </div>
      </section>
      <section className="CollapsePart">
        <Collapse data={[descriptionData]} />
        <Collapse data={[equipementsData]} />
      </section>
    </main>
  );
}

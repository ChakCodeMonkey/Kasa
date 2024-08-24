
import { useParams } from 'react-router-dom'; // Pour récupérer l'id de l'URL
import logements from '../../data/logements.json'; // Assurez-vous que le chemin est correct

export default function Info() {
  const { id } = useParams(); // Récupère l'id de l'URL
  const logement = logements.find(log => log.id === id); // Cherche le logement correspondant

  if (!logement) {
    return <p>Logement non trouvé</p>; // Affiche un message si le logement n'est pas trouvé
  }

  return (
    <div className="infoProprio">
        <p className='name'>{logement.host.name}</p>
        <img src={logement.host.picture} alt={logement.host.name} className='host'/>
    </div>
  );
}

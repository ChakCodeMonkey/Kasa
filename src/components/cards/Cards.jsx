import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ location }) {
  return (
  <Link to={"../../logement/" + location.id} key={ "" + location.id}>
    <article>
      <img src={location.cover} alt={location.title} className="imgLogement"/>
      <div className="blackFilter"></div>
      <h2>{location.title}</h2>
    </article>
  </Link>
  );
}

Card.PropTypes = {
  location: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
}
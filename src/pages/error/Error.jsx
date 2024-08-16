import { NavLink } from "react-router-dom";

export default function Error() {
  return (
    <>
      <main className="error-container">
        <p className="error-nombre">404</p>
        <p className="error-texte">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className="error-lien">
          Retourner sur la page d'accueil
        </NavLink>
      </main>
    </>
  );
}
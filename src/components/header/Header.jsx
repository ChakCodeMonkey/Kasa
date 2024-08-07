import logo from "./../../assets/images/logo/LOGO.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__figure">
        <img className="logo" src={logo} alt="Logo de Kasa" />
      </figure>
      <nav>
        <ul>
          {/*utilisation de Navlink pour définir une class et changer la route*/}
          <NavLink to= "/" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>Accueil</li>
          </NavLink>
          <NavLink to = "/about" className={({isActive}) => (isActive ? "underline" : "")}>
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
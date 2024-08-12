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
          <li>
            <NavLink to= "/" className={({isActive}) => (isActive ? "underline" : "")}>Accueil</NavLink>
          </li>
          <li>
            <NavLink to = "/about" className={({isActive}) => (isActive ? "underline" : "")}> A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
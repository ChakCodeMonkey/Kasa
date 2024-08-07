import logo from "./../assets/images/logo/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__figure">
        <img className="logo" src={logo} alt="Logo de Kasa" />
      </figure>
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  );
}
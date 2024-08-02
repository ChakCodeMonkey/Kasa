import logo from "../../assets/images/logo/LOGO.svg";

export default function Header() {
  return (
    <header className="header">
      <figure className="header__figure">
        <img className="logo" src={logo} alt="logo" />
      </figure>
    </header>
  );
}
import logoFooter from "./../../assets/images/logo/logo_footer.png";

export default function Header() {
  return (
    <footer className="footer">
        <img className="logo__footer" src={logoFooter} alt="Logo Footer de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
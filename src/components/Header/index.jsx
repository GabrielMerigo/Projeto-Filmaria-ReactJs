import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">Filmaria</Link>
      <Link to="/favoritos" className="favoritos">Salvos</Link>
    </header>
  )
}

export default Header
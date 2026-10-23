import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="cabecalho">
      <Link to="/" className="logo-link">
        <img
          src="/images/logo.png"
          alt="Logo da Festa do Pato"
          height={100}
        />
      </Link>

      <nav className="main-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/candidaturas"
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          Candidaturas
        </NavLink>
        <NavLink to="/flyer">Flyer</NavLink>
      </nav>

      <Link to="/bilhetes" className="botao-cta">
        Comprar Bilhete
      </Link>
    </header>
  )
}

export default Header
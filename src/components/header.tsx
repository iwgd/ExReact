import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Header() {
  return (
    <header className="sticky top-0 z-[100] flex flex-row items-center justify-between bg-[#FFD700] px-8 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <Link to="/" className="inline-block">
        <img
          src={Logo}
          alt="Logo da Festa do Pato"
          className="h-24 w-auto object-contain"
        />
      </Link>

      <nav className="flex flex-row items-center gap-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `font-extrabold text-green-700 hover:underline ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/candidaturas"
          className={({ isActive }) =>
            `font-extrabold text-green-700 hover:underline ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Candidaturas
        </NavLink>
        <NavLink
          to="/flyer"
          className={({ isActive }) =>
            `font-extrabold text-green-700 hover:underline ${
              isActive ? 'underline' : ''
            }`
          }
        >
          Flyer
        </NavLink>
      </nav>

      <Link
        to="/bilhetes"
        className="whitespace-nowrap rounded-xl bg-[#2E7D32] px-5 py-2.5 text-[0.95rem] font-bold text-white shadow-[0_2px_6px_rgba(0,0,0,0.15)] transition duration-200 ease-in-out hover:bg-[#1B5E20] hover:-translate-y-0.5 hover:shadow-[0_4px_10px_rgba(0,0,0,0.2)] active:translate-y-0"
      >
        Comprar Bilhete
      </Link>
    </header>
  )
}

export default Header

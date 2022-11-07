import { NavLink } from "react-router-dom";

const Header = () => {
  return <header>
    <img src="logo.svg" alt="Logo" />
    <nav>
      <ul>
        <NavLink to="/cadastrar-empresa">
          Dados empresa
        </NavLink>
        <NavLink to="/cadastrar-vaga">
          Cadastro vagas
        </NavLink>
        <NavLink to="/cadastrar-teste">
          Cadastro teste
        </NavLink>
        <NavLink to="/resultados">
          Resultados
        </NavLink>
      </ul>
    </nav>
  </header>
}

export default Header;

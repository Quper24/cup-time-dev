import { Link } from "react-router-dom";
import LogoImg from "../assets/image/logo.svg";

export const Header = () => (
  <header className="header">
    <div className="container header__container">
      <Link to="/" className="header__logo">
        <img src={LogoImg} alt="Логотип Cup Time" />
      </Link>

      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">
              Чай
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">
              Кофе
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">
              Чайники
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">
              Турки
            </a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">
              Прочее
            </a>
          </li>
        </ul>
      </nav>

      <Link to="/cart" className="header__cart-icon">
        4
      </Link>

      <button className="header__menu-button"></button>
    </div>
  </header>
);

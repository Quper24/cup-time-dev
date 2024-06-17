import LogoImg from "../assets/image/logo.svg";
export const Header = () => (
  <header className="header">
    <div className="container header__container">
      <a className="header__logo">
        <img src={LogoImg} alt="Логотип Cup Time" />
      </a>

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

      <a href="/cart" className="header__cart-icon">
        4
      </a>

      <button className="header__menu-button"></button>
    </div>
  </header>
);

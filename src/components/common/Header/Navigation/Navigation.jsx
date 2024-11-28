import { NavLink, Link } from 'react-router-dom';

// import logo from '../../../../assets/static/icons/baby.svg';

// import logo from '/public/cat-logo.png';

import logo from '/cat-logo.png?url';

import s from './Navigation.module.css';
import Icon from '../../Icon/Icon';
import Button from '../../../../uikit/Button/Button';
import Logo from '../Logo/Logo';

const Navigation = () => {
  return (
    <div className={s.navLogoWrapper}>
      <Logo />
      {/* <Link to="/" className={s.logo}>
        <img className={s.icon} src={logo} alt="Logo of Faust" />
        <p className={s.title}>FAUST &middot; ФАУСТ</p>
      </Link> */}

      <div className={s.btnsWrapper}>
        <button type="button" className={s.searchBtn}>
          <Icon id="search" fill="#fff" />
        </button>

        <Button className="header-btn" title="Вхід" />
      </div>

      {/* <NavLink to="/" className={s.logo}>
        <img src={logo} alt="logo" />
      </NavLink>

      <NavLink className={` ${s.logoText} `} to="/">
        FAUST &middot; ФАУСТ
      </NavLink> */}

      {/* <div className={s.navWrapper}>
        <NavLink
          className={({ isActive }) =>
            `${s.navLink} ${isActive ? s.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
      </div> */}

      {/* <NavLink className={s.logoText} to="/">
        Logo
      </NavLink> */}
    </div>
  );
};

export default Navigation;

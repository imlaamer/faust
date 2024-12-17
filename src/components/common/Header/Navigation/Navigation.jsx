import { NavLink, Link } from 'react-router-dom';

import Icon from '../../Icon/Icon';
import Button from '../../../../uikit/Button/Button';
import Logo from '../Logo/Logo';
import UserAvatar from '../../../UserAvatar/UserAvatar';

import s from './Navigation.module.css';
import BurgerBtn from '../../../NavBar/BurgerBtn/BurgerBtn';

const Navigation = ({isOpen, onOpen}) => {
  const isLoggedIn = true;
  // const isLoggedIn = false;
  // const { isLoggedIn, loading } = useAuth();

  return (
    <nav className={s.navigation}>
      <BurgerBtn onOpen={onOpen} />
      <div className={s.box}>
        <Logo />

        <div className={s.btnsWrapper}>
          <button type="button" className={s.searchBtn}>
            <Icon id="search" fill="#fff" />
          </button>

          {isLoggedIn ? (
            <UserAvatar className="headerAvatar" />
          ) : (
            <Button className="header-btn" title="Вхід" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

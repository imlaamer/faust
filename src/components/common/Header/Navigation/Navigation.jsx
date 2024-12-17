import { NavLink, Link } from 'react-router-dom';

import Icon from '../../Icon/Icon';
import Button from '../../../../uikit/Button/Button';
import Logo from '../Logo/Logo';
import UserAvatar from '../../../UserAvatar/UserAvatar';

import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = true;
  // const isLoggedIn = false;
  // const { isLoggedIn, loading } = useAuth();

  return (
    <nav className={s.navigation}>
      <Logo />

      <div className={s.btnsWrapper}>
        <button type="button" className={s.searchBtn}>
          <Icon id="search" fill="#fff" />
        </button>

        {isLoggedIn ? (
          <UserAvatar className='headerAvatar'/>
        ) : (
          <Button className="header-btn" title="Вхід" />
        )}
      </div>
    </nav>
  );
};

export default Navigation;

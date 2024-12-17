import { useState } from 'react';
import s from './NavBar.module.css';
import Icon from '../common/Icon/Icon';
import NavMenu from '../BurgerMenu/NavMenu/NavMenu';

const NavBar = ({ isOpen, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <nav>
      <div className={s.backdrop} onClick={handleBackdropClick}></div>
      <aside className={s.sideMenu}>
        <NavMenu />
      </aside>
    </nav>
  );
};

export default NavBar;

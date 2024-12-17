import Container from '../Container/Container';
import Navigation from './Navigation/Navigation';

// import BurgerMenu from '../../BurgerMenu/BurgerMenu';

import s from './Header.module.css';
import NavBar from '../../NavBar/NavBar';
import { useState } from 'react';
import Icon from '../Icon/Icon';
import BurgerBtn from '../../NavBar/BurgerBtn/BurgerBtn';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
    // setIsOpen(!isOpen);
  };

  return (
    <header className={s.header}>
      <Container className="header-container">
        {isOpen && <NavBar isOpen={isOpen} onClose={onClose} />}

        <Navigation isOpen={isOpen} onOpen={onOpen} />
      </Container>
    </header>
  );
};

export default Header;

//  <BurgerMenu

// isHomePage={isHomePage}
// handleOpenModal={handleOpenModal}
// handleCloseModal={handleCloseModal}
// isLogModalOpen={isLogModalOpen}
// isSignupModalOpen={isSignupModalOpen}
// isLogoutModalOpen={isLogoutModalOpen}
//  />;

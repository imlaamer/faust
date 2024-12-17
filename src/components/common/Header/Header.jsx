import Container from '../Container/Container';
import Navigation from './Navigation/Navigation';

import BurgerMenu from '../../BurgerMenu/BurgerMenu';

import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <Container className="header-container">
        <BurgerMenu
        // isHomePage={isHomePage}
        // handleOpenModal={handleOpenModal}
        // handleCloseModal={handleCloseModal}
        // isLogModalOpen={isLogModalOpen}
        // isSignupModalOpen={isSignupModalOpen}
        // isLogoutModalOpen={isLogoutModalOpen}
        />
        <Navigation />
      </Container>
    </header>
  );
};

export default Header;
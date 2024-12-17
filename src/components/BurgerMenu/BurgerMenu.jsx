import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

// import Icon from '../common/Icon/Icon';
// import Button from '../../uikit/Button/Button';
// import Modal from '../common/Modal/Modal';
// import ToggleButton from './ToggleButton/ToggleButton';
// import LogoutCard from '../LogoutCard/LogoutCard';

// import LoginForm from '../forms/LoginForm/LoginForm';
// import SignupForm from '../forms/SignupForm/SignupForm';
// import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

import s from './BurgerMenu.module.css';
import ToggleButton from './ToggleButton/ToggleButton';
import NavMenu from './NavMenu/NavMenu';

const variants = {
  open: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 20,
    },
  },
  closed: {
    x: '100%',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 450,
      damping: 40,
      duration: 0.1,
    },
  },
};

const BurgerMenu = ({
  isHomePage,
  handleCloseModal,
  handleOpenModal,
  isSignupModalOpen,
  isLogModalOpen,
  isLogoutModalOpen,
}) => {
  const [isOpen, setOpen] = useState(false);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(`.${s.sidebar}`) &&
        !event.target.closest(`.${s.button}`)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  // const handleOpen = (e) => {
  //   setOpen(false);
  //   setTimeout(() => {
  //     // handleOpenModal(e);
  //   }, 200);
  // };

  return (
    <motion.div className={s.sidebar} animate={isOpen ? 'open' : 'closed'}>
      <motion.div
        className={s.bg}
        variants={variants}
        animate={{ opacity: isOpen ? 1 : 0 }}
      >
        <NavMenu onMouseLeave={() => setOpen(false)} />
      </motion.div>
      <ToggleButton
        setOpen={setOpen}
        isHomePage={isHomePage}
        handleCloseModal={handleCloseModal}
      />
    </motion.div>
  );
};

export default BurgerMenu;

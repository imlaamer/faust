import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/Header/Logo/Logo';
import Icon from '../../common/Icon/Icon';

import s from './NavMenu.module.css';

const NavMenu = () => {
  const [isOpenProjects, setIsOpenProjects] = useState(false);

  const [isOpenFaustInfo, setIsOpenFaustInfo] = useState(false);

  const projectLinks = [
    {
      url: '/',
      project: 'Останні оновлення',
    },
    {
      url: '/',
      project: 'Фільтр',
    },
    {
      url: '/',
      project: 'Рандом',
    },
  ];

  const faustInfoLinks = [
    { url: '/', project: 'Правила сайту' },
    { url: '/', project: 'вступ до ФАУСТу' },
    { url: '/', project: 'Звязок з адмінами' },
    { url: '/', project: 'FAQ' },
  ];

  return (
    <nav>
      <Logo />

      <NavLink
        className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
        to="/"
        // onClick={() => {
        //   setOpen(false);
        // }}
      >
        <Icon id="home-navbar" />
        Головна
      </NavLink>

      <div className={s.projectsDropdown}>
        <Icon id="book-navbar" />
        <h3>Проєкти</h3>

        {/* {!isOpenReadMore ? 'Read more' : 'Hide'} */}

        <button onClick={() => setIsOpenProjects(!isOpenProjects)}>
          {isOpenProjects ? (
            <Icon id="arrow_up-1" />
          ) : (
            <Icon id="arrow_down-1" />
          )}
        </button>

        {isOpenProjects &&
          projectLinks?.map((link, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `${s.navLink} ${isActive ? s.active : ''}`
              }
              to={link.url}
              // onClick={() => {
              //   setOpen(false);
              // }}
            >
              {link.project}
            </NavLink>
          ))}
      </div>

      <div className={s.faustInfoDropdown}>
        <Icon id="two-person-navbar" fill="#fff" stroke="none" />
        <h3>Про ФАУСТ</h3>

        <button onClick={() => setIsOpenFaustInfo(!isOpenFaustInfo)}>
          {isOpenFaustInfo ? (
            <Icon id="arrow_up-1" />
          ) : (
            <Icon id="arrow_down-1" />
          )}
        </button>

        {isOpenFaustInfo &&
          faustInfoLinks?.map((link, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `${s.navLink} ${isActive ? s.active : ''}`
              }
              to={link.url}
              // onClick={() => {
              //   setOpen(false);
              // }}
            >
              {link.project}
            </NavLink>
          ))}
      </div>

      <Icon id="settings-navbar" stroke="#fff" fill="none" />
      <NavLink
        className={({ isActive }) => `${s.navLink} ${isActive ? s.active : ''}`}
        to="/"
        // onClick={() => {
        //   setOpen(false);
        // }}
      >
        Налаштування
      </NavLink>
    </nav>
  );
};

export default NavMenu;

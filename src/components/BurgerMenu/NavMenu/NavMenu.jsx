import clsx from 'clsx';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/Header/Logo/Logo';
import Icon from '../../common/Icon/Icon';
import ArrowToggle from '../../common/ArrowToggle/ArrowToggle';

import s from './NavMenu.module.css';

const projectLinks = [
  {
    url: '/',
    project: 'Останні оновлення',
  },
  {
    url: 'com',
    project: 'Фільтр',
  },
  {
    url: 'com',
    project: 'Рандом',
  },
];

const faustInfoLinks = [
  { url: '/', project: 'Правила сайту' },
  { url: 'com', project: 'Вступ до ФАУСТу' },
  { url: 'com', project: 'Звязок з адмінами' },
  { url: 'com', project: 'FAQ' },
];

const NavMenu = () => {
  const [isOpenProjects, setIsOpenProjects] = useState(false);
  const [isOpenFaustInfo, setIsOpenFaustInfo] = useState(false);

  const handleProjectsClick = () => {
    setIsOpenProjects(!isOpenProjects);
  };

  const handleFaustClick = () => {
    setIsOpenFaustInfo(!isOpenFaustInfo);
    //   setIsRotated((prev) => !prev);
  };

  return (
    <div
      className={s.navContainer}
      //   onMouseLeave={() => {
      //     setIsOpenProjects(false);
      //     setIsOpenFaustInfo(false);
      //   }}
    >
      <Logo className="navMenuLogo" />
      <NavLink
        className={({ isActive }) =>
          `${s.btn} ${s.navLink} ${isActive ? s.active : ''}`
        }
        to="/"
        // onClick={() => {
        //   setOpen(false);
        // }}
      >
        <Icon id="home-navbar" />
        Головна
      </NavLink>
      <div
        className={s.projectsDropdown}
        // onMouseLeave={() => setIsOpenProjects(false)}
      >
        {/* onMouseLeave={() => setIsOpenProjects(false)} */}
        <button
          type="button"
          className={clsx(s.btn, s.projectsBtn)}
          onClick={handleProjectsClick}
          onMouseEnter={() => setIsOpenProjects(true)}
          //   onMouseLeave={handleProjectsClick}
        >
          <div className={s.iconTitleBox}>
            <Icon id="book-navbar" />
            <h3>Бібліотека</h3>
          </div>

          <ArrowToggle
            isToggle={isOpenProjects}
            handleClick={handleProjectsClick}
          />
        </button>
        <div className={s.linksList}>
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
      </div>

      <div
        className={s.faustInfoDropdown}
        // onMouseLeave={() => setIsOpenFaustInfo(false)}
      >
        <button
          type="button"
          className={clsx(s.btn, s.faustInfoBtn)}
          onClick={handleFaustClick}
          onMouseEnter={() => setIsOpenFaustInfo(true)}
        >
          <div className={s.iconTitleBox}>
            <Icon id="two-person-navbar" fill="#fff" stroke="none" />
            <h3>Про ФАУСТ</h3>
          </div>

          <ArrowToggle
            isToggle={isOpenFaustInfo}
            handleClick={handleFaustClick}
          />
        </button>
        <div className={s.linksList}>
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
      </div>
      <NavLink
        className={({ isActive }) =>
          `${s.btn} ${s.navLink}  ${isActive ? s.active : ''}`
        }
        to="com"
        // onClick={() => {
        //   setOpen(false);
        // }}
      >
        <Icon id="settings-navbar" stroke="#fff" fill="none" />
        Налаштування
      </NavLink>
    </div>
  );
};

export default NavMenu;

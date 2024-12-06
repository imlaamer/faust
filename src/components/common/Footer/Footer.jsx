import { Link, NavLink } from 'react-router-dom';
import cat from '../../../assets/static/images/cat-footer-2x-min.png';
import faust from '../../../assets/static/images/faust-2x.png';

import Container from '../Container/Container';
import Icon from '../Icon/Icon';

import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <Link to="/" className={s.logo}>
          <img src={cat} alt="Black cat" width="100" className={s.cat} />
          <img src={faust} alt="Faust logo" width="76" />
        </Link>

        <ul className={s.navigation}>
          <li>
            <NavLink className={s.link}>Правила сайту</NavLink>
          </li>
          <li>
            <NavLink className={s.link}>FAQ - питання/відповіді</NavLink>
          </li>
          <li>
            <NavLink className={s.link}>DMCA</NavLink>
          </li>
          <li>
            <NavLink className={s.link}>Кодекс Фауст</NavLink>
          </li>
          <li>
            <NavLink className={s.link}>Зв’язок з адмінами</NavLink>
          </li>
        </ul>

        <ul className={s.socials}>
          <li>
            <Link to="https://telegram.org" className={s.link} target="_blank">
              <Icon id="telegram" fill="#fff" width="20" height="20" />
            </Link>
          </li>
          <li>
            <Link to="https://tiktok.com" className={s.link} target="_blank">
              <Icon id="tiktok" fill="#fff" width="20" height="20" />
            </Link>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;

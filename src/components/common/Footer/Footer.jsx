import { Link } from 'react-router-dom';
import cat from '../../../assets/static/images/cat-footer-1x-min.png';
import Container from '../Container/Container';

import s from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <Container className="footer-container">
        <img src={cat} alt="Black cat" />
        <Link to="/" className={s.logo}>
          Фауст
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;

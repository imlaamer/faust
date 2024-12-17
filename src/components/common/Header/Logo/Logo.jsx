import { Link } from 'react-router-dom';
import logo from '/logo-min.png?url';

import s from './Logo.module.css';

const Logo = () => {
  return (
    <Link to="/" className={s.logo}>
      <img
        className={s.icon}
        src={logo}
        alt="Logo of Faust"
        width="38"
      />
      <p className={s.title}>FAUST &middot; ФАУСТ</p>
    </Link>
  );
};

export default Logo;



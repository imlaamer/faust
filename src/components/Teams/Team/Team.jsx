import clsx from 'clsx';
import s from './Team.module.css';

const Team = ({ team }) => {
  const { url, description, name } = team;
  return (
    <li className={clsx(s.item)}>
      <img src={url} alt={description} className={s.image} />
      <p className={s.text}>{name}</p>
    </li>
  );
};

export default Team;

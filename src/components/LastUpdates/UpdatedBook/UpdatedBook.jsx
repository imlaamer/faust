import teamIcon from '../../../assets/static/icons/team.svg';

import Book from '../../Book/Book';

import s from './UpdatedBook.module.css';

const UpdatedBook = ({ book }) => {
  const { chapter, title, team } = book;

  return (
    <li>
      <Book isTitle={true} title={title} />

      <p className={s.chapterText}>Розділ {chapter}</p>
      <div className={s.wrapper}>
        <img src={teamIcon} alt="Team icon" />
        <p className={s.teamTitle}>{team}</p>
      </div>
    </li>
  );
};

export default UpdatedBook;

import teamIcon from '../../../assets/static/icons/team.svg';

import Book from '../../Book/Book';

import s from './UpdatedBook.module.css';

const UpdatedBook = ({ book }) => {
  const { chapter, title, team } = book;

  return (
    <li className={s.item}>
      <Book isTitle={true} title={title} className='updatedBook' />
    
      <p className={s.chapterText}>Розділ {chapter}</p>
      <div className={s.wrapper}>
        <img src={teamIcon} alt="Team icon" className={s.teamIcon} />
        <p className={s.teamTitle}>{team}</p>
      </div>
    </li>
  );
};

export default UpdatedBook;

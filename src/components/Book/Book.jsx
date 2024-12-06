import { Link } from 'react-router-dom';
import book from '../../assets/static/images/placeholder/book-placeholder-2x-min.jpg';

// import book from '../../assets/static/images/placeholder/book-placeholder-1x-min.jpg';

import s from './Book.module.css';

const Book = ({ isTitle = false, title = 'Ще тільки світанок', url = '#' }) => {
  return (
    <Link className={s.wrapper} to={url}>
      <img src={book} alt="Manhwa cover" className={s.book} />
      <p className={s.title}>Перекладається</p>
      <p className={s.subtitle}>Манхва</p>

      {isTitle && <p className={s.bookTitle}>{title}</p>}
    </Link>
  );
};

export default Book;

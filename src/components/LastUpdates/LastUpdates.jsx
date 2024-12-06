import { nanoid } from 'nanoid';
import Container from '../common/Container/Container';
import s from './LastUpdates.module.css';
import UpdatedBook from './UpdatedBook/UpdatedBook';

// 6 items
const updatedBooks = [
  {
    id: nanoid(),
    title: 'Ще тільки світанок',
    chapter: '15',
    team: 'Філіжанка чаю',
  },
  {
    id: nanoid(),
    title: 'Милий дім',
    chapter: '48',
    team: 'Toman Ukraine',
  },
  {
    id: nanoid(),
    title: 'Лиходійка, що перевернула світ',
    chapter: '25',
    team: 'Філіжанка чаю',
  },
  {
    id: nanoid(),
    title: 'Лиходійка, що перевернула світ',
    chapter: '25',
    team: 'Філіжанка чаю',
  },
  {
    id: nanoid(),
    title: 'Лиходійка, що перевернула світ',
    chapter: '25',
    team: 'Філіжанка чаю',
  },
  {
    id: nanoid(),
    title: 'Лиходійка, що перевернула світ',
    chapter: '25',
    team: 'Філіжанка чаю',
  },
];

const LastUpdates = () => {
//   console.log(updatedBooks);
  return (
    <section className={s.lastUpdates}>
      <Container>
        <h2 className={s.title}>Останні оновлення</h2>

        <ul className={s.list}>
          {updatedBooks?.map((book) => (
            <UpdatedBook key={book.id} book={book} />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default LastUpdates;

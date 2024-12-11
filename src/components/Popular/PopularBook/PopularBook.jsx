import Book from '../../Book/Book';
import Icon from '../../common/Icon/Icon';

import star from '../../../assets/static/icons/star.svg';
import bookmark from '../../../assets/static/icons/bookmark.svg';
import chat from '../../../assets/static/icons/chat.svg';

import s from './PopularBook.module.css';

const PopularBook = () => {
  return (
    <li className={s.item}>
      <Book className="popularBook" />

      <div className={s.wrapper}>
        <h3 className={s.bookTitle}>Ще тільки світанок</h3>
        <h4 className={s.bookSubtitle}>그저 여명일 뿐 / Just twilight</h4>

        <ul className={s.iconsList}>
          {/* {[1, 2, 3].map((item, index) => (
            <li className={s.iconItem}>
              <img src={star} alt="Star icon" className={s.icon} width="22" />
              <p>35</p>
            </li>
          ))} */}
          <li className={s.iconItem}>
            <img src={star} alt="Star icon" className={s.icon} width="22" />
            <p>35</p>
          </li>

          <li className={s.iconItem}>
            <img
              src={bookmark}
              alt="Bookmark icon"
              className={s.icon}
              width="22"
            />
            <p>89</p>
          </li>

          <li className={s.iconItem}>
            <img src={chat} alt="Chat icon" className={s.icon} width="22" />
            <p>26</p>
          </li>
        </ul>

        <h5 className={s.subtitle}>Опис:</h5>
        <p className={s.text}>
          Вона була схожа на тайфун. Той, що необережно порушив його спокійні
          дні. - Знайомство зі мною не принесе тобі нічого хорошого. - Чому?
          Через чутки про тебе? Мені на них начхати. Захистити її чи зламати?
          Захоплений суперечливими почуттями, він зрозумів, що хоче стати
          частиною світу Юн Джуньон.
        </p>
      </div>
    </li>
  );
};

export default PopularBook;

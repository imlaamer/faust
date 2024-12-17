import clsx from 'clsx';

import s from './ArrowToggle.module.css';

const ArrowToggle = ({ isToggle, handleClick }) => {
  return (
    <div className={s.container} onClick={handleClick}>
      <div
        className={clsx(s.arrow, {
          [s.rotate]: isToggle,
        })}
      ></div>
    </div>
  );
};

export default ArrowToggle;

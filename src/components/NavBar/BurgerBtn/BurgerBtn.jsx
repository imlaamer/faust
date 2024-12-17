import s from './BurgerBtn.module.css';

const BurgerBtn = ({ onOpen }) => {
  return (
    <div className={s.button} onClick={onOpen}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;

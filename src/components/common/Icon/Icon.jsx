import IconsSprite from '../../../assets/static/icons/sprite.svg';

import s from './Icon.module.css';

const Icon = ({
  id,
  className = 'icon',
  width = '24',
  height = '24',
  fill = '#fff',
  stroke = 'none',
}) => {
  return (
    <svg
      className={s[className]}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use href={`${IconsSprite}#icon-${id}`} />
    </svg>
  );
};

export default Icon;

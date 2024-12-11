import Spinner from '../Spinner/Spinner';

import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <Spinner height="100" width="100" color="#fff" />
    </div>
  );
};

export default Loader;

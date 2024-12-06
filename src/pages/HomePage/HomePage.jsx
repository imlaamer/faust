import LastUpdates from '../../components/LastUpdates/LastUpdates';
import News from '../../components/News/News';
import Popular from '../../components/Popular/Popular';
import Teams from '../../components/Teams/Teams';

import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <Popular />

      <News />

      <Teams />

      <LastUpdates />
    </>
  );
};

export default HomePage;

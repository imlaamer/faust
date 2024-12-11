import { nanoid } from 'nanoid';
import clsx from 'clsx';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

import 'swiper/css/bundle';
import './swiper-teams.css';

import Team from './Team/Team';
import Container from '../common/Container/Container';

import tea from '../../assets/static/images/tea-2x-min.png';

import tomanUkraine from '../../assets/static/images/toman-ukraine-2x-min.png';

import cat from '../../assets/static/images/cat-in-hat-2x-min.png';

import godHelp from '../../assets/static/images/god-help-2x-min.png';

import s from './Teams.module.css';
import { useEffect, useState } from 'react';

const teams = [
  {
    id: nanoid(),
    url: tomanUkraine,
    description: 'Team Toman Ukraine',
    name: 'Toman Ukraine',
  },
  {
    id: nanoid(),
    url: tea,
    description: 'Team Filizhanka chayu',
    name: 'Філіжанка чаю',
  },
  {
    id: nanoid(),
    url: cat,
    description: 'Team Kit u shlyapi',
    name: 'Кіт у шляпі',
  },

  {
    id: nanoid(),
    url: godHelp,
    description: 'Team Bozhe pomozhy',
    name: 'Боже поможи',
  },
  {
    id: nanoid(),
    url: godHelp,
    description: 'Team Bozhe pomozhy',
    name: 'Боже поможи',
  },
];

const Teams = () => {
  const [isScreen905, setIsScreen905] = useState(window.innerWidth >= 905);

  useEffect(() => {
    const handleResize = () => {
      setIsScreen905(window.innerWidth >= 905);
    };

    // Додаємо слухача подій зміни розміру вікна
    window.addEventListener('resize', handleResize);

    // Перевіряємо розмір під час першого рендера
    handleResize();

    // Видаляємо слухача подій під час демонтажу компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={s.teams}>
      <Container>
        <h2 className={s.title}>Команди, які довірились нам</h2>

        {/* мінус s.list  */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          //   spaceBetween={26}
          slidesPerView={!isScreen905 ? 3 : 4}
          //   desktop {4} ?
          navigation
          className="swiper-teams"
          //   pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          //   onSlideChange={() => console.log('slide change')}
          //   onSwiper={(swiper) => console.log(swiper)}
        >
          {teams?.map((team) => (
            <SwiperSlide key={team.id}>
              <Team team={team} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Teams;

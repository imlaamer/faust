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

const teams = [
  {
    id: nanoid(),
    url: tea,
    description: 'Team Filizhanka chayu',
    name: 'Філіжанка чаю',
  },
  {
    id: nanoid(),
    url: tomanUkraine,
    description: 'Team Toman Ukraine',
    name: 'Toman Ukraine',
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
];

const Teams = () => {
  return (
    <section className={s.teams}>
      <Container>
        <h2 className={s.title}>Команди, які довірились нам</h2>

        {/* мінус s.list  */}
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          //   spaceBetween={26}
          slidesPerView={3}
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

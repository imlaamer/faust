import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import Container from '../common/Container/Container';
import PopularBook from './PopularBook/PopularBook';

import book from '../../assets/static/images/placeholder/book-placeholder-2x-min.jpg';
// import book from '../../assets/static/images/placeholder/book-placeholder-1x-min.jpg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper-popular.css';
import s from './Popular.module.css';

const Popular = () => {
  return (
    <section className={s.popular}>
      <Container>
        <div className={s.wrapper}>
          <h1 className={s.visuallyHidden}></h1>
          <h2 className={s.title}>Популярне</h2>

          <div className={s.content}>
            <Swiper
              pagination={{
                type: 'fraction',
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="slider-popular"
            >
              {[1, 2, 3, 4, 5].map((book, index) => (
                <SwiperSlide key={index}>
                  <PopularBook />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Popular;

import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';
import './swiper-popular.css'

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import book from '../../assets/static/images/placeholder/book-placeholder-2x-min.jpg';

// import book from '../../assets/static/images/placeholder/book-placeholder-1x-min.jpg';

import Container from '../common/Container/Container';
import PopularBook from './PopularBook/PopularBook';

import s from './Popular.module.css';

const Popular = () => {
  return (
    <section className={s.popular}>
      <Container>
        <div className={s.wrapper}>
          <h1 className={s.visuallyHidden}></h1>
          <h2 className={s.title}>Популярне</h2>

          {/* <ul className={s.list}> */}
          {/* books?.map((book, index) => (
      <PopularBookItem key={index} book={book} />
      ) */}
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
          {/* </ul> */}
        </div>
      </Container>
    </section>
  );
};

export default Popular;

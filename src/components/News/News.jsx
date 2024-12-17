import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel, Keyboard } from 'swiper/modules';

import Container from '../common/Container/Container';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swiper-news.css';
import s from './News.module.css';

const News = () => {
  return (
    <section className={s.news}>
      <Container>
        <h2 className={s.title}>Новини сайту</h2>

        <Swiper
          cssMode={true}
          navigation={true}
          // pagination={true}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="slider-news"
        >
          {[1, 2, 3, 4, 5].map((news, index) => (
            <SwiperSlide key={index}>
              <div className={s.newsContainer}>
                <div className={s.wrapper}>
                  <div className={s.background}></div>
                  <div className={s.content}>
                    <h3 className={s.subtitle}>У Фауста є новини для тебе!</h3>
                    <div className={s.item}>
                      <p className={s.text}>
                        20.05.2025 з 16:00 по 20:00 проводитимуться технічні
                        роботи на сайті!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default News;

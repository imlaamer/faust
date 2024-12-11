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

        <div className={s.newsContainer}>
          <div className={s.wrapper}>
            <div className={s.background}></div>

            <div className={s.content}>
              <h3 className={s.subtitle}>У Фауста є новини для тебе!</h3>
              <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                // pagination={{ clickable: true }}
                // slidesPerView={1}
                className="slider-news"
                //   onSlideChange={() => console.log('slide change')}
                //   onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className={s.item}>
                    <p className={s.text}>
                      20.05.2025 з 16:00 по 20:00 проводитимуться технічні
                      роботи на сайті!
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={s.item}>
                    <p className={s.text}>
                      20.05.2025 з 16:00 по 20:00 проводитимуться технічні
                      роботи на сайті!
                    </p>
                  </div>
                </SwiperSlide>
                {/* так не працює */}
                {/* {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={s.item}>
                    <p className={s.text}>
                      20.05.2025 з 16:00 по 20:00 проводитимуться технічні
                      роботи на сайті!
                    </p>
                  </div>
                </SwiperSlide>
              ))} */}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default News;

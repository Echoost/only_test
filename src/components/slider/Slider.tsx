import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import classes from './Slider.module.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import gsap from 'gsap';

export const Slider = () => {
    const data = useSelector((state: RootState) => state.data);
    const activeData = data.find(element => element.isActive).info;
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            gsap.fromTo(
                swiperRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5 },
            );
        }
    }, [activeData]);

    return (
        <div ref={swiperRef}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={3}
                navigation
                onSwiper={swiper => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {activeData.map(element => (
                    <SwiperSlide key={element.id}>
                        <div className={classes.slider_title}>
                            {element.year}
                        </div>
                        <div className={classes.slider_descr}>
                            {element.text}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

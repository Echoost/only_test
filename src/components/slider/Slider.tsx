import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Scrollbar, Pagination, A11y } from 'swiper/modules';
import classes from './Slider.module.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import gsap from 'gsap';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { PageNavigator } from '../page-navigator/PageNavigator';
export const Slider = () => {
    const data = useSelector((state: RootState) => state.data);
    const activeData = data.find(element => element.isActive).info;
    const swiperRef = useRef(null);
    const { isMobile } = useDeviceDetect();
    console.log(isMobile);
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
        <div className={classes.wrapper} ref={swiperRef}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={80}
                slidesPerView={isMobile ? 'auto' : 3}
                navigation={!isMobile}
                pagination={isMobile}
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
                {isMobile && <PageNavigator />}
            </Swiper>
        </div>
    );
};

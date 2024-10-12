import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import { setPage } from '@/shared/slices/dataSlice';
import classes from './Circle.module.scss';
import gsap from 'gsap';
import { useEffect } from 'react';
import { Dates } from '../dates/Dates';

export const Circle = () => {
    const data = useSelector((state: RootState) => state.data);
    const activeData = data.find(element => element.isActive);
    const dispatch = useDispatch();
    const circleRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef(null);

    const handleChangePage = (page: number, index: number) => {
        dispatch(setPage(page));
    };

    useEffect(() => {
        animateDotChange(activeData.page - 1);
        rotateDots(activeData.page - 1);
    }, [data]);

    const rotateDots = (clickedIndex: number) => {
        const angle = 360 / data.length;
        const targetAngle = 300;
        const currentRotation = clickedIndex * angle;
        const rotationAngle = targetAngle - currentRotation;
        if (circleRef.current) {
            gsap.to(circleRef.current, {
                rotation: rotationAngle,
                transformOrigin: 'center center',
                duration: 1,
                ease: 'power1.inOut',
                onUpdate: () => {
                    document
                        .querySelectorAll(`.${classes.dot}`)
                        .forEach(dot => {
                            (dot as HTMLElement).style.transform =
                                `translate(-50%, -50%) rotate(-${rotationAngle}deg)`;
                        });
                },
            });
        }
    };

    const animateDotChange = (clickedIndex: number) => {
        data.forEach((element, index) => {
            const isActive = index === clickedIndex;
            const dot = document.querySelectorAll(`.${classes.dot}`)[index];
            if (dot) {
                gsap.to(dot, {
                    width: isActive ? 56 : 6,
                    height: isActive ? 56 : 6,
                    duration: 0.1,
                    ease: 'power1.inOut',
                });
            }
        });
    };

    useEffect(() => {
        if (titleRef.current) {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 2, ease: 'circ.in' },
            );
        }
    }, [activeData]);

    return (
        <div className={classes.wrapper}>
            <Dates />
            <div className={classes.circle} ref={circleRef}>
                {data.map((element, index) => (
                    <div
                        className={`${classes.dot} ${element.isActive ? classes.dot_active : ''}`}
                        key={element.id}
                        onClick={() => handleChangePage(element.page, index)}
                    >
                        {element.page}
                    </div>
                ))}
            </div>
            <div className={classes.title} ref={titleRef}>
                {activeData.title}
            </div>
        </div>
    );
};

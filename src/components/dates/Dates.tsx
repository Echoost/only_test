import { useSelector } from 'react-redux';
import classes from './Dates.module.scss';
import { RootState } from '@/app/store';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

export const Dates = () => {
    const data = useSelector((state: RootState) => state.data);
    const activeDates = data.find(element => element.isActive).info;
    const blueDateRef = useRef(null);
    const pinkDateRef = useRef(null);
    const [prevBlueYear, setPrevBlueYear] = useState(activeDates[0].year);
    const [prevPinkYear, setPrevPinkYear] = useState(
        activeDates[activeDates.length - 1].year,
    );

    useEffect(() => {
        const blueYear = activeDates[0].year;
        const pinkYear = activeDates[activeDates.length - 1].year;

        gsap.fromTo(
            blueDateRef.current,
            { innerText: prevBlueYear },
            {
                innerText: blueYear,
                duration: 0.7,
                ease: 'power1.in',
                snap: { innerText: 1 },
                onUpdate: () => {
                    blueDateRef.current.innerText = Math.round(
                        blueDateRef.current.innerText,
                    );
                },
            },
        );

        gsap.fromTo(
            pinkDateRef.current,
            { innerText: prevPinkYear },
            {
                innerText: pinkYear,
                duration: 0.7,
                ease: 'power1.in',
                snap: { innerText: 1 },
                onUpdate: () => {
                    pinkDateRef.current.innerText = Math.round(
                        pinkDateRef.current.innerText,
                    );
                },
            },
        );

        setPrevBlueYear(blueYear);
        setPrevPinkYear(pinkYear);
    }, [activeDates]);

    return (
        <div className={classes.wrapper}>
            <div className={classes.blue_date} ref={blueDateRef}>
                {activeDates[0].year}
            </div>
            <div className={classes.pink_date} ref={pinkDateRef}>
                {activeDates[activeDates.length - 1].year}
            </div>
        </div>
    );
};

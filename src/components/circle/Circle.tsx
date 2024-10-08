import { useState } from 'react';
import classes from './Circle.module.scss';

function createArrayOfObjects(length: number) {
    const array = [];
    for (let i = 1; i <= length; i++) {
        array.push({
            number: i,
            id: crypto.randomUUID(),
            active: i === length,
        });
    }
    return array;
}

export const Circle = () => {
    // const [activeDot, setActiveDot] = useState(createArrayOfObjects(6));
    const [dots, setDots] = useState(createArrayOfObjects(6));
    const handleClickDot = (id: string) => {
        const activeDot = dots.find(element => element.active);
        setDots(prevDots =>
            prevDots.map(element => ({
                ...element,
                active:
                    (element.id === activeDot.id && false) ||
                    (element.id === id && true),
            })),
        );
    };
    return (
        <div className={classes.circle}>
            {dots.map(element => (
                <div
                    className={`${classes.dot} ${element.active ? classes.dot_active : ''}`}
                    key={element.id}
                    onClick={() => {
                        handleClickDot(element.id);
                    }}
                    id={element.id}
                >
                    {element.number}
                </div>
            ))}
        </div>
    );
};

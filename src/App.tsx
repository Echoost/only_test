import React, { useState } from 'react';
import classes from './App.module.scss';
import { Slider } from '@/components/slider/Slider';
import { Circle } from './components/circle/Circle';
import { Pagination } from './components/pagination/Pagination';
import { useSelector } from 'react-redux';
import { Dates } from './components/dates/Dates';

export const App = () => {
    return (
        <>
            <div className={classes.border}>
                <div className={classes.wrapper}>
                    <div className={classes.divider}></div>
                    <div className={classes.container}>
                        <h1 className={classes.title}>Исторические даты</h1>
                        <Pagination />
                    </div>
                    <Dates />
                    <div
                        className={`${classes.line} ${classes.vertical}`}
                    ></div>
                    <div
                        className={`${classes.line} ${classes.horizontal}`}
                    ></div>
                    <Slider />
                    <Circle />
                </div>
            </div>
        </>
    );
};

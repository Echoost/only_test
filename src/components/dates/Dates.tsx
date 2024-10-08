import { useSelector } from 'react-redux';
import classes from './Dates.module.scss';
import { RootState } from '@/app/store';
export const Dates = () => {
    const data = useSelector((state: RootState) => state.data);
    const activeDates = data.find(element => element.isActive).info;
    console.log(activeDates);
    return (
        <>
            <div className={classes.blue_date}>{activeDates[0].year}</div>
            <div className={classes.pink_date}>
                {activeDates[activeDates.length - 1].year}
            </div>
        </>
    );
};

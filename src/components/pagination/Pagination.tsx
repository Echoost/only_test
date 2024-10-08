import { RootState } from '@/app/store';
import classes from './Pagination.module.scss';
import ArrowLeftIcon from '@/public/icons/arrow_left.svg';
import ArrowRightIcon from '@/public/icons/arrow_right.svg';
import { useSelector } from 'react-redux';
export const Pagination = () => {
    const data = useSelector((state: RootState) => state.data);
    const currentPage = data.filter(element => element.isActive);
    const pageLine = `0${currentPage[0].page}/0${data.length}`;
    
    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.pagination_indicator}>{pageLine}</div>
                <div className={classes.arrow_block}>
                    <div
                        className={`${classes.arrow} ${classes.arrow_disabled}`}
                    >
                        <ArrowLeftIcon />
                    </div>
                    <div className={classes.arrow}>
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>
        </>
    );
};

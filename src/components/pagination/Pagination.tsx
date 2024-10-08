import { RootState } from '@/app/store';
import classes from './Pagination.module.scss';
import ArrowLeftIcon from '@/public/icons/arrow_left.svg';
import ArrowRightIcon from '@/public/icons/arrow_right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '@/shared/slices/dataSlice';
export const Pagination = () => {
    const data = useSelector((state: RootState) => state.data);
    const currentPage = data.filter(element => element.isActive);
    const pageLine = `0${currentPage[0].page}/0${data.length}`;
    const dispatch = useDispatch();

    const handlePageDown = () => {
        dispatch(setPage(currentPage[0].page - 1));
    };

    const handlePageUp = () => {
        dispatch(setPage(currentPage[0].page + 1));
    };

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.pagination_indicator}>{pageLine}</div>
                <div className={classes.arrow_block}>
                    <div
                        onClick={handlePageDown}
                        className={`${classes.arrow} ${classes.arrow_disabled}`}
                    >
                        <ArrowLeftIcon />
                    </div>
                    <div onClick={handlePageUp} className={classes.arrow}>
                        <ArrowRightIcon />
                    </div>
                </div>
            </div>
        </>
    );
};

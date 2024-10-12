import { RootState } from '@/app/store';
import classes from './PageNavigator.module.scss';
import ArrowLeftIcon from '@/public/icons/arrow_left.svg';
import ArrowRightIcon from '@/public/icons/arrow_right.svg';
import ArrowRightIconMobile from '@/public/icons/arrow_right_mobile.svg';
import ArrowLeftIconMobile from '@/public/icons/arrow_left_mobile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '@/shared/slices/dataSlice';
import useDeviceDetect from '@/hooks/useDeviceDetect';

export const PageNavigator = () => {
    const data = useSelector((state: RootState) => state.data);
    const currentPage = data.filter(element => element.isActive);
    const { isMobile } = useDeviceDetect();
    const pageLine = `0${currentPage[0].page}/0${data.length}`;
    const dispatch = useDispatch();
    const handlePageDown = () => {
        if (currentPage[0].page === 1) {
            return;
        }
        dispatch(setPage(currentPage[0].page - 1));
    };

    const handlePageUp = () => {
        if (currentPage[0].page === data.length) {
            return;
        }
        dispatch(setPage(currentPage[0].page + 1));
    };

    return (
        <>
            <div className={classes.wrapper}>
                <div className={classes.pagination_indicator}>{pageLine}</div>
                <div className={classes.arrow_block}>
                    <div
                        onClick={handlePageDown}
                        className={
                            currentPage[0].page === 1
                                ? `${classes.arrow} ${classes.arrow_disabled}`
                                : classes.arrow
                        }
                    >
                        {isMobile ? <ArrowLeftIconMobile /> : <ArrowLeftIcon />}
                    </div>
                    <div
                        onClick={handlePageUp}
                        className={
                            currentPage[0].page === data.length
                                ? `${classes.arrow} ${classes.arrow_disabled}`
                                : classes.arrow
                        }
                    >
                        {isMobile ? (
                            <ArrowRightIconMobile />
                        ) : (
                            <ArrowRightIcon />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

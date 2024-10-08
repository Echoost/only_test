import { RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Circle.module.scss';
import { setPage } from '@/shared/slices/dataSlice';
export const Circle = () => {
    const data = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();

    const handleChangePage = (page: number) => {
        dispatch(setPage(page));
    };

    return (
        <div className={classes.circle}>
            {data.map(element => (
                <div
                    className={`${classes.dot} ${element.isActive ? classes.dot_active : ''}`}
                    key={element.id}
                    onClick={() => handleChangePage(element.page)}
                >
                    {element.page}
                </div>
            ))}
        </div>
    );
};

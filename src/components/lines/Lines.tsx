import classes from './Lines.module.scss';

export const Lines = () => {
    return (
        <div className={classes.wrapper}>
            <div className={`${classes.line} ${classes.vertical}`}></div>
            <div className={`${classes.line} ${classes.horizontal}`}></div>
        </div>
    );
};

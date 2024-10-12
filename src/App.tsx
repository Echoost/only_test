import classes from './App.module.scss';
import { Slider } from '@/components/slider/Slider';
import { Circle } from '@/components/circle/Circle';
import { PageNavigator } from '@/components/page-navigator/PageNavigator';
import { Dates } from '@/components/dates/Dates';
import { Lines } from '@/components/lines/Lines';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import { Title } from '@/components/title/Title';
export const App = () => {
    const { isMobile } = useDeviceDetect();
    return (
        <>
            <div className={classes.border}>
                <div className={classes.wrapper}>
                    <div className={classes.divider}></div>
                    <div className={classes.container}>
                        <Title />

                        {isMobile && (
                            <>
                                <Dates />
                                <Lines />
                                <Slider />
                            </>
                        )}
                        {!isMobile && <PageNavigator />}
                    </div>

                    {!isMobile && (
                        <>
                            <Lines />
                            <Circle />
                            <Slider />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import style from './Event.module.scss';
import icon from '../../../assets/icons/arrow-white.svg';

const Event = (props) => {
    // Use the useInView hook to detect when the event component is in the viewport
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5,
        config: { duration: 3000 }, // Set the threshold value to determine visibility percentage in the viewport
    });

    // Define the animation properties using useSpring
    const slideInAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : 'translateX(-50px)',
    });

    return (
        <>
            <animated.div ref={inViewRef} className={style.eventWrapper} style={slideInAnimation}>
                <img src={props.img} alt='Client img' className={style.eventWrapper__img} />
                <div className={style.eventWrapper__contentWrapper}>
                    <h3>{props.title}</h3>
                    <p>{props.describe}</p>
                    <img className={style.eventWrapper__icon} src={icon} alt='arrow icon' />
                </div>
            </animated.div>
        </>
    );
}

export default Event;

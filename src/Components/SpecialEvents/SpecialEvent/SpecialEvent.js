import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import style from './SpecialEvent.module.scss';
import icon from '../../../assets/icons/arrow-white.svg';

const SpecialEvent = (props) => {
    // Use the useInView hook to detect when the special event component is in the viewport
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Set the threshold value to determine visibility percentage in the viewport
    });

    // Define the animation properties using useSpring
    const bounceAnimation = useSpring({
        to: {
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(-20px)',
        },
        config: {
            tension: 300, // Adjust tension for the bounce effect
            friction: 15,
            duration: 1000,
             // Adjust friction for the bounce effect
        },
    });

    return (
        <>
            <animated.div ref={inViewRef} className={style.specialEventWrapper} style={bounceAnimation}>
                <img src={props.img} alt='Client img' className={style.specialEventWrapper__img} />
                <div className={style.specialEventWrapper__contentWrapper}>
                    <h3>{props.title}</h3>
                    <p>{props.describe}</p>
                    <img className={style.specialEventWrapper__icon} src={icon} alt='arrow icon' />
                </div>
            </animated.div>
        </>
    );
}

export default SpecialEvent;

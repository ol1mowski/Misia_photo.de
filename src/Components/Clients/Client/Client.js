import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import style from './Client.module.scss';
import icon from '../../../assets/icons/arrow-white.svg';

const Client = (props) => {
    // Use the useInView hook to detect when the client component is in the viewport
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5,
        config: { duration: 2000 }, // Set the threshold value to determine visibility percentage in the viewport
    });

    // Define the animation properties using useSpring
    const fadeInAnimation = useSpring({
        opacity: inView ? 1 : 0,
    });

    return (
        <>
            <animated.div ref={inViewRef} className={style.clientWrapper} style={fadeInAnimation}>
                <img src={props.img} alt='Client img' className={style.clientWrapper__img} />
                <div className={style.clientWrapper__contentWrapper}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <img className={style.clientWrapper__icon} src={icon} alt='arrow icon' />
                </div>
            </animated.div>
        </>
    );
}

export default Client;

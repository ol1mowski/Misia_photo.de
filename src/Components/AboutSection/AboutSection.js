import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import style from './AboutSection.module.scss';
import img from '../../assets/images/second_image.png';
import icon from '../../assets/icons/arrow-down.svg';

const AboutSection = () => {
    // Use the useInView hook to detect when the section is in the viewport
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Set the threshold value to determine visibility percentage in the viewport
    });

    // Define the animation properties using useSpring
    const fadeInAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        config: { duration: 1000 },
    });

    return (
        <>
            <section ref={inViewRef} className={style.wrapperSection}>
                <animated.div className={style.wrapperSection__header} style={fadeInAnimation}>
                    <h2>
                        Trochę o MMF
                    </h2>
                </animated.div>
                <div className={style.wrapperSection__image}>
                    <img className={style.wrapperSection__image__img} src={img} alt='image' />
                </div>
                <animated.div className={style.wrapperSection__contentWrapper} style={fadeInAnimation}>
                    <div className={style.wrapperSection__icon}>
                        <img src={icon} alt='arrow icon' />
                    </div>
                    <div className={style.wrapperSection__content}>
                        <p>
                            Prowadzone przez wielokrotnie nagradzaną fotografkę Misię Małecką, MMF to zaufane studio fotograficzne specjalizujące się
                            w fotografii komercyjnej i eventowej.
                        </p>
                    </div>
                </animated.div>
            </section>
        </>
    );
}

export default AboutSection;

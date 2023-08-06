import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import style from './Contact.module.scss';

const Contact = () => {
    // Use the useInView hook to detect when the contact section is in the viewport
    const [inViewRef, inView] = useInView({
        triggerOnce: true, // Animation triggers only once
        threshold: 0.5, // Set the threshold value to determine visibility percentage in the viewport
    });

    // Define the animation properties using useSpring for fade-in effect
    const fadeInAnimation = useSpring({
        opacity: inView ? 1 : 0,
    });

    // Use the useSpring hook to create a zoom-in effect when scrolling down
    const zoomInAnimation = useSpring({
        transform: inView ? 'scale(1)' : 'scale(1.1)',
        config: { duration: 2000 },
    });

    return (
        <>
            <animated.footer ref={inViewRef} className={style.contactContainer} style={fadeInAnimation}>
                <div className={style.contactContainer__contentWrapper}>
                    <div className={style.contactContainer__contentWrapper__header}>
                        <animated.h1 style={zoomInAnimation}>
                            Skontaktuj się z MMF
                        </animated.h1>
                    </div>
                    <div className={style.contactContainer__contentWrapper__firstP}>
                        <animated.p style={zoomInAnimation}>
                            Napisz do nas na witaj@naprawdeswietnastrona.pl
                        </animated.p>
                    </div>
                    <div className={style.contactContainer__contentWrapper__button}>
                        <animated.button style={zoomInAnimation}>
                            Umów się na sesję
                        </animated.button>
                    </div>
                </div>
            </animated.footer>
        </>
    );
}

export default Contact;

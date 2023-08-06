import React from 'react';
import { useSpring, animated } from 'react-spring';
import style from './HomePage.module.scss';

const HomePage = () => {
    // Define the animation properties using useSpring
    const fadeInAnimation = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 2000 }, // Adjust the animation duration as needed
    });

    return (
        <>
            <header className={style.homeContainer}>
                <div className={style.homeContainer__logo}>
                    MMF
                </div>
                <animated.div className={style.homeContainer__contentWrapper} style={fadeInAnimation}>
                    <div className={style.homeContainer__contentWrapper__firstP}>
                        <p>
                            Wielokrotnie nagradzane studio fotograficzne
                        </p>
                    </div>
                    <div className={style.homeContainer__contentWrapper__header}>
                        <h1>
                            MISIA MAŁECKA
                            FOTOGRAFIA
                        </h1>
                    </div>
                    <div className={style.homeContainer__contentWrapper__button}>
                        <button>
                            Stwórzmy coś razem!
                        </button>
                    </div>
                </animated.div>
            </header>
        </>
    );
}

export default HomePage;

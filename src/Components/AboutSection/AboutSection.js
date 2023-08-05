import style from './AboutSection.module.scss';
import img from '../../assets/images/second_image.png';
import icon from '../../assets/icons/arrow-down.svg';

const AboutSection = () => {
    return (
        <>
            <section className={style.wrapperSection}>
                <div className={style.wrapperSection__header}>
                    <h2>
                        Trochę o MMF
                    </h2>
                </div>
                <div className={style.wrapperSection__image}>
                    <img className={style.wrapperSection__image__img} src={img} alt='image' />
                </div>
                <div className={style.wrapperSection__contentWrapper}>
                    <div className={style.wrapperSection__icon}>
                        <img src={icon} alt='arrow icon' />
                    </div>
                    <div className={style.wrapperSection__content}>
                        <p>
                            Prowadzone przez wielokrotnie nagradzaną fotografkę Misię Małecką, MMF to zaufane studio fotograficzne specjalizujące się
                            w fotografii komercyjnej i eventowej.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection;
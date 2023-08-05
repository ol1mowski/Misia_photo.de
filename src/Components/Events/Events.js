import style from './Events.module.scss';
import brithday from '../../assets/images/brithday.png';
import session from '../../assets/images/session.png';
import weeding from '../../assets/images/weding.png';
import Event from './Event/Event';

const Events = () => {

    const events = [
        {
            id: 1,
            img: brithday,
            title: 'Urodziny',
            describe: 'Wyróżnione przez topowy blog lifestylowy',
        },
        {
            id: 2,
            img: session,
            title: 'Sejsa biurowa',
            describe: 'Zdjęcia używane w firmowych broszurach',
        },
        {
            id: 3,
            img: weeding,
            title: 'Ślub',
            describe: 'Sesja do czasopisma ślubnego',
        },
    ];

    return (
        <>
            <section className={style.eventsWrapper}>
                <div className={style.eventsWrapper__header}>
                    <h2>
                        Wydarzenia
                    </h2>
                </div>
                <div className={style.eventsWrapper__wrapper}>
                    {events.map((item) =>
                        <Event
                            img={item.img}
                            title={item.title}
                            describe={item.describe}
                            key={item.id}
                        />)}
                </div>
            </section>
        </>
    )
}

export default Events;
import SpecialEvent from './SpecialEvent/SpecialEvent';
import style from './SpecialEvents.module.scss';
import art from '../../assets/images/art.png';
import concert from '../../assets/images/concert.png';
import fashion from '../../assets/images/fashion.png';


const SpecialEvents = ( ) => {
    const events = [
        {
            id: 1,
            img: art,
            title: 'Sztuka teatralna',
            describe: 'Fotografujemy również wydarzenia sceniczne',
        },
        {
            id: 2,
            img: concert,
            title: 'Koncert muzyczny',
            describe: 'Obsługujemy imprezy muzyczne',
        },
        {
            id: 3,
            img: fashion,
            title: 'Moda inkluzywna',
            describe: 'Organizujemy również sesje zdjęciowe o specjalnym przesłaniu',
        },
    ];

    return (
        <>
            <section className={style.specialEventsWrapper}>
                <div className={style.specialEventsWrapper__header}>
                    <h2>
                        Wydarzenia Spcjalne
                    </h2>
                </div>
                <div className={style.specialEventsWrapper__wrapper}>
                    {events.map((item) =>
                        <SpecialEvent
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

export default SpecialEvents;
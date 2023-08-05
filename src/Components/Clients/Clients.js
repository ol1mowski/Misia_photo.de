import Client from './Client/Client';
import style from './Clients.module.scss';
import women from '../../assets/images/women.png';
import women2 from '../../assets/images/women2.png';
import man from '../../assets/images/man.png';

const Clients = () => {

    const clients = [
        {
            id: 1,
            img: women,
            name: 'Natalia',
            description: 'Zdjęcie portretowe z okazji okrągłych urodzi',
        },
        {
            id: 2,
            img: man,
            name: 'Alex',
            description: "Zdjęcie okładkowe do katalogu modu",
        },
        {
            id: 3,
            img: women2,
            name: 'Zuzanna',
            description: 'Zdjęcie portretowe na główną stronę artystki',
        }
    ];


    return (
        <>
            <section className={style.clientsContainer}>
                <div className={style.clientsContainer__header}>
                    <h2>
                        FOTOGRAFIA
                    </h2>
                    <h2 className={style.clientsContainer__header__h2}>
                        PORTRETOWA
                    </h2>
                </div>
                <div className={style.clientsContainer__wrapper}>
                    {clients.map((item) =>
                        <Client
                            img={item.img}
                            name={item.name}
                            description={item.description}
                            key={item.id}
                        />
                    )}
                </div>
            </section>
        </>
    )
}

export default Clients;
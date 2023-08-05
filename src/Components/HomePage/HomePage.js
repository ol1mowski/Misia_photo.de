import style from './HomePage.module.scss';

const HomePage = () => {
    return (
        <>
            <section className={style.homeContainer}>
                <div className={style.homeContainer__logo}>
                    MMF
                </div>
                <div className={style.homeContainer__contentWrapper}>
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
                </div>
            </section>
        </>
    )
}

export default HomePage;
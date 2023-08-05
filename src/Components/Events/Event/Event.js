import style from './Event.module.scss';
import icon from '../../../assets/icons/arrow-white.svg';

const Event = (props) => {
    return(
        <>
            <div className={style.eventWrapper}>
                <img src={props.img} alt='Client img' className={style.eventWrapper__img}/>
                <div className={style.eventWrapper__contentWrapper}>
                    <h3>{props.title}</h3>
                    <p>{props.describe}</p>
                    <img className={style.eventWrapper__icon} src={icon} alt='arrow icon' />
                </div>
            </div>
        </>
    )
}

export default Event;
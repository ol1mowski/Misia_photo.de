import style from './SpecialEvent.module.scss';
import icon from '../../../assets/icons/arrow-white.svg';

const SpecialEvent = (props) => {
    return(
        <>
         <div className={style.specialEventWrapper}>
                <img src={props.img} alt='Client img' className={style.specialEventWrapper__img}/>
                <div className={style.specialEventWrapper__contentWrapper}>
                    <h3>{props.title}</h3>
                    <p>{props.describe}</p>
                    <img className={style.specialEventWrapper__icon} src={icon} alt='arrow icon' />
                </div>
            </div>
        </>
    )
}

export default SpecialEvent;
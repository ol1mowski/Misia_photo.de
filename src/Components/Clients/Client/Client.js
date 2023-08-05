import style from './Client.module.scss';
import icon from '../../../assets/icons/arrow-white.svg';

const Client = (props) => {
    return(
        <>
            <div className={style.clientWrapper}>
                <img src={props.img} alt='Client img' className={style.clientWrapper__img}/>
                <div className={style.clientWrapper__contentWrapper}>
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                    <img className={style.clientWrapper__icon} src={icon} alt='arrow icon' />
                </div>
            </div>
        </>
    )
}

export default Client;
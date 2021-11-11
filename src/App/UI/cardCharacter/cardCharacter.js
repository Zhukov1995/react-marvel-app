import './cardCharacter.scss';

const CardCharacter = (props) => {
    return (
        <div className="cardCharacter" onClick={props.onClick} tabIndex={props.tabIndex}>
            <img src={props.src} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default CardCharacter;
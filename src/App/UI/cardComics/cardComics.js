import './cardComics.scss';


const CardComics = (props) => {
    return (
        <div className="cardComics" onClick={props.onClick}>
            <img src={props.thumbnail} alt={props.title} />
            <h3 className="cardComics__title">{props.title}</h3>
            <h3 className="cardComics__price">{props.price}</h3>
        </div>
    )
}

export default CardComics;
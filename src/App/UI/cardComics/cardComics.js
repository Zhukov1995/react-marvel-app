import './cardComics.scss';
import comicsImg from './x-men.png';

const CardComics = () => {
    return (
        <div className="cardComics">
            <img src={comicsImg} alt="imageCardComics" />
            <h3 className="cardComics__title">X-Men: Days of Future Past</h3>
            <h3 className="cardComics__price">NOT AVAILABLE</h3>
        </div>
    )
}

export default CardComics;
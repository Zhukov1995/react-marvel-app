import './randomCharacter.scss';
import { Component } from 'react';
import MarvelService from '../../../service/MarvelService';
import MyButton from '../../../UI/myButton/myButton';

import shield from './shield.png';
import mjolnir from './mjolnir.png';
import Spinner from '../../../UI/spinner/spinner';
import Error from '../../../UI/error/error';

class RandomCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: {},
            loading: true,
            error: false
        };
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.updateCharacter()
    }

    onLoading = (character) => {
        this.setState(() => ({
            character,
            loading: false,
        }));
    }

    onError = (character) => {
        this.setState(() => ({
            character,
            loading: false,
            error: true
        }));
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelService.getCharacterById(id)
            .then(this.onLoading)
            .catch(this.onError)
        this.setState(() => ({
            loading: true
        }))
    }

    render() {
        const { character, loading, error } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const errror = error ? <Error /> : null;
        const view = !(spinner || error) ? <View character={character} /> : null;
        return (
            <div className='randomCharacter'>
                {spinner}
                {errror}
                {view}
                <div className="randomTry">
                    <div className="randomTry_title">
                        <h3>Random character for today!</h3>
                        <h3>Do you want to get to know him better?</h3>
                    </div>
                    <h3>Or choose another one</h3>
                    <MyButton titleButton='TRY IT' className='btn_1' onClick={() => this.updateCharacter()}/>
                    <div className="decoration">
                        <img className='shield' src={shield} alt="shield" />
                        <img className='mjolnir' src={mjolnir} alt="mjolnir" />
                    </div>
                </div>
            </div>
        )
    }
}

const View = ({ character }) => {
    const { name, thumbnail, description, homepage, wiki } = character;
    const _NOT_THUMBNAIL = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg';
    let flagImg = thumbnail === _NOT_THUMBNAIL ? false : true;

    return (
        <div className="randomInfo">
            <img src={thumbnail} alt="random_character_image" className={flagImg ? null : 'notImg'} />
            <div className="description">
                <h3>{name}</h3>
                <p>{description}</p>
                <div className="buttons">
                    <MyButton
                        titleButton='HOMEPAGE'
                        className='btn_1'
                        href={homepage}
                    />
                    <MyButton
                        titleButton='WIKI'
                        background='#5C5C5C'
                        className='btn_1'
                        href={wiki}
                    />
                </div>
            </div>
        </div>
    )
}

export default RandomCharacter;
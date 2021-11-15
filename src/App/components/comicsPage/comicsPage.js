import Banner from '../banner/banner';

import { Component } from 'react';

import './comicsPage.scss';
import ComicsListItem from './comicsListItem/comicsListItem';
import ComicsList from './comicsList/comicsList';

import MarvelService from '../../service/MarvelService';
import Spinner from '../../UI/spinner/spinner';
import Error from '../../UI/error/error';

class ComicsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeComics: {},
            loading: false,
            error: false,
        }
    }

    marvelService = new MarvelService()

    getActiveComics = (id) => {
        this.marvelService.getComicsById(id)
            .then(this.loadingActiveComics)
            .catch(this.errorActiveComics)
        this.setState(({ loading }) => ({
            loading: true
        }))
    }

    loadingActiveComics = (result) => {
        this.setState(({ activeComics, loading }) => ({
            activeComics: result,
            loading: false
        }))
    }

    errorActiveComics = (result) => {
        this.setState(({ error }) => ({
            error: true
        }))
    }

    goBackToAll = () => {
        this.setState(({ activeComics }) => ({
            activeComics: {},
        }))
    }


    render() {
        const { activeComics, loading, error } = this.state;

        const flag = Object.keys(activeComics).length;

        const loadingComicsItem = loading ? <Spinner /> : null;
        const errorComicsItem = error ? <Error /> : null;

        return (
            <div className="comicsPage">
                <Banner />
                <ComicsList getActiveComics={this.getActiveComics} display={flag ? 'none' : 'grid'} />
                {loadingComicsItem}
                {errorComicsItem}
                <ComicsListItem goBackToAll={this.goBackToAll} activeComics={activeComics} display={flag ? 'flex' : 'none'} />
            </div>
        )
    }
}


export default ComicsPage;
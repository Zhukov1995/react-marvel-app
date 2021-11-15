import { Component } from "react";

import MyButton from "../../../UI/myButton/myButton";
import Error from "../../../UI/error/error";
import Spinner from "../../../UI/spinner/spinner";
import CardComics from "../../../UI/cardComics/cardComics";

import MarvelService from "../../../service/MarvelService";

class ComicsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comicsList: [],
            loading: true,
            loadingBtn: false,
            error: false,
            offset: 608,
        }
    }

    marvelServise = new MarvelService();

    componentDidMount() {
        this.marvelServise.getComics()
            .then(this.loadComics)
            .catch(this.errorComics)
    }

    loadComics = (comics) => {
        this.setState(({ comicsList }) => ({
            comicsList: comics,
            loading: false
        }))
    }

    errorComics = (comics) => {
        this.setState(() => ({
            loading: false,
            error: true
        }))
    }

    getMoreComics = () => {
        this.setState(({ offset, loadingBtn }) => ({
            offset: offset + 8,
            loadingBtn: true
        }));
        const { offset } = this.state;
        this.marvelServise.getComics(offset)
            .then(this.changeComics)
            .catch(this.errorComics)
    }

    changeComics = (newComics) => {
        const { comicsList } = this.state;
        const copy = [...comicsList, ...newComics];
        this.setState(({ comicsList, loadingBtn }) => ({
            comicsList: copy,
            loadingBtn: false,
        }))
    }

    render() {
        const { comicsList, loading, error, loadingBtn } = this.state;
        const { getActiveComics, display } = this.props;

        const comics = comicsList.map((item, index) => {
            return <CardComics title={item.title} price={item.price} thumbnail={item.thumbnail} key={index} onClick={() => getActiveComics(item.id)} />
        })

        const errorComics = error ? <Error margin='50px 465px' /> : null;
        const loadingComics = loading ? <Spinner margin='100px 520px' /> : null;
        const resultComics = !(error && loading) ? comics : null;

        const style = {
            display: display
        }


        return (
            <div style={style}>
                <div className="comicsCardList">
                    {errorComics}
                    {loadingComics}
                    {resultComics}
                </div>
                <MyButton
                    titleButton='LOAD PAGE'
                    className={loadingBtn ? 'btn_2 loading' : 'btn_2'}
                    margin='20px 465px'
                    onClick={this.getMoreComics}
                    disabled={loadingBtn}
                />
            </div>
        )
    }
}


export default ComicsList;
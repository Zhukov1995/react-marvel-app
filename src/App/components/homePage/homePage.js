import './homePage.scss';
import bgImageBottom from './bg asset.png';
import { Component } from 'react';

import CardCharacter from '../../UI/cardCharacter/cardCharacter'
import MyButton from '../../UI/myButton/myButton';
import Description from './description/description'
import RandomCharacter from './randomCharacter/randomCharacter';

import MarvelService from '../../service/MarvelService';
import Spinner from '../../UI/spinner/spinner';
import Error from '../../UI/error/error';
import SelectCharacter from './description/selectCharacter/selectCharacter';
import ErrorBoundary from '../../UI/errorBoundary/errorBpundary';


class HomePage extends Component {
    state = {
        charList: [],
        charCount: 219,
        loading: true,
        error: false,
        charDescription: {},
        loadingBtn: false,
        listenScroll: 0
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService.getAllCharacters()
            .then(this.loadingList)
            .catch(this.errorList);
        window.addEventListener('scroll', this.listenerScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenerScroll);
    }

    getMoreCharacters = () => {
        this.setState(({ charCount, loadingBtn }) => ({
            charCount: charCount + 9,
            loadingBtn: true
        }))
        const { charCount } = this.state;
        this.marvelService.getMoreCharacters(charCount)
            .then(this.changeList)
            .catch(this.errorList);
    }

    changeList = (newChar) => {
        const { charList } = this.state;
        const copy = [...charList, ...newChar];
        this.setState(() => ({
            charList: copy,
            loadingBtn: false
        }));
    }

    loadingList = (charList) => {
        this.setState({
            charList,
            loading: false,
        })
    }

    errorList = (error) => {
        this.setState({
            loading: false,
            error: true,
        })
    }

    activeDescription = (item) => {
        this.setState(() => ({
            charDescription: item,
        }))
    }

    listenerScroll = () => {
        const {listenScroll} = this.state;
        console.log(listenScroll)
        if (window.scrollY > 427) {
            this.setState(({listenScroll}) => ({
                listenScroll: -427 + window.scrollY
            }))
        } else {
            this.setState(({listenScroll}) => ({
                listenScroll: 0
            }))
        }
    }


    render() {
        const { charList, loading, error, charDescription, loadingBtn, listenScroll } = this.state;

        const characterList = charList.map((item, index) => {
            return <CardCharacter src={item.thumbnail} name={item.name} key={item.id} tabIndex={index} onClick={() => this.activeDescription(item)} />
        })

        let checkedCharLength = Object.keys(charDescription).length;

        return (
            <div className="homePage">
                <RandomCharacter />
                <div className="wrapperCharacters">
                    <div className="characters">
                        {characterList}
                        {loading ? <Spinner margin='100px 290px' /> : null}
                        {error ? <Error margin='100px 200px' width='250px' height='250px' /> : null}

                    </div>
                    <MyButton
                        titleButton='LOAD MORE'
                        className={loadingBtn ? 'btn_2 loading' : 'btn_2'}
                        display='block'
                        margin='0px 240px 45px'
                        onClick={this.getMoreCharacters}
                        disabled={loadingBtn}
                    />
                </div>
                <ErrorBoundary>
                    {checkedCharLength ?
                        <Description charDescription={charDescription} listenScroll={listenScroll} />
                        :
                        <SelectCharacter listenScroll={listenScroll} />
                    }
                </ErrorBoundary>


                <img src={bgImageBottom} alt='bgImageBottom' className='bgImage' />
            </div>
        )
    }
}

export default HomePage;
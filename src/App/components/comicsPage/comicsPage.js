import CardComics from '../../UI/cardComics/cardComics';
import MyButton from '../../UI/myButton/myButton';
import Banner from '../banner/banner';

import './comicsPage.scss';

const ComicsPage = () => {
    return (
        <div className="comicsPage">
            <Banner/>
            <div className="comicsCardList">
                <CardComics/>
                <CardComics/>
                <CardComics/>
                <CardComics/>
                <CardComics/>
                <CardComics/>
                <CardComics/>
                <CardComics/>
            </div>
            <MyButton titleButton = 'LOAD PAGE' className = 'btn_2' margin = '45px 465px'/>
        </div>
    )
}

export default ComicsPage;
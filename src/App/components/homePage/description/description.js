import MyButton from '../../../UI/myButton/myButton';
import { Component } from 'react';
import './description.scss';
import PropTypes from 'prop-types';

class Description extends Component {

    transformComicsList = (comics) => {
        const localComicsList = [];
        for (let i = 0; i < comics.length && i < 10; i++) {
            localComicsList.push(comics[i]);
        };
        const resultComicsList = localComicsList.map((item, index) => {
            return <li key={index}>{item.name}</li>
        })
        return resultComicsList;
    }

    render() {
        const { name, description, thumbnail, homepage, wiki, comics } = this.props.charDescription;
        const {fixedDescription} =this.props;
        const NOT_COMICS = "Sorry,we didn't find any comics of this character...";

        return (
            <div className={`descriptionCharacter ${fixedDescription}`}>
                <div className="title">
                    <img src={thumbnail} alt={name} />
                    <div className='titleInfo'>
                        <h3>{name}</h3>
                        <div className="buttons">
                            <MyButton
                                titleButton='HOMEPAGE'
                                className='btn_1'
                                display='block'
                                margin='0px 0px 10px 0px'
                                href={homepage}
                            />
                            <MyButton
                                titleButton='WIki'
                                className='btn_1'
                                background='#5C5C5C'
                                href={wiki}
                            />
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p>{description}</p>
                    <h3>Comics:</h3>
                    <ul>
                        {comics.length ? this.transformComicsList(comics) : NOT_COMICS}
                    </ul>
                </div>
            </div>
        )
    }

}

Description.propTypes = {
    charDescription: PropTypes.object,
    fixedDescription: PropTypes.string

}

export default Description;
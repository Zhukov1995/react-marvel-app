import './comicsListItem.scss';


const ComicsListItem = (props) => {
    const { thumbnail, title, price, pageCount, description } = props.activeComics;
    const { goBackToAll } = props;

    const style = {
        display: props.display,
    }

    return (
        <div className="comicsListItem" style={style}>
            <img src={thumbnail} alt={title} />
            <div className="descriptionItem">
                <h3>{title}</h3>
                <p>{description}</p>
                <span>{pageCount} pages</span>
                <span>Language: en-US</span>
                <span className='price'>{price}</span>
                <button onClick={() => goBackToAll()}>Back to all</button>
            </div>
        </div>
    )
}

export default ComicsListItem;
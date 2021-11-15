import './selectCharacter.scss';


const SelectCharacter = (props) => {
    const { listenScroll } = props;

    return (
        <div className={`selectCharacter ${listenScroll}`}>
            <h3>Please select a character to see information</h3>
            <div className="firstBlock">
                <div className="circle"></div>
                <div className="firstLine"></div>
            </div>
            <div className="mainBlock"></div>
            <div className="mainBlock"></div>
            <div className="mainBlock"></div>
        </div>
    )
}

export default SelectCharacter;
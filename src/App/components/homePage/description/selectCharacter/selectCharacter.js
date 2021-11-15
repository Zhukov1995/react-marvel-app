import './selectCharacter.scss';


const SelectCharacter = (props) => {
    const { listenScroll } = props;
    const style = {
        marginTop: listenScroll 
    }
    return (
        <div className={`selectCharacter ${listenScroll}`} style = {style}>
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
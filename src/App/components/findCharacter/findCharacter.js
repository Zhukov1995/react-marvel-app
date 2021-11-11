import MyButton from '../../UI/myButton/myButton';
import './findCharacter.scss';

const FindCharacter = () => {
    return (
        <form className = 'findCharacter'>
            <h3>Or find a character by name:</h3>
            <input type="text" placeholder = 'Enter name'/>
            <MyButton titleButton= 'FIND' className = 'btn_1'/>
            <div className="result">
                <span>There is! Visit name page?</span>
                <MyButton titleButton = 'TO PAGE'  className = 'btn_1' background = '#5C5C5C'/>
            </div>
        </form>
    )
}

export default FindCharacter;
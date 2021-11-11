import './error.scss';
import imgError from './error.gif';

const Error = (props) => {
    const style = {
        margin: props.margin,
        width: props.width,
        height: props.height
    }
    return (
        <img src={imgError} alt="Error" className='error' style={style} />
    )
}

export default Error;
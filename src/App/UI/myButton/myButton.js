import './myButton.scss';

const MyButton = (props) => {
    const style = {
        backgroundColor: props.background,
        display: props.display,
        margin: props.margin
    }
    return (
        <button
            type={props.type}
            className={props.className}
            style={style}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            <a href={props.href}>{props.titleButton}</a>
        </button>
    )
}

export default MyButton;
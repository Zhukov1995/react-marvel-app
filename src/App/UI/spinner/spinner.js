import './spinner.scss'

const Spinner = (props) => {
    const style = {
        margin: props.margin,
        width: props.width,
        height: props.height
    }
    return (
        <div className="spin-wrapper" style={style}>
            <div className="spinner">
            </div>
        </div>
    )
}

export default Spinner;
import { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
        this.setState({
            error: true
        });
    }

    render() {
        if (this.state.error) {
            return <h1>something went wrong, please refresh the page!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;
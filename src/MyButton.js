import * as React from "react";

class MyButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {counter: 1};
    }

    clickEvent = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    };

    render() {
        return <button onClick={this.clickEvent}>{this.state.counter}</button>
    }
}

export default MyButton
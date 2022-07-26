import React from "react";

class Watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="watch">


                <h2>{this.state.date.toLocaleTimeString(
                    'ru-RU', {
                        hour12: false,
                        timeZone: "Asia/Yekaterinburg"
                    }
                    )}</h2>
            </div>
        );
    }
}

export default Watch
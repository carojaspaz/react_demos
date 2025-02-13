import React from "react";

interface ClockState {
    hour: string;
}

class Clock extends React.Component<{}, ClockState> {
    timer: any;
    constructor(props : any) {
        super(props);
        console.log('Constructor Unmounting');
        this.state = { hour: new Date().toLocaleTimeString() };
    }

    componentDidMount(): void {
        this.timer = setInterval(() => {
            this.setState({ hour: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount(): void {
        console.log('Unmounting');
        clearInterval(this.timer);
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>Hora: { this.state.hour }</h1>
            </div>
        )
    }
}

export default Clock;
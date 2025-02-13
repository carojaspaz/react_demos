import React from 'react';

interface CounterState {
    count: number;
}

class Counter extends React.Component<{}, CounterState> {
    constructor(props : any) {
        super(props);
        console.log('Constructor Updating');
        this.state = { count: 0 };
    }

    inc = () => {
        this.setState({ count: this.state.count + 1 });
    };

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('Componente Actualizado');
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inc}>Incrementar</button>
            </div>
        );
    }
}

export default Counter;
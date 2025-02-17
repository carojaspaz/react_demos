import { Component } from 'react';

interface ContadorState {
  contador: number;
}

class Contador_Class extends Component<{}, ContadorState> {
  constructor(props : any) {
    super(props);
    this.state = { contador : 0 };
  }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>Contador: {this.state.contador}</p>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default Contador_Class;

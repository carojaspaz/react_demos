import React from "react";

import "../assets/css/errorComponent.css";

interface ErrorComponentState {
  raiseError: boolean;
}

class ErrorComponent extends React.Component<{}, ErrorComponentState> {
  constructor(props: {}) {
    super(props);
    this.state = { raiseError: false };
  }

  handleError = () => {
    this.setState({ raiseError: true });
  };

  render() {
    if (this.state.raiseError) {
      throw new Error("¡Algo salió mal en ComponenteConError!");
    }
    return (
      <div>
        <h3>Componente que puede fallar</h3>
        <button className="custom-button" onClick={this.handleError}>Generar Error</button>
      </div>
    );
  }
}

export default ErrorComponent;

import React from "react";

interface ErrorhandlingProps {
  children: React.ReactNode;
}

interface ErrorhandlingState {
  hasError: boolean;
}

class Errorhandling extends React.Component<ErrorhandlingProps, ErrorhandlingState> {
  constructor(props: ErrorhandlingProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.log(error);
    console.log("Error capturado: ", errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 style={{ color: "red" }}>⚠️ Algo salió mal. Inténtalo de nuevo.</h2>
      );
    } else {
      return this.props.children;
    }
  }
}

export default Errorhandling;

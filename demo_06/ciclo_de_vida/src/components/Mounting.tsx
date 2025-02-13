import React from "react";

interface ComponentMountingState {
  msg: string;
}

class ComponentMounting extends React.Component<{}, ComponentMountingState> {
  constructor(props : any) {
    super(props);
    console.log('Constructor Mounting');
    this.state = { msg: "Hola Mundo" };
  }

  componentDidMount() {
    console.log('Componente Montado');
  }

  render() {
    console.log('render');
    return <h1>{ this.state.msg }</h1>;
  }
}

export default ComponentMounting;
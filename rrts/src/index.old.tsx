import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
  color: string
}

interface AppState {
  counter: number
}

// function App(props: AppProps): JSX.Element {
//   return <div>{props.color}</div>
// }

class App extends React.Component<AppProps, AppState> {

  // why ts won't throw error if we are using state this way, vvv this below line 
  // state = { counter: 0 }; // es2015 way

  constructor(props: AppProps) {
    super(props);

    this.state = { counter: 0 };
  }

  onIncerment = (): void => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  onDecrement = (): void => {
    this.setState({
      counter: this.state.counter - 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onIncerment}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(
  <App color="red" />, 
  document.getElementById('root')
)
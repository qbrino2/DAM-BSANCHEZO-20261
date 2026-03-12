import { View, Text } from 'react-native';
import React from 'react';
import { CountScreen } from './Components';
import { appStyles } from './App.style';

type AppProps = {}

type AppState = {
  number1: number | null
  number2: number | null
  operation: string
  display: string
}

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    number1: null,
    number2: null,
    operation: "",
    display: ""
  }

  handleNumber = (num: number) => {

    if (this.state.number1 === null) {
      this.setState({
        number1: num,
        display: num.toString()
      })
    }

    else if (this.state.operation !== "" && this.state.number2 === null) {
      this.setState({
        number2: num,
        display: this.state.display + " " + num
      })
    }

  }

  handleOperation = (op: string) => {

    if (this.state.number1 !== null) {
      this.setState({
        operation: op,
        display: this.state.number1 + " " + op
      })
    }

  }

  handleResult = () => {

    const { number1, number2, operation } = this.state

    if (number1 !== null && number2 !== null) {

      let result = 0

      if (operation === "+") {
        result = number1 + number2
      }

      if (operation === "-") {
        result = number1 - number2
      }

      this.setState({
        display: result.toString(),
        number1: null,
        number2: null,
        operation: ""
      })

    }

  }

  render() {

    return (

      <View style={appStyles.safeArea}>
        <View style={appStyles.container}>

          <Text style={{ fontSize: 40, marginBottom: 20 }}>
            {this.state.display}
          </Text>

          <CountScreen label="1" OnPress={() => this.handleNumber(1)} />
          <CountScreen label="2" OnPress={() => this.handleNumber(2)} />
          <CountScreen label="3" OnPress={() => this.handleNumber(3)} />

          <CountScreen label="+" OnPress={() => this.handleOperation("+")} />
          <CountScreen label="-" OnPress={() => this.handleOperation("-")} />

          <CountScreen label="=" OnPress={this.handleResult} />

        </View>
      </View>

    );
  }
}

export default App;
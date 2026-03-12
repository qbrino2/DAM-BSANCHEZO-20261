import { View, Text } from 'react-native';
import React from 'react';
import { CountScreen } from './Components';
import { appStyles } from './App.style';

type AppProps = {}

type AppState = {
  display: string
  firstNumber: number
  operation: string
}

class App extends React.Component<AppProps, AppState> {

  state: AppState = {
    display: "0",
    firstNumber: 0,
    operation: ""
  }

  handleNumber = (num: string) => {
    this.setState({
      display: this.state.display === "0"
        ? num
        : this.state.display + num
    })
  }

  handleOperation = (op: string) => {
    this.setState({
      firstNumber: Number(this.state.display),
      operation: op,
      display: "0"
    })
  }

handleResult = () => {

  const secondNumber = Number(this.state.display)
  const { firstNumber, operation } = this.state

  let result = 0

  switch (operation) {
    case "+":
      result = firstNumber + secondNumber
      break
    case "-":
      result = firstNumber - secondNumber
      break
    case "*":
      result = firstNumber * secondNumber
      break
    case "/":
      result = firstNumber / secondNumber
      break
  }

  console.log("RESULTADO:", result)


    this.setState({
      display: result.toString()
    })
  }

  render() {

    return (

      <View style={appStyles.safeArea}>
        <View style={appStyles.container}>

          <Text style={{ fontSize: 40, marginBottom: 20 }}>
            {this.state.display}
          </Text>

          <CountScreen label="1" OnPress={() => this.handleNumber("1")} />
          <CountScreen label="2" OnPress={() => this.handleNumber("2")} />
          <CountScreen label="3" OnPress={() => this.handleNumber("3")} />

          <CountScreen label="+" OnPress={() => this.handleOperation("+")} />
          <CountScreen label="-" OnPress={() => this.handleOperation("-")} />
          <CountScreen label="" OnPress={() => this.handleOperation("")} />
          <CountScreen label="/" OnPress={() => this.handleOperation("/")} />

          <CountScreen label="=" OnPress={this.handleResult} />

        </View>
      </View>

    );
  }
}

export default App;
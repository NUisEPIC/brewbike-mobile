import * as React from 'react'
import { Text, Button, View, StyleSheet } from 'react-native'

import Test from './Test'

interface IProps extends React.Props<void> { }

interface IState {
	count: number
}

class Counter extends React.Component<IProps, IState> {

	public state: IState = { count: 0 }

	render() {
		const { count } = this.state

		return (
			<View style={styles.container}>
				<Text>Count: {count}</Text>
				<Button title='Increment' onPress={this._onIncrement} />
				<Test />
			</View>
		)
	}

	private _onIncrement = () => {
		this.setState({ count: this.state.count + 1 })
	}

}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		padding: 10
	}
})

export default Counter

import * as React from 'react'
import { ScrollView, RefreshControl, View, Text, Button, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface IProps extends NavigationScreenProps<void> { }

interface IState {
	refreshing: boolean
}

class Locations extends React.Component<IProps, IState> {

	public static navigationOptions = { title: 'Locations' }

	public state = { refreshing: false }

	public render(): JSX.Element {
		return (
			<ScrollView contentContainerStyle={styles.container} refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}>
				<View style={styles.card}>
					<Text>Location abc</Text>
					<Button title='Navigate' onPress={this._onNavigate.bind(null, 'abc')} />
				</View>
				<View style={styles.card}>
					<Text>Location xyz</Text>
					<Button title='Navigate' onPress={this._onNavigate.bind(null, 'xyz')} />
				</View>
			</ScrollView>
		)
	}

	private _onRefresh = () => {
		this.setState({ refreshing: true })

		setTimeout(() => {
			this.setState({ refreshing: false })
		}, 2000)
	}

	private _onNavigate = (id: string) => {
		this.props.navigation.navigate('Location', { id })
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	card: {
		backgroundColor: '#fff',
		paddingHorizontal: 15,
		paddingVertical: 8,
		margin: 15
	}
})

export default Locations

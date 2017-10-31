import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'

interface IParams {
	id: string
}

interface IProps extends NavigationScreenProps<IParams> { }

class Location extends React.Component<IProps, {}> {

	public static navigationOptions = ({ navigation }: IProps) => ({
		title: `Location ${navigation.state.params.id}`,
	})

	public render(): JSX.Element {
		return (
			<View style={styles.container}>
				<Text>{this.props.navigation.state.params.id}</Text>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15
	}
})

export default Location

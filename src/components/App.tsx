import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'

interface IProps extends React.Props<void> {
	platform: string
}

import Counter from './Counter'

const App: React.StatelessComponent<IProps> = (props: IProps): JSX.Element => (
	<View style={styles.container}>
		<Text>{props.platform}</Text>
		<Counter />
	</View>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default App

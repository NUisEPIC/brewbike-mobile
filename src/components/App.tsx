import * as React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Locations from './Locations'
import Location from './Location'

const navigator = StackNavigator({
	Locations: {
		screen: Locations,
		path: ''
	},
	Location: {
		screen: Location,
		path: 'location/:id'
	}
}, {
		initialRouteName: 'Locations',
		headerMode: 'float',
		mode: Platform.OS === 'ios' ? 'modal' : 'card'
	})

interface IProps extends React.Props<void> {
	platform: string
}

const App: React.StatelessComponent<IProps> = (): JSX.Element => React.createElement(navigator)

export default App

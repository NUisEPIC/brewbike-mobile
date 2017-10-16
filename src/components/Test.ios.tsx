import * as React from 'react'
import { Text } from 'react-native'

interface IProps extends React.Props<void> { }

const Test: React.StatelessComponent<IProps> = (): JSX.Element => <Text>iOS</Text>

export default Test

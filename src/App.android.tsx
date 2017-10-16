import * as React from 'react'

import App from './components/App'

interface IProps extends React.Props<void> { }

const AndroidApp: React.StatelessComponent<IProps> = (): JSX.Element => <App platform='Android' />

export default AndroidApp

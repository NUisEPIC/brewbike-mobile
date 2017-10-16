import * as React from 'react'

import App from './components/App'

interface IProps extends React.Props<void> { }

const IOSApp: React.StatelessComponent<IProps> = (): JSX.Element => <App platform='iOS' />

export default IOSApp

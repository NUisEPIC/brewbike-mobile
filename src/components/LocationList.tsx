import * as React from 'react'
import { Text, View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native'

interface ILocation {
    location: string
    open: string
    close: string
}

interface IData {
    locations: Array<ILocation>
}

const dummyData: IData = {
    locations: [
        { location: "X", open: "Y:YY", close: "Z:ZZ" },
        { location: "T", open: "Y:YY", close: "Z:ZZ" }
    ]
}

interface IProps extends React.Props<void> { }

interface IState {
    data: IData
}

const styles = StyleSheet.create({
	container: {
        flex: 0,
		alignItems: 'center',
		padding: 10
	}
})

class LocationList extends React.Component<IProps, IState> {

    public state: IState = {
        data: dummyData
    }

    private _renderItem = (item: ListRenderItemInfo<ILocation>): JSX.Element => {
        return (
            <Text>{item.item.location}</Text>
        )
    }

    public render(): JSX.Element {
        const data = this.state.data

        return (
            <View style={styles.container}>
                <FlatList
                    data={data.locations}
                    keyExtractor={(item) => item.location}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }

}

export default LocationList
export default function createBlueKit (basic) {
    let {React, Image, StyleSheet, Text, View} = basic

    const viewStyles = {
        width: '100%',
        height: 44,
        backgroundColor: '#262b42'
    }

    class Bluekit extends React.Component {
        render () {
            return (
                <View style={viewStyles}>

                </View>
            )
        }
    }

    return Bluekit
}